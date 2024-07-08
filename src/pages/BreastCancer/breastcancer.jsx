import React from 'react'
import './breastcancer.css'

const breastcancer = () => {
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