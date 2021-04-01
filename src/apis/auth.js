import axiosService from '../common/Theme/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'auth';

export const singup = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}/signup`, data);
};

export const login = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}/login`, data);
};

export const sendMail = data => {
  return axiosService.post(`${API_ENDPOINT}/reset-password`, data);
}