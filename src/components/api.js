const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-16',
    headers: {
        authorization: '54e3eb0a-e1c0-4fc2-9e37-e9727e651ee0',
        'Content-type': 'application/json'
    }
};

const {baseUrl: baseUrl , headers: headers}  = config;


function checkResponse(response) {
    if(response.ok) {
        return response.json()
    }
    return Promise.reject(`Что-то пошло не так: ${response.status}`);    
};


function getMyProfile () {
    return fetch(`${baseUrl}/users/me`, {headers})
            .then(response => checkResponse(response))            
};

function getInitialCards() {
    return fetch(`${baseUrl}/cards`, {headers})
            .then(response => checkResponse(response))
};


function updateAvatar(link) {
    const newAvatar = { avatar : link }
    return fetch(`${baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(newAvatar)
}).then(response => checkResponse(response))  
};

function updateProfile(name, about) {
    const newProfile = {
        name: name,
        about: about
    }
    return fetch(`${baseUrl}/users/me`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify(newProfile)
    }).then(response => checkResponse(response))   
};

function sendNewCard(name, link) {
    const newCard = {
        name: name,
        link: link
    }
    return fetch(`${baseUrl}/cards`, {
        method: 'POST',
        headers,
        body: JSON.stringify(newCard)
    }).then(response => checkResponse(response))
};

function deleteCard(cardId) {
    return fetch(`${baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers,
    }).then(response => checkResponse(response))
};

function likeCard(cardId) {
    return fetch(`${baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers,
    }).then(response => checkResponse(response))
};

function deleteLike(cardId) {
    return fetch(`${baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers,
    }).then(response => checkResponse(response))
}

export { getInitialCards, getMyProfile, updateProfile, updateAvatar, sendNewCard, deleteCard, likeCard, deleteLike }