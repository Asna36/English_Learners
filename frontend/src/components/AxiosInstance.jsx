// src/components/Axiosinstance.js
import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: '/api/',  // Use relative URL since we're serving from same origin
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true
});

// Add request interceptor to handle Authentication tokens
AxiosInstance.interceptors.request.use(
    async config => {
        // Only add token for non-auth routes
        const token = localStorage.getItem('Token');
        const isAuthRoute = config.url.includes('login') || config.url.includes('register');
        
        if (token && !isAuthRoute) {
            config.headers['Authorization'] = `Token ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Add response interceptor for better error handling
AxiosInstance.interceptors.response.use(
    response => {
        // For registration success, immediately redirect to login
        if (response.config.url === 'register/' && response.data.status === 'success') {
            window.location.href = '/';
            return response;
        }
        return response;
    },
    error => {
        if (error.response) {
            // Handle different error cases
            switch (error.response.status) {
                case 401:
                    // Only redirect on 401 if not trying to login/register
                    if (!error.config.url.includes('login') && 
                        !error.config.url.includes('register')) {
                        localStorage.removeItem('Token');
                        window.location.href = '/';
                    }
                    break;
                case 403:
                    break;
                case 500:
                    break;
                default:
                    break;
            }
        }
        return Promise.reject(error);
    }
);

export default AxiosInstance;
