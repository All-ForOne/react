import customAxios from '../customAxios';
import axios from 'axios'

class AuthenticationService {
    signUp(firstName, lastName, email, password){
        return axios.post('http://localhost:8080/signUp', {
            firstName, 
            lastName, 
            email, 
            password
        });
    }
    // send username, password to the SERVER
    executeJwtAuthenticationService(username, password) {
        return axios.post('http://localhost:8080/authenticate', {
            username,
            password
        });
    }

    registerSuccessfulLoginForJwt(username, token) {
        console.log("===registerSuccessfulLoginForJwt===")
        
        localStorage.setItem('token', token);
        localStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors();
    }

    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            config => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
                // config.headers['Content-Type'] = 'application/json';
                return config;
            },
            error => {
                Promise.reject(error)
            });
    }

    logout() {
        //sessionStorage.removeItem('authenticatedUser');
        localStorage.removeItem("authenticatedUser");
        localStorage.removeItem("token");
    }

    isUserLoggedIn() {
        const token = localStorage.getItem('token');
        console.log("===UserloggedInCheck===");
        console.log(token);

        if (token) {
            return true;
        }
        
        return false;
    }

    getLoggedInUserName() {
        //let user = sessionStorage.getItem('authenticatedUser')
        let user = localStorage.getItem('authenticatedUser');
        if(user===null) return '';
        return user;
    }
}

export default new AuthenticationService();