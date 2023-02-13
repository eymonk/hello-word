import state from '../state.js';

async function getToken() {
    const requestBody = {
        "yandexPassportOauthToken": "y0_AgAAAAAf4P0VAATuwQAAAADbFegod_55cl7gQ8WuimIJGPrDdgR_D-I",
    };

    const response = await fetch('https://cors-anywhere.herokuapp.com/https://iam.api.cloud.yandex.net/iam/v1/tokens', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    });

    const tokenData = await response.json();
    state.token = tokenData.iamToken;
}

export default getToken;