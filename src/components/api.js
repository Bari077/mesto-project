const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-16',
    headers: {
        authorization: '54e3eb0a-e1c0-4fc2-9e37-e9727e651ee0',
        'Content-type': 'application/json'
    }
}

const {baseUrl: baseUrl , headers: headers}  = config;

function getMyProfile () {
    return fetch(`${baseUrl}/users/me`, {headers})
            .then(response => response.json())
}

function getInitialCards() {
    return fetch(`${baseUrl}/cards`, {headers})
            .then(response => response.json())
}

export { getInitialCards, getMyProfile }