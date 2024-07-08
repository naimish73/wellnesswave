import React from 'react'
import {useNavigate} from 'react-router-dom'
import './disindex.css'
import diabetesImage from '../../assets/images/diabetes.png'
import cancerImage from '../../assets/images/breastcancer.jpg'
import heartImage from '../../assets/images/heart.png'


const Disindex = () => {
    const navigate = useNavigate()

    const handleDiabetesClick = () => {
      navigate('/diabetes')
    }
    const handleCancerClick = () => {
      navigate('/breastcancer')
    }
    const handleHeartClick = () => {
      navigate('/heartdisease')
    }  
  return (
    <div className='disindexpage'>
        <div className='disindex-container'>
            <h1 className='dis-h1'>WellnessWave - Diseases Index</h1>
            <p className='dis-p1'>This is a directory of all the diseases that WellnessWave can generate assessments for patient. This index provides in depth details about the disease including its symptoms.</p>
            <h2 className='dis-h2'>1. Diabetes:</h2>
            <div className='dis-images'>
                <img className='dis-img' src={diabetesImage} /><br/><br/>
                <p>Fig1. Complication of Diabetes.</p><br/>
            </div>
            <p className='dis-p1'>Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat. Insulin, a hormone made by the pancreas, helps glucose from food get into your cells to be used for energy.</p>
            <h3 className='dis-h3'>What health problems can people with diabetes develop? </h3>
            <p className='dis-p1'>Over time, high blood glucose leads to problems such as</p>

            <ul className='dis-ul'>
                <li>Heart Disease</li>
                <li>Stroke</li>
                <li>Kidney disease</li>
                <li>Eye problems</li>
                <li>Dental disease</li>
                <li>Nerve damage</li>
                <li>Foot problems</li>
            </ul>
            <p className='dis-p1'>Click the below button to check for Diabetes.</p>
            <p className='dis-p1'><a className="check-diabetes" onClick={handleDiabetesClick} role="button">Check Diabetes</a></p>
            <br/>
            <hr/>
            <br/>
            
            <h2 className='dis-h2'>2. Breast Cancer:</h2>
            <div className='dis-images'>
                <img className='dis-img' src={cancerImage} /><br/><br/>
                <p>Fig2. cells of Breast Cancer.</p><br/>
            </div>
            {/* <p>Cancer is a group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body. These contrast with benign tumors, which do not spread.</p> */}
            <p className='dis-p1'>Breast cancer is cancer that develops from breast tissue. Signs of breast cancer may include a lump in the breast, a change in breast shape, dimpling of the skin, fluid coming from the nipple, a newly inverted nipple, or a red or scaly patch of skin.<br/></p>

            <h3 className='dis-h3'>Symptoms</h3>
            <p className='dis-p1'>Signs and symptoms of breast cancer may include:</p>
            <ul className='dis-ul'>
                <li>A breast lump or thickening that feels different from the surrounding tissue.</li>
                <li>Change in the size, shape or appearance of a breast.</li>
                <li>Changes to the skin over the breast, such as dimpling.</li>
                <li>A newly inverted nipple.</li>
                <li>Peeling, scaling, crusting or flaking of the pigmented area of skin surrounding the nipple (areola) or breast skin.</li>
                <li>Redness or pitting of the skin over your breast, like the skin of an orange.</li>
            </ul>
            <h3 className='dis-h3'>Causes</h3>
            <p className='dis-p1'>Doctors know that breast cancer occurs when some breast cells begin to grow abnormally. These cells divide more rapidly than healthy cells do and continue to accumulate, forming a lump or mass. Cells may spread (metastasize) through your breast to your lymph nodes or to other parts of your body.
            <br/>Breast cancer most often begins with cells in the milk-producing ducts (invasive ductal carcinoma). Breast cancer may also begin in the glandular tissue called lobules (invasive lobular carcinoma) or in other cells or tissue within the breast.
            <br/>Researchers have identified hormonal, lifestyle and environmental factors that may increase your risk of breast cancer. But it's not clear why some people who have no risk factors develop cancer, yet other people with risk factors never do. It's likely that breast cancer is caused by a complex interaction of your genetic makeup and your environment.</p>
            
            <p className='dis-p1'>Click the below button to check for Breast Cancer.</p>
            <p className='dis-p1'><a className="check-cancer" onClick={handleCancerClick} role="button">Check Breast Cancer</a></p>
            <br/>
            <hr/>
            <br/>

            <h2 className='dis-h2'>3. Heart Disease:</h2>
            <div className='dis-images'>
                <img className='dis-img' src={heartImage} /><br/><br/>
                <p>Fig3. Complication of Heart.</p><br/>
            </div>
            <h3 className='dis-h3'>Overview</h3>
            <p className='dis-p1'>Heart disease describes a range of conditions that affect your heart. Diseases under the heart disease umbrella include blood vessel diseases, such as coronary artery disease; heart rhythm problems (arrhythmias); and heart defects you're born with (congenital heart defects), among others.<br/>
            The term "heart disease" is often used interchangeably with the term "cardiovascular disease." Cardiovascular disease generally refers to conditions that involve narrowed or blocked blood vessels that can lead to a heart attack, chest pain (angina) or stroke. Other heart conditions, such as those that affect your heart's muscle, valves or rhythm, also are considered forms of heart disease.<br/>
            Many forms of heart disease can be prevented or treated with healthy lifestyle choices.</p>

            <h3 className='dis-h3'>Symptoms</h3>
            <ul className='dis-ul'>
                <li>Chest pain, chest tightness, chest pressure and chest discomfort (angina)</li>
                <li>Shortness of breath</li>
                <li>Pain, numbness, weakness or coldness in your legs or arms if the blood vessels in those parts of your body are narrowed</li>
                <li>Pain in the neck, jaw, throat, upper abdomen or back</li>
            </ul>
            <p className='dis-p1'>Click the below button to check for Heart Disease.</p>
            <p className='dis-p1'><a className="check-heart" onClick={handleHeartClick} role="button">Check Heart Disease</a></p>
            <br/>
            <hr/>
            <br/>

        </div>
    </div>
  )
}
export default Disindex;