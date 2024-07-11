import React from 'react'
import { useState } from 'react';
import './breastcancer.css'

const breastcancer = () => {

    const [formData, setFormData] = useState({
        'Clump Thickness':'',
        'Uniformity of Cell Size' : '',
        'Uniformity of Cell Shape' : '',
        'Marginal Adhesion' : '',
        'Single Epithelial Cell Size' : '',
        'Bare Nuclei' : '',
        'Bland Chromatin' : '',
        'Normal Nucleoli' : '',
        'Mitoses' : ''
        
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

        const API_KEY = 'V66E8JxRSoqnXEj67Doe3zEjsbCkOIgZi68s9J6wD27m';//import.meta.env.API_KEY;

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
            const scoringUrl = 'https://us-south.ml.cloud.ibm.com/ml/v4/deployments/92baf6ad-2dba-4095-bb52-fdfd0db0e213/predictions?version=2021-05-01';

            // Prepare payload with dynamic form data
            const payload = {
                "input_data": [
                    {
                        "fields": ['age','sex','cp','trestbps','chol','fbs','restecg','thalach','exang','oldpeak','slope','ca','thal' ],
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
        <h1 className='cancer-container1'>Breast Cancer Prediction</h1>
        <h3 className='cancer-container2'>Please enter the patient details</h3>
        <form action="{{ url_for('predictt')}}" method="post" className ="form-inline">
            <fieldset className='form-fieldset'>
                <div className="tabcontent" id="new">
                    <div className="form-group">
                        <label className="form-label" htmlFor="clump_thickness">Clump Thickness </label>
                        <input className="form-control" type="number" name="clump_thickness" placeholder="eg. 1-10" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="uniform_cell_size">Uniformity of Cell Size </label>
                        <input className="form-control" type="number" name="uniform_cell_size" placeholder="eg. 1-10" required="required"/>
                    </div>  
                    <div className="form-group">
                        <label className="form-label" htmlFor="uniform_cell_shape">Uniformity of Cell Shape </label>
                        <input className="form-control" type="number" name="uniform_cell_shape" placeholder="eg. 1-10" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="marginal_adhesion">Marginal Adhesion </label>
                        <input className="form-control" type="number" name="marginal_adhesion" placeholder="eg. 1-10" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="single_epithelial_size">Single Epithelial Cell Size </label>
                        <input className="form-control" type="number" name="single_epithelial_size" placeholder="eg. 1-10" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="bare_nuclei">Bare Nuclei </label>
                        <input className="form-control" type="number" name="bare_nuclei" placeholder="eg. 1-10" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="bland_chromatin">Bland Chromatin</label>
                        <input className="form-control" type="number" name="bland_chromatin" placeholder="eg. 1-10" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="normal_nucleoli">Normal Nucleoli</label>
                        <input className="form-control" type="number" name="normal_nucleoli" placeholder="eg. 1-10" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="mitoses">Mitoses </label>
                        <input className="form-control" type="number" name="mitoses" placeholder="eg. 1-10" required="required"/>
                    </div>
                    <button type="submit" className="predict-btn">Predict</button>
                </div>
            </fieldset>
        </form>
    </div>
  )
}

export default breastcancer