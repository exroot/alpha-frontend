import axios from 'axios';
const baseURL = 'auth/login';

const login = async (email, password) => {
    const request = await axios.post(`//localhost:5000/${ baseURL }`, {email, password});
    return request;
}

export default login;