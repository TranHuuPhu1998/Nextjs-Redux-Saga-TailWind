import axios from 'axios';

class AxiosService {
    
    constructor() {
        const service  = axios.create({
            header : {}
        });
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service  = service ;
    }

    setHeader(name, value) {
        this.service.defaults.headers.common[name] = value;
    }
    
    removeHeader(name) {
        delete this.service.defaults.headers.common[name];
    }

    handleSuccess(response) {
        return response;
    }

    redirectTo = (document , path) => {
        document.location = path;
    }
    redirectPage = (title,path) => {
        window.history.pushState('page2', title,path);
    }
    get(endpoint) {
        return this.service.get(endpoint);
    }

    handleError(error) {
        switch(error.response.status){
            case 401:
                this.redirectTo(document , '/login');
                break;
            default:
                return Promise.reject(error);
        }
    }

    post(endpoint, payload) {
        return this.service.request({
            method:'POST',
            url:endpoint,
            headers: {"Content-Type": "application/json","Access-Control-Allow-Origin": "*"},
            responseType : 'json',
            data:payload
        });
    }

    put(endpoint, payload) {
        return this.service.request({
            method:'PUT',
            url:endpoint,
            headers: {"Content-Type": "application/json","Access-Control-Allow-Origin": "*"},
            responseType:'json',
            data:payload
        })
    }

    delete(endpoint ,payload) {
        return this.service.request({
            method : 'DELETE',
            url : endpoint,
            headers: {"Content-Type": "application/json","Access-Control-Allow-Origin": "*"},
            responseType: 'json',
            data : payload
        })
    }

    logout(endpoint ,payload){
        return this.service.request({
            method : 'DELETE',
            url : endpoint,
            headers: {
                "X-Requested-With" : "XMLHttpRequest",
                "Authorization" : `${payload}`
            },
        })
    }
}
export default new AxiosService();