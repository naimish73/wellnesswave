import React from 'react'
import './heartdisease.css'

const heartdisease = () => {
  return (
    <div>
        <h1 className='hd-container1'>Heart Disease Prediction</h1>
        <h3 className='hd-container2'>Please enter the patient details</h3>
        <form action="{{ url_for('predictt')}}" method="post" className ="form-inline">
            <fieldset className='form-fieldset'>
                <div className="tabcontent" id="new">
                    <div className="form-group">
                        <label className="form-label" htmlFor="age">Patient Age in Years </label>
                        <input className="form-control" type="number" name="age" placeholder="eg. 45" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="gender">Gender </label>
                        <input className="form-control" type="number" name="gender" placeholder="eg. 1 for male/ 0 for female" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form- label" htmlFor="cp">Chest Pain Type </label>
                        <input className="form-control" type="number" name="cp" placeholder="eg. 0-3" required="required"/>
                    </div>  
                    <div className="form-group">
                        <label className="form-label" htmlFor="bloodpressure">Resting Blood Pressure (mmHg)</label>
                        <input className="form-control" type="number" name="bloodpressure" placeholder="eg. 104" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="chol">Serum Cholestoral (mg/dl)</label>
                        <input className="form-control" type="number" name="chol" placeholder="eg. 208" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="fbs">Fasting Blood Sugar (mg/dl) </label>
                        <input className="form-control" type="number" name="fbs" placeholder="eg. 0 for less than 120 mg/dl or 1 for more than 120 mg/dl" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="ecg">Electrocardiographic </label>
                        <input className="form-control" type="number" name="ecg" placeholder="eg. 0-2" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="heart_rate">Maximum Heart Rate </label>
                        <input className="form-control" type="number" name="heart_rate" placeholder="eg. 148" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="angina_exercise">Angina Exercise </label>
                        <input className="form-control" type="number" name="angina_exercise" placeholder="eg. 1 for yes/0 for no" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="st_depression">ST Depression Exercise </label>
                        <input className="form-control" type="number" name="st_depression" placeholder="eg. 0-6.2" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="slope">Slope of peak exercise ST segment </label>
                        <input className="form-control" type="number" name="slope" placeholder="eg. 0-2" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="ca">Major vessels colored by Flourosopy </label>
                        <input className="form-control" type="number" name="ca" placeholder="eg. 0-3" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="thal">Thal </label>
                        <input className="form-control" type="number" name="thal" placeholder="eg. 1=normal/ 2=fixed/ 3=reversable defect " required="required"/>
                    </div>
                    <button type="submit" className="predict-btn">Predict</button>
                </div>
            </fieldset>
        </form>
    </div>
  )
}

export default heartdisease