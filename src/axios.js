import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://acm-umw-website.firebaseio.com/'
});

export default instance;