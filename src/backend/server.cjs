const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const env = require('dotenv').config();

const app = express();
const PORT = 5000;

const API_KEY = process.env.HEART_DISEASE_APIKEY;

app.use(cors());
app.use(bodyParser.json());

app.post('/get-token', async (req, res) => {

    const tokenUrl = 'https://iam.cloud.ibm.com/identity/token';
    const fetch = (await import('node-fetch')).default;
    
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
        res.json(data);
    } catch (error) {
        console.error('Error fetching token:', error);
        res.status(500).send('Error fetching token');
    }
});

// Route to handle prediction request
app.post('/make-prediction', async (req, res) => {

    const scoringUrl = 'https://us-south.ml.cloud.ibm.com/ml/v4/deployments/92baf6ad-2dba-4095-bb52-fdfd0db0e213/predictions?version=2021-05-01';
    const formData = req.body;
    
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': req.headers.authorization,
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(formData)
    };

    try {
        const response = await fetch(scoringUrl, requestOptions);
        if (!response.ok) {
            throw new Error('Failed to make prediction');
        }

        const data = await response.json();
        console.log('Prediction response:', data);
        res.json(data); // Send prediction response back to client

    } catch (error) {
        console.error('Error making prediction:', error);
        res.status(500).json({ error: 'Failed to make prediction' });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
