const config = {
    baseUrl: "https://nomoreparties.co/v1/wff-cohort-12",
    headers: {
        authorization: "8bd44f34-b673-4f30-b159-1ef27b46d350",
        "Content-Type": "application/json"
    },
};

function isOk(res) {
    if (res.ok) {
        return res.json();
      }
    return Promise.reject(`Ошибка: ${res.status}`);
}

const getInfoApi = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: config.headers
    })
    .then(isOk)
    .catch((err) => {
        console.log(err);
    });
}

const getCardsApi = () => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: config.headers
    })
    .then(isOk)
    .catch((err) => {
        console.log(err);
    }); 
};

const editProfileApi = (name, about) => {
    fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: about
        })
    }).then(isOk); 
};

const addCardApi = (name, link) => {
    fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: link
        })
    }).then(isOk); 
};

const likeApi = (id) => {
    fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'PUT',
        headers: config.headers
    })
    .then(isOk)
    .catch((err) => {
        console.log(err);
    }); 
}

const unlikeApi = (id) => {
    fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: 'DELETE',
        headers: config.headers
    })
    .then(isOk)
    .catch((err) => {
        console.log(err);
    }); 
}

const deleteCardApi = (id) => {
    return fetch(`${config.baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: config.headers
    }).then(isOk);
};

const changeAvatarApi = (link) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: link
        }),
    })
        .then(isOk)
        .catch((err) => {
            console.log(err);
        });
};

export { getInfoApi, getCardsApi, editProfileApi, addCardApi, likeApi, unlikeApi, deleteCardApi, changeAvatarApi};