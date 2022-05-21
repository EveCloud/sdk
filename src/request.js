const Axios = require('axios').default

const request = Axios.create({
    baseURL: 'http://localhost:8080/v1',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    timeout: '5000',
    timeoutErrorMessage: 'Internal Server Error',
})

const setToken = (token) => {
    return request.interceptors.request.use((config) => {
        return {
            ...config,
            headers: {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            },
        };
    });
};

const APIError = (error) => {
    if (error.response.status === 403) {
        return error.response.headers
    }
    if (error.code === "ECONNREFUSED") {
        return "Internal Server Error"
    }
    if (error.response) {
        return error.response.data.message
    }
    if (error.code === "ECONNABORTED") {
        return "The request has been aborted"
    }
    if (error.code === "ETIMEDOUT"){
        return "Unable to connect to the server"
    }
};

module.exports = {
    request,
    setToken,
    APIError
}