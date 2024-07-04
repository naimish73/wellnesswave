const https = require('https');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

prediction=0;

function getToken(errorCallback, loadCallback) {
    const options = {
        method: 'POST',
        hostname: 'iam.cloud.ibm.com',
        path: '/identity/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
    };

    const req = https.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            loadCallback(JSON.parse(data));
        });
    });

    req.on('error', errorCallback);

    req.write(`grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${API_KEY}`);
    req.end();
}

function apiPost(scoring_url, token, payload, loadCallback, errorCallback) {
    const options = {
        method: 'POST',
        hostname: 'us-south.ml.cloud.ibm.com',
        path: '/ml/v4/deployments/diabetes03/predictions?version=2021-05-01',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json;charset=UTF-8'
        }
    };

    const req = https.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            loadCallback(JSON.parse(data));
        });
    });

    req.on('error', errorCallback);
    req.write(JSON.stringify(payload));
    req.end();
}

getToken(
    (err) => console.log(err),
    (tokenResponse) => {
        const payload = {
            "input_data": [
                {
                    "fields": ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age'],
                    "values": [
                        [6, 148, 72, 35, 0, 33.6, 0.627, 50],
                        [1, 89, 66, 23, 94, 28.1, 0.167, 21]
                    ]
                }
            ]
        };

        console.log('first: payload: ');
        // console.log(payload);
        console.log('Payload fields: ', payload.input_data[0].fields);
        console.log('Payload values: ', payload.input_data[0].values);

        const scoring_url = "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/diabetes03/predictions?version=2021-05-01";
        
        apiPost(
            scoring_url,
            tokenResponse.access_token,
            payload,
            (resp) => {
                console.log("response Scoring response: ");
                console.log(resp);
                console.log("Scoring response fields: ", resp.predictions[0].fields);
                console.log("Scoring response values: ", resp.predictions[0].values);
            },
            (error) => {
                console.log(error);
            }
        );
    }
);