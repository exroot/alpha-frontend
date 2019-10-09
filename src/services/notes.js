import axios from 'axios';
const baseURL = 'api/notes';

const getAll = async () => {
    const request = await axios.get(`//localhost:5000/${ baseURL }`);
    return request.data;
}

const getSingle = async (noteId) => {
    const request = await axios.get(`//localhost:5000/${ baseURL }/${ noteId }`);
    return request.data;
}

const create = async (newNote) => {
    const request = await axios.post(`//localhost:5000/${ baseURL }`, newNote);
    return request.data;
}

const update = async (noteId, newNote) => {
    const request = await axios.put(`//localhost:5000/${ baseURL }/${ noteId }`, newNote);
    return request.data;
}

export default { getAll, getSingle, create, update };