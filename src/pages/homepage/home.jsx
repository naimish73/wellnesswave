// import React from 'react'
// import './home.css'
// import Navbar from '../../Components/Navbar/Navbar'
// import {useNavigate} from 'react-router-dom'
// import goodhealth from '../../assets/images/good-health-and-wellbeing.jpg'

// function Home() {
//   const navigate = useNavigate()
//   const handleClick = () => {
//     navigate('/disindex')
//   }
//   return (
//     <div className='homepage'>
//       <Navbar />
//       <div className='homepage-container'>
//         <div className='left-text'>  
//           <h1 className='hp-h1'>Hello! Welcome to WellnessWave.</h1>
//           <p className='hp-p'>WellnessWave is a tool used to check the patient diseases using their various reports. Just by putting the reports of their health this tool can give the name of disease the person is having and can also give solution to prevent the spread of the disease.You can also learn about various types of diseases this tool checks and their symptoms.</p>
//           <p className='hp-p'><a className="disease-index" onClick={handleClick} role="button">Get Started</a></p>
//         </div>
//         <div className='homepage-image'>
//           <img className='gh-img' src={goodhealth} />
//         </div>
//       </div>
//       <div className='homepage-features'>
//         <div className='hf-container'>
//           <div className='Diabetes Prediction'>
//             <h2>1. Diabetes Prediction:</h2>
//             <p>Navigate to the "Diabetes" section and add the corresponding details and click on predict to learn whether the patient is at the risk of this illness/disease.</p>
//           </div>
//           <div className='Cancer Prediction'>
//             <h2>2. Cancer Prediction:</h2>
//             <p>Navigate to the "Cancer" section and add the corresponding details and click on predict to learn whether the patient is at the risk of this illness/disease.</p>
//           </div>
//           <div className='Heart Disease Prediction'>
//             <h2>3. Heart Disease Prediction:</h2>
//             <p>Navigate to the "Heart Disease" section and add the corresponding details and click on predict to learn whether the patient is at the risk of this illness/disease.</p>
//           </div>
//         </div>
//       </div>

        
//     </div>
//   )
// }

// export default Home;
import React from 'react';
import './home.css';
import Navbar from '../../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import goodhealth from '../../assets/images/good-health-and-wellbeing.jpg';

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/disindex');
  };
  return (
    <div className="homepage">
      <Navbar />
      <div className="homepage-container">
        <div className="left-text">
          <h1 className="hp-h1">Welcome to WellnessWave</h1>
          <p className="hp-p">
            WellnessWave is a tool used to check patient diseases using their various reports. Just by uploading their health reports, this tool can diagnose the disease and provide solutions to prevent its spread. You can also learn about various types of diseases this tool checks and their symptoms.
          </p>
          <p className="hp-p">
            <a className="disease-index" onClick={handleClick} role="button">
              Get Started
            </a>
          </p>
        </div>
        <div className="homepage-image">
          <img className="gh-img" src={goodhealth} alt="Good Health and Wellbeing" />
        </div>
      </div>
      <div className="homepage-features">
        <div className="hf-container">
          <div className="feature">
            <h2>Diabetes Prediction</h2>
            <p>
              Navigate to the "Diabetes" section and add the corresponding details to learn whether the patient is at risk of this illness/disease.
            </p>
          </div>
          <div className="feature">
            <h2>Cancer Prediction</h2>
            <p>
              Navigate to the "Cancer" section and add the corresponding details to learn whether the patient is at risk of this illness/disease.
            </p>
          </div>
          <div className="feature">
            <h2>Heart Disease Prediction</h2>
            <p>
              Navigate to the "Heart Disease" section and add the corresponding details to learn whether the patient is at risk of this illness/disease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;