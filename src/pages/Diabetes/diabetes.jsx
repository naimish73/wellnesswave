import React, { useState } from 'react';
import './diabetes.css';

const Diabetes = () => {
    const [formData, setFormData] = useState({
        pregnancies: '',
        glucose: '',
        bloodpressure: '',
        skinthickness: '',
        insulin: '',
        bmi: '',
        dpf: '',
        age: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const API_KEY = import.meta.env.API_KEY;

        // Function to get token from IBM Cloud IAM
        const getToken = async () => {
            const tokenUrl = 'https://iam.cloud.ibm.com/identity/token';
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                },
                body: `grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${API_KEY}`
            };

            try {
                const response = await fetch(tokenUrl, requestOptions);
                if (!response.ok) {
                    throw new Error('Failed to retrieve token');
                }
                const data = await response.json();
                return data.access_token;
            } catch (error) {
                console.error('Error fetching token:', error);
                throw error;
            }
        };

        // Function to make prediction request
        const makePrediction = async (token) => {
            const scoringUrl = 'https://us-south.ml.cloud.ibm.com/ml/v4/deployments/diabetes03/predictions?version=2021-05-01';

            // Prepare payload with dynamic form data
            const payload = {
                "input_data": [
                    {
                        "fields": ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age'],
                        "values": [
                            Object.values(formData).map(value => parseFloat(value))
                        ]
                    }
                ]
            };

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify(payload)
            };

            try {
                const response = await fetch(scoringUrl, requestOptions);
                if (!response.ok) {
                    throw new Error('Failed to make prediction');
                }
                const data = await response.json();
                console.log('Prediction response:', data);
                // Handle prediction response as needed
            } catch (error) {
                console.error('Error making prediction:', error);
            }
        };

        // Main function to handle form submission
        const handleFormSubmit = async () => {
            try {
                const token = await getToken();
                await makePrediction(token);
            } catch (error) {
                console.error('Error handling form submission:', error);
            }
        };

        handleFormSubmit();
    };

    return (
        <div>
            <h1 className='dia-container1'>Diabetes Prediction</h1>
            <h3 className='dia-container2'>Please enter the patient details</h3>
            <form onSubmit={handleSubmit} className ="form-inline">
                <fieldset className='form-fieldset'>
                    <div className="tabcontent" id="new">
                        <div className="form-group">
                            <label className="form-label" htmlFor="pregnancies">Number of Pregnancies</label>
                            <input
                                className="form-control"
                                type="number"
                                name="pregnancies"
                                placeholder="eg. 0 for male"
                                value={formData.pregnancies}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="glucose">Glucose Level (mg/dL)</label>
                            <input
                                className="form-control"
                                type="number"
                                name="glucose"
                                placeholder="eg. 80"
                                value={formData.glucose}
                                onChange={handleChange}
                                required
                            />
                        </div>  
                        <div className="form-group">
                            <label className="form-label" htmlFor="bloodpressure">Blood Pressure (mmHg)</label>
                            <input
                                className="form-control"
                                type="number"
                                name="bloodpressure"
                                placeholder="eg. 80"
                                value={formData.bloodpressure}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="skinthickness">Skin Thickness (mm)</label>
                            <input
                                className="form-control"
                                type="number"
                                name="skinthickness"
                                placeholder="eg. 20"
                                value={formData.skinthickness}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="insulin">Insulin Level (IU/mL) </label>
                            <input
                                className="form-control"
                                type="number"
                                name="insulin"
                                placeholder="eg. 80"
                                value={formData.insulin}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="bmi">Body Mass Index (kg/m²)</label>
                            <input
                                className="form-control"
                                type="number"
                                name="bmi"
                                placeholder="eg. 23.1"
                                value={formData.bmi}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="dpf">Diabetes Pedigree Function</label>
                            <input
                                className="form-control"
                                type="number"
                                name="dpf"
                                placeholder="eg. 0.52"
                                value={formData.dpf}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="age">Patient Age in Years</label>
                            <input
                                className="form-control"
                                type="number"
                                name="age"
                                placeholder="eg. 34"
                                value={formData.age}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="predict-btn">Predict</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Diabetes;
