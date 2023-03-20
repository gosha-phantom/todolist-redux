import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: 'http://192.168.2.118:4123',
});
