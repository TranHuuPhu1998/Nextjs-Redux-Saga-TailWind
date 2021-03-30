import axiosService from '../services/axiosService';
import { API_ENDPOINT } from '../constants';

const url = '/auth';

export const signup = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}/signup`, data);
};

export const login = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}/login`, data);
};