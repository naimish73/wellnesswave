import React, {useState} from 'react'
import './heartdisease.css'

const heartdisease = () => {

    const [formData, setFormData] = useState({
        age: '',
        sex: '',
        cp: '',
        trestbps: '',
        chol: '',
        fbs: '',
        restecg: '',
        thalach: '',
        exang: '',
        oldpeak: '',
        slope: '',
        ca: '',
        thal: '',

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

        const API_KEY = import.meta.env.HEART_DISEASE_APIKEY;

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
            <h1 className='hd-container1'>Heart Disease Prediction</h1>
            <h3 className='hd-container2'>Please enter the patient details</h3>
            <form onSubmit={handleSubmit} method="post" className ="form-inline">
                <fieldset className='form-fieldset'>
                    <div className="tabcontent" id="new">
                        <div className="form-group">
                            <label className="form-label" htmlFor="age">Patient Age in Years </label>
                            <input className="form-control" onChange={handleChange} required value={formData.age} type="number" name="age" placeholder="eg. 45"  />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="gender">Gender </label>
                            <input className="form-control" onChange={handleChange} required value={formData.gender} type="number" name="gender" placeholder="eg. 1 for male/ 0 for female"  />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="cp">Chest Pain Type </label>
                            <input className="form-control" onChange={handleChange} required value={formData.cp} type="number" name="cp" placeholder="eg. 0-3"  />
                        </div>  
                        <div className="form-group">
                            <label className="form-label" htmlFor="bloodpressure">Resting Blood Pressure (mmHg)</label>
                            <input className="form-control" onChange={handleChange} required value={formData.bloodpressure} type="number" name="bloodpressure" placeholder="eg. 104"  />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="chol">Serum Cholestoral (mg/dl)</label>
                            <input className="form-control" onChange={handleChange} required value={formData.chol} type="number" name="chol" placeholder="eg. 208"  />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="fbs">Fasting Blood Sugar (mg/dl) </label>
                            <input className="form-control" onChange={handleChange} required value={formData.fbs} type="number" name="fbs" placeholder="eg. 0 for less than 120 mg/dl or 1 for more than 120 mg/dl"  />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="ecg">Electrocardiographic </label>
                            <input className="form-control" onChange={handleChange} required value={formData.ecg} type="number" name="ecg" placeholder="eg. 0-2"  />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="heart_rate">Maximum Heart Rate </label>
                            <input className="form-control" onChange={handleChange} required value={formData.heart_rate} type="number" name="heart_rate" placeholder="eg. 148"  />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="angina_exercise">Angina Exercise </label>
                            <input className="form-control" onChange={handleChange} required type="number" value={formData.angina_exercise} name="angina_exercise" placeholder="eg. 1 for yes/0 for no"  />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="st_depression">ST Depression Exercise </label>
                            <input className="form-control" onChange={handleChange} required value={formData.st_depression} type="number" name="st_depression" placeholder="eg. 0-6.2"  />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="slope">Slope of peak exercise ST segment </label>
                            <input className="form-control" onChange={handleChange} required value={formData.slope} type="number" name="slope" placeholder="eg. 0-2"  />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="ca">Major vessels colored by Flourosopy </label>
                            <input className="form-control" onChange={handleChange} required value={formData.ca} type="number" name="ca" placeholder="eg. 0-3"  />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="thal">Thal </label>
                            <input className="form-control" onChange={handleChange} required value={formData.thal} type="number" name="thal" placeholder="eg. 1=normal/ 2=fixed/ 3=reversable defect "  />
                        </div>
                        <button type="submit" className="predict-btn">Predict</button>
                    </div>
                </fieldset>
            </form>
        </div>  
    )
}

export default heartdisease