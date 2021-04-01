import axiosService from '../common/Theme/axiosService';
import {API_ENDPOINT} from './../constants';

const url = 'users';

export const getListUser = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const addUser = data => {
    return axiosService.post(`${API_ENDPOINT}/${url}` , data);
}

export const updateUser = (data, userId) => {
    return axiosService.put(`${API_ENDPOINT}/${url}/${userId}`, data);
}

export const deleteUser = userId => {
    return axiosService.delete(`${API_ENDPOINT}/${url}/delete/${userId}`)
}