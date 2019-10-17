import axios from 'axios';
const baseURL = 'auth/signup';

const register = async (email, password, confirmedPassword) => {
    const request = await axios.post(`//localhost:5000/${ baseURL }`, {email, password, confirmedPassword});
    return request;
}

export default register;