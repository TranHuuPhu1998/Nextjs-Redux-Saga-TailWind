import axiosService from '../common/Theme/axiosService';
import {API_ENDPOINT} from './../constants';
import qs from 'query-string';

const url = 'tasks';

export const getListTask = (params = {}) =>{
    let queryParams = '';
    // kiểm tra params laf object rong
    if (Object.keys(params).length > 0) {
        queryParams = `?${qs.stringify(params)}`;
    }
    return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
}

export const addTask = data => {
    return axiosService.post(`${API_ENDPOINT}/${url}` , data);
}

export const updateTask = (data, taskId) => {
    return axiosService.put(`${API_ENDPOINT}/${url}/${taskId}`, data);
}

export const deleteTask = taskId => {
    return axiosService.delete(`${API_ENDPOINT}/${url}/${taskId}`)
}