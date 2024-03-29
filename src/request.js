const Axios = require('axios').default

const request = Axios.create({
  baseURL: 'https://api.evecloud.xyz',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.evecloud.v1+json'
  },
  timeout: '50000',
  timeoutErrorMessage: 'Internal Server Error'
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
        Authorization: `Bearer ${token}`
      }
    }
  })
}

/**
 * Set URL
 * @param {String} url URL
 * @returns {void}
 */
const setURL = (url) => {
  return request.interceptors.request.use((config) => {
    return {
      ...config,
      baseURL: url
    }
  })
}

/**
 * Set Workspace ID
 * @param {String} workspaceID Workspace ID
 * @returns {void}
 */
const setWorkspace = (workspaceID) => {
  return request.interceptors.request.use((config) => {
    return {
      ...config,
      params: {
        ...config.params,
        workspaceID
      }
    }
  })
}

/**
 * API Error
 * @param {String} error Axios Error
 * @returns {String} Error message
 */
const APIError = (error) => {
  if (error.code === 'ECONNREFUSED') {
    return 'Internal Server Error'
  }
  if (error.code === 'ECONNABORTED') {
    return 'The request has been aborted.'
  }
  if (error.code === 'ETIMEDOUT') {
    return 'Unable to connect to the server.'
  }
  if (error.response.status === 502) {
    return 'Bad Gateway'
  }
  if (error.response.status === 401) {
    return error.response.data
  }
  if (error.response.data.message) {
    return error.response.data.message
  }
  return 'Internal Server Error'
}

module.exports = {
  request,
  setToken,
  setWorkspace,
  APIError,
  setURL
}
