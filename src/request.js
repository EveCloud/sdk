const Axios = require('axios').default

const request = Axios.create({
    baseURL: 'https://api.evecloud.xyz/v1',
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
        return "Unauthorized"
    }
    if (error.code === "ECONNREFUSED") {
        return "Internal Server Error"
    }
    if (error.response.data.message) {
        return error.response.data.message
    }
    if (error.code === "ECONNABORTED") {
        return "The request has been aborted"
    }
    if (error.code === "ETIMEDOUT"){
        return "Unable to connect to the server"
    }
    if (error.response.status === 502) {
        return "Bad Gateway"
    }
    return "Internal Server Error"
};

module.exports = {
    request,
    setToken,
    APIError
}