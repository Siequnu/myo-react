import { authHeader } from '../helpers';
import axios from 'axios';

export async function postApiData (url, values) {
    try {
        const response = await axios.post(url, values, { headers: authHeader() });
        const data = response.data;
        return data;
    } catch (error) {
        return error;
    }
}