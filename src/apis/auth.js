import axiosService from '../common/Theme/axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'auth';

export const singup = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}/signup`, data);
};

export const login = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}/login`, data);
};

export const logout = data => {
  console.log(data.token);
  return axiosService.logout(`${API_ENDPOINT}/${url}/logout`, data.token)
}

export const sendMail = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}/forgot-password`, data);
};

export const resetPassword = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${url}/reset-password`,data)
}