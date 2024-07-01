import React from 'react'
import './home.css'
import Navbar from '../../Components/Navbar/Navbar'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/disindex')
  }
  return (
    <div className='homepage'>
      <Navbar />
      <div className='homepage-container'>
        <h1>Hello! Welcome to WellnessWave.</h1>
        <p>WellnessWave is a tool used to check the patient diseases using their various reports. Just by putting the reports of their health this tool can give the name of disease the person is having and can also give solution to prevent the spread of the disease.You can also learn about various types of diseases this tool checks and their symptoms.</p>
        <p><a className="disease-index" onClick={handleClick} role="button">Get Started</a></p>
      </div>
      <div className='homepage-image'>
        <img src="" />
      </div>
      <div className='homepage-features'>
        <div className='hf-container'>
          <div className='Diabetes Prediction'>
            <h2>1. Diabetes Prediction:</h2>
            <p>Navigate to the "Diabetes" section and add the corresponding details and click on predict to learn whether the patient is at the risk of this illness/disease.</p>
          </div>
          <div className='Cancer Prediction'>
            <h2>2. Cancer Prediction:</h2>
            <p>Navigate to the "Cancer" section and add the corresponding details and click on predict to learn whether the patient is at the risk of this illness/disease.</p>
          </div>
          <div className='Heart Disease Prediction'>
            <h2>3. Heart Disease Prediction:</h2>
            <p>Navigate to the "Heart Disease" section and add the corresponding details and click on predict to learn whether the patient is at the risk of this illness/disease.</p>
          </div>
        </div>
      </div>

        
    </div>
  )
}

export default Home;