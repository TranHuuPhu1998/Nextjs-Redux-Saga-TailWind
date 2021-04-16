import axiosService from '../common/Theme/axiosService';
import {API_ENDPOINT} from './../constants';

const url = 'project';

export const getListProject = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
}

export const addProject = (data) => {
    return axiosService.post(`${API_ENDPOINT}/${url}` , data);
}

export const updateProject = (data) => {
    return axiosService.put(`${API_ENDPOINT}/${url}/${data.id}`, data);
}

export const deleteProject = (id) => {
    return axiosService.delete(`${API_ENDPOINT}/${url}/delete/${id}`);
}