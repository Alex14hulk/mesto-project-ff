const getInfoApi = () => {
    return fetch('https://nomoreparties.co/v1/wff-cohort-12/users/me', {
        method: 'GET';
        headers: {
            authorization: '8bd44f34-b673-4f30-b159-1ef27b46d350'
        }
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });

    .then(res => res.json())
    .then((result) => {
        console.log(result);
    });
    
    .catch((err) => {
        console.log(err);
    });
}

const getCardsApi = () => {
    return fetch('https://nomoreparties.co/v1/wff-cohort-12/cards', {
        method: 'GET';
        headers: {
            authorization: '8bd44f34-b673-4f30-b159-1ef27b46d350'
        }
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });

    .then(res => res.json())
    .then((result) => {
        console.log(result);
    });
    
    .catch((err) => {
        console.log(err);
    }); 
};

const editProfileApi = (name, about) => {
    fetch('https://nomoreparties.co/v1/wff-cohort-12/users/me', {
        method: 'PATCH',
        headers: {
            authorization: '8bd44f34-b673-4f30-b159-1ef27b46d350',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            about: about
        })
    }); 
};

const addCardApi = (name, link) => {
    fetch('https://nomoreparties.co/v1/wff-cohort-12/cards', {
        method: 'POST',
        headers: {
            authorization: '8bd44f34-b673-4f30-b159-1ef27b46d350',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            link: link
        })
    }); 
};

const likeApi = (id) => {
    fetch(`https://nomoreparties.co/v1/wff-cohort-12/cards/likes/${id}`, {
        method: 'PUT',
        headers: {
            authorization: '8bd44f34-b673-4f30-b159-1ef27b46d350'
        }
    })
    .then((result) => {
        console.log(result);
    });
    .catch((err) => {
        console.log(err);
    }); 
}

const unlikeApi = (id) => {
    fetch(`https://nomoreparties.co/v1/wff-cohort-12/cards/likes/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: '8bd44f34-b673-4f30-b159-1ef27b46d350'
        }
    })
    .then((result) => {
        console.log(result);
    });
    .catch((err) => {
        console.log(err);
    }); 
}

const deleteCardApi = (id) => {
    return fetch(`https://nomoreparties.co/v1/wff-cohort-12/cards/${id}`, {
        method: 'DELETE';
        headers: {
            authorization: '8bd44f34-b673-4f30-b159-1ef27b46d350'
        }
    })
    .then((result) => {
        console.log(result);
    });
    .catch((err) => {
        console.log(err);
    });
};

const changeAvatarApi = (link) => {
    fetch('https://nomoreparties.co/v1/wff-cohort-12/users/me/avatar', {
        method: 'PATCH',
        headers: {
            authorization: '8bd44f34-b673-4f30-b159-1ef27b46d350',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            avatar: link
        })
    });
    .then((result) => {
        console.log(result);
    });
    .catch((err) => {
        console.log(err);
    });
};

export {changeAvatarApi};