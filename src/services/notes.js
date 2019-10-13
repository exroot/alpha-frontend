import axios from 'axios';
const baseURL = '//localhost:5000/api/notes';

let token = null;

const setToken = (NewToken) => {
    token = `bearer ${NewToken}`;
}
const getAll = async () => {
    const request = await axios.get(baseURL);
    return request.data;
}

const getSingle = async (noteId) => {
    const request = await axios.get(`${baseURL}/${ noteId }`);
    return request.data;
}

const create = async (newNote) => {
    let config = {
        headers: { Authorization: token }
    };
    const request = await axios.post(baseURL, newNote, config);
    return request.data;
}

const update = async (noteId, newNote) => {
    const request = await axios.put(`${ baseURL }/${ noteId }`, newNote);
    return request.data;
}

export default { getAll, getSingle, create, update, setToken };