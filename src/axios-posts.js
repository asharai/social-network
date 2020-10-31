import axios from 'axios';

const instance = axios.create({
    baseURL:'https://social-network-956c5.firebaseio.com/'
});
export default instance;