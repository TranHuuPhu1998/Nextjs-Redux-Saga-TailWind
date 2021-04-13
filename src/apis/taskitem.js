import axiosService from '../common/Theme/axiosService';
import {API_ENDPOINT} from './../constants';

const url = 'taskitem';

export const getListTaskItem = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
}

export const addTaskItem = (data) => {
console.log("🚀 ~ file: taskitem.js ~ line 11 ~ addTaskItem ~ data", data)
    return axiosService.post(`${API_ENDPOINT}/${url}/create/${data.id}`,data);
}

export const updateTask = (data) => {
    return axiosService.put(`${API_ENDPOINT}/${url}/update/${id}`, data);
}

export const deleteTask = (data) => {
    return axiosService.delete(`${API_ENDPOINT}/${url}/delete/${id}`);
}