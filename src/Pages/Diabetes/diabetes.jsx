import React from 'react'
import './diabetes.css'

const Diabetes = () => {
  return (
    <div>
        <h1 className='dia-container1'>Diabetes Prediction</h1>
        <h3 className='dia-container2'>Please enter the patient details</h3>
        <form action="{{ url_for('predictt')}}" method="post" className ="form-inline">
            <fieldset className='form-fieldset'>
                <div className="tabcontent" id="new">
                    <div className="form-group">
                        <label className="form-label" htmlFor="pregnancies">Number of Pregnancies</label>
                        <input className="form-control" type="number" name="pregnancies" placeholder="eg. 1 " required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="glucose">Glucose Level (mg/dL)</label>
                        <input className="form-control" type="number" name="glucose" placeholder="eg. 80" required="required"/>
                    </div>  
                    <div className="form-group">
                        <label className="form-label" htmlFor="bloodpressure">Blood Pressure (mmHg)</label>
                        <input className="form-control" type="number" name="bloodpressure" placeholder="eg. 80" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="skinthickness">Skin Thickness (mm)</label>
                        <input className="form-control" type="number" name="skinthickness" placeholder="eg. 20" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="insulin">Insulin Level (IU/mL) </label>
                        <input className="form-control" type="number" name="insulin" placeholder="eg. 80" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="bmi">Body Mass Index (kg/m²)</label>
                        <input className="form-control" type="number" name="bmi" placeholder="eg. 23.1" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="dpf">Diabetes Pedigree Function</label>
                        <input className="form-control" type="number" name="dpf" placeholder="eg. 0.52" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="age">Patient Age in Years</label>
                        <input className="form-control" type="number" name="age" placeholder="eg. 34" required="required"/>
                    </div>
                    <button type="submit" className="predict-btn">Predict</button>
                </div>
            </fieldset>
        </form>
    </div>
  )
}
export default Diabetes;