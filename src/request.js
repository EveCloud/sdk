const Axios = require('axios').default

const request = Axios.create({
    baseURL: 'https://api.evecloud.xyz',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.evecloud.v1+json',
    },
    timeout: '50000',
    timeoutErrorMessage: 'Internal Server Error',
})

/**
 * Set Authorization header
 * @param {String} token Access token
 * @returns {void} 
 */
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

/**
 * Set Team param
 * @param {String} team Team ID
 * @returns {void}
 */
const setTeam = (team) => {
    return request.interceptors.request.use((config) => {
        return {
            ...config,
            params: {
                ...config.params,
                teamId: team,
            },
        };
    });
};

/**
 * Set URL
 * @param {String} url URL
 * @returns {void}
 */
const setURL = (url) => {
    return request.interceptors.request.use((config) => {
        return {
            ...config,
            baseURL: url,
        };
    });
};

const APIError = (error) => {
    if (error.code === "ECONNREFUSED") {
        return "Internal Server Error"
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
    if (error.response.status === 403) {
        return "Unauthorized"
    }
    if (error.response.data.message) {
        return error.response.data.message
    }
    return "Internal Server Error"
};

module.exports = {
    request,
    setToken,
    APIError,
    setTeam,
    setURL
}