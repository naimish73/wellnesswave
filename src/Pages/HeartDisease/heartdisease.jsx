import React, {useState} from 'react'
import './heartdisease.css'

const heartdisease = () => {

    const [prediction, setPrediction] = useState(null);
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
    
        // Function to get token from your backend proxy
        const getToken = async () => {
            try {
                const response = await fetch('http://localhost:5000/get-token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

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
    
        const makePrediction = async (token) => {
            
            const payload = {
                input_data: [
                    {
                        fields: [
                            'age',
                            'sex',
                            'cp',
                            'trestbps',
                            'chol',
                            'fbs',
                            'restecg',
                            'thalach',
                            'exang',
                            'oldpeak',
                            'slope',
                            'ca',
                            'thal',
                        ],
                        values: [Object.values(formData).map((value) => parseFloat(value))],
                    },
                ],
            };
            
            const requestOptions = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify(payload),
            };
    
            try {
                const response = await fetch('http://localhost:5000/make-prediction', requestOptions);
    
                if (!response.ok) {
                    throw new Error('Failed to make prediction');
                }
    
                return await response.json();
                
                // Handle prediction response as needed
            } catch (error) {
                console.error('Error making prediction:', error);
            }

        }    
    
    
        // Main function to handle form submission
        const handleFormSubmit = async () => {
            try {
                const token = await getToken();
                const response = await makePrediction(token);

                setPrediction(response.predictions[0].values[0][0])
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
                            <label className="form-label" htmlFor="sex">Gender </label>
                            <input className="form-control" onChange={handleChange} required value={formData.sex} type="number" name="sex" placeholder="eg. 1 for male/ 0 for female"  />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="cp">Chest Pain Type </label>
                            <input className="form-control" onChange={handleChange} required value={formData.cp} type="number" name="cp" placeholder="eg. 0-3"  />
                        </div>  
                        <div className="form-group">
                            <label className="form-label" htmlFor="trestbps">Resting Blood Pressure (mmHg)</label>
                            <input className="form-control" onChange={handleChange} required value={formData.trestbps} type="number" name="trestbps" placeholder="eg. 104"  />
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
                            <label className="form-label" htmlFor="restecg">Electrocardiographic </label>
                            <input className="form-control" onChange={handleChange} required value={formData.restecg} type="number" name="restecg" placeholder="eg. 0-2"  />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="thalach">Maximum Heart Rate </label>
                            <input className="form-control" onChange={handleChange} required value={formData.thalach} type="number" name="thalach" placeholder="eg. 148"  />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="exang">Angina Exercise </label>
                            <input className="form-control" onChange={handleChange} required type="number" value={formData.exang} name="exang" placeholder="eg. 1 for yes/0 for no"  />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="oldpeak">ST Depression Exercise </label>
                            <input className="form-control" onChange={handleChange} required value={formData.oldpeak} type="number" name="oldpeak" placeholder="eg. 0-6.2"  />
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
                        {
                            prediction !== null &&
                            <div>
                                {prediction === 1 ? 'Patient has heart disease' : 'Patient does not have heart disease'}
                            </div>
                            
                        }
                    </div>
                </fieldset>
            </form>
        </div>  
    )
}

export default heartdisease