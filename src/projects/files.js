const { request, APIError } = require('../request')

/**
 * Get a list of files in a directory.
 * @param {String} id The ID of the project.
 * @param {String} dir The directory to list. Defaults to the root directory.
 * @returns {Promise<Object>} A list of files.
 */
async function getFileList(id, dir) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/files/list`, {
            params: {
                directory: dir || '/'
            }
        }).then(response => {
            resolve(response.data.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Rename a file.
 * @param {String} id The ID of the project. 
 * @param {String} dir The directory the file is in. Defaults to the root directory.
 * @param {String} file The file to rename.
 * @param {String} name The new name of the file.
 * @returns {Promise<String>} Message.
 */
async function renameFile(id, dir, file, name) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/v1/projects/${id}/files/rename`, {
            params: {
                directory: dir || '/',
            },
            file: file,
            name: name
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Write to a file.
 * @param {String} id The ID of the project. 
 * @param {String} dir The directory the file is in. Defaults to the root directory.
 * @param {String} file The file to write to.
 * @param {String} data The data to write to the file.
 * @returns {Promise<String>} Message.
 */
async function writeFile(id, dir, file, data) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/files/write`, {
            params: {
                directory: dir || '/'
            },
            file: file,
            content: data
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

// FOR DIR UPLOAD https://i.imgur.com/kv17w6o.png
/**
 * Get file upload link.
 * @param {String} id The ID of the project. 
 * @return {Promise<String>} Url.
 */
async function getFileUploadLink(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/files/upload`).then(response => {
            resolve(response.data.url)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get file download link.
 * @param {String} id The ID of the project.
 * @param {String} dir The directory the file is in. Defaults to the root directory.
 * @param {String} file The file to download.
 * @returns {Promise<String>} Url.
 */
async function getFileDownloadLink(id, dir, file) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/files/download`, {
            params: {
                directory: dir || '/',
                file: file
            }
        }).then(response => {
            resolve(response.data.url)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Get file contents.
 * @param {String} id The ID of the project. 
 * @param {String} dir The directory the file is in. Defaults to the root directory.
 * @param {String} file The file to get the contents of.
 * @returns {Promise<String>} File contents.
 */
async function getFileContent(id, dir, file) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/v1/projects/${id}/files/contents`, {
            params: {
                directory: dir || '/',
                file: file
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Delete files.
 * @param {String} id The ID of the project. 
 * @param {String} dir The directory the file is in. Defaults to the root directory. 
 * @param {Array} files The files to delete. 
 * @returns {Promise<String>} Message.
 */
async function deleteFiles(id, dir, files) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/files/delete`, {
            params: {
                directory: dir || '/'
            },
            files: files
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Decompress a file.
 * @param {String} id The ID of the project. 
 * @param {String} dir The directory the file is in. Defaults to the root directory.
 * @param {String} file The file to decompress.
 * @returns {Promise<String>} Message.
 */
async function decompressFile(id, dir, file) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/files/decompress`, {
            params: {
                directory: dir || '/'
            },
            file: file
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Compress files.
 * @param {String} id The ID of the project. 
 * @param {String} dir The directory the file is in. Defaults to the root directory.
 * @param {String} files The files to compress.
 * @returns {Promise<String>} Message.
 */
async function compressFiles(id, dir, files) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/files/compress`, {
            params: {
                directory: dir || '/'
            },
            files: files
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Create a directory.
 * @param {String} id The ID of the project.
 * @param {String} dir The directory to create. Defaults to the root directory.
 * @param {String} folder The name of the folder to create.
 * @returns {Promise<String>} Message.
 */
async function createFolder(id, dir, folder) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/files/create-folder`, {
            params: {
                directory: dir || '/'
            },
            name: folder
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Copy file.
 * @param {String} id The ID of the project. 
 * @param {String} dir The directory the file is in. Defaults to the root directory.
 * @param {String} file The file to copy.
 * @returns {Promise<String>} Message.
 */
async function copyFile(id, dir, file) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/files/copy`, {
            params: {
                directory: dir || '/'
            },
            file: file
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

/**
 * Change file permissions.
 * @param {String} id The ID of the project.
 * @param {String} dir The directory the file is in. Defaults to the root directory.
 * @param {String} file The file to change the permissions of.
 * @param {Number} perm The permissions to set.
 * @returns {Promise<String>} Message.
 */
async function chmodFile(id, dir, file, perm) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/v1/projects/${id}/files/chmod`, {
            params: {
                directory: dir || '/'
            },
            file: file,
            perm: perm
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

module.exports = {
    getFileList,
    renameFile,
    writeFile,
    getFileUploadLink,
    getFileDownloadLink,
    getFileContent,
    deleteFiles,
    decompressFile,
    compressFiles,
    createFolder,
    copyFile,
    chmodFile
}