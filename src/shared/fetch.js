require ('isomorphic-fetch');

function getNewsPosts() {
    return fetch(`http://192.168.0.248:8080/news`).then(function(resp) {
        return resp.json();
    });
}

function getFullPost(postId) {
    return fetch(`http://192.168.0.248:8080/news/post?q=${postId}`).then(function(resp) {
        return resp.json();
    });
}

async function addNewMember(data) {
    const params = new URLSearchParams(data);
    const response = await fetch(`http://192.168.0.248:8080/join`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: params
    });
    return await response.json();
}

function handleError(error) {
    console.warn(error);
    return null;
};

module.exports = {
    getPosts: function() {
        return getNewsPosts().catch(handleError);
    },
    addMember: function(name, email) {
        return addNewMember(name, email).catch(handleError);
    }
}