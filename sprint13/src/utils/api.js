class Api {
    constructor({baseUrl, headers}) {
      this.baseUrl = baseUrl;
      this.headers = headers;
    }
  
    getInitialCards() {
      return fetch(`${this.baseUrl}/cards`, {
        method: "GET",
        headers: {
          authorization: this.headers.authorization,
        }
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(`Error: ${res.status}`);
          }
        })
        .then(data => {
          return data;
        });
    }
  
    getUserInfo() {
      return fetch(`${this.baseUrl}/users/me`, {
        method: "GET",
        headers: {
          authorization: this.headers.authorization,
        }
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(`Error: ${res.status}`);
          }
        });
    }
  
    editProfile({name, about}) {
      return fetch(`${this.baseUrl}/users/me`, {
        method: "PATCH",
        headers: {
          authorization: this.headers.authorization,
          "Content-Type": this.headers["Content-Type"],
        },
        body: JSON.stringify({
          name: name,
          about: about
        })
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(`Error: ${res.status}`);
          }
        });
    }
  
    editProfilePicture({linkEditProfilePic}) {
      return fetch(`${this.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: {
          authorization: this.headers.authorization,
          "Content-Type": this.headers["Content-Type"],
        },
        body: JSON.stringify({
          avatar: linkEditProfilePic,
        })
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(`Error: ${res.status}`);
          }
        });
    }
  
    addCard({name, link}) {
      return fetch(`${this.baseUrl}/cards`, {
        method: "POST",
        headers: {
          authorization: this.headers.authorization,
          "Content-Type": this.headers["Content-Type"],
        },
        body: JSON.stringify({
          name: name,
          link: link
        })
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(`Error: ${res.status}`);
          }
        });
    }
  
    deleteCard(cardId) {
      return fetch(`${this.baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: {
          authorization: this.headers.authorization,
          // "Content-Type": this.headers["Content-Type"],
        }
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(`Error: ${res.status}`);
          }
        });
    }
  
    addLike(cardId) {
      return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: {
          authorization: this.headers.authorization,
          // "Content-Type": this.headers["Content-Type"],
        }
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(`Error: ${res.status}`);
          }
        });
    }
  
    removeLike(cardId) {
      return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: {
          authorization: this.headers.authorization,
          // "Content-Type": this.headers["Content-Type"],
        }
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(`Error: ${res.status}`);
          }
        });
    }
}

const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/web-ptbr-cohort-13",
    headers: {
      authorization: "4fe5fb1a-9a42-4631-9f7e-39eb49951a0f",
      "Content-Type": "application/json"
    }
  });

export default api;