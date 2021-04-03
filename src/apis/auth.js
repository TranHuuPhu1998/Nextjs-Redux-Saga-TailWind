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
console.log("🚀 ~ file: auth.js ~ line 15 ~ data", data)
  return axiosService.post(`${API_ENDPOINT}/forgot-password`, data);
};

export const resetPassword = (data) => {
console.log("🚀 ~ file: auth.js ~ line 20 ~ resetPassword ~ data", data)
  return axiosService.post(`${API_ENDPOINT}/reset-password`,data)
}