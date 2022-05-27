const { request, APIError } = require('../request');

async function getFileList(id, dir) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/containers/${id}/files/list`, {
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

async function renameFile(id, dir, file, name) {
    return new Promise(async (resolve, reject) => {
        await request.put(`/containers/${id}/files/rename`, {
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

async function writeFile(id, dir, file, data) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/containers/${id}/files/write`, {
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
async function getFileUploadLink(id) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/containers/${id}/files/upload`).then(response => {
            resolve(response.data.url)
        }).catch(error => {
            reject(APIError(error))
        })
    })
}

async function getFileDownloadLink(id, dir, file) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/containers/${id}/files/download`, {
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

async function getFileContent(id, dir, file) {
    return new Promise(async (resolve, reject) => {
        await request.get(`/containers/${id}/files/contents`, {
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

async function deleteFiles(id, dir, files) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/containers/${id}/files/delete`, {
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

async function decompressFile(id, dir, file) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/containers/${id}/files/decompress`, {
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

async function compressFiles(id, dir, files) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/containers/${id}/files/compress`, {
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

async function createFolder(id, dir, folder) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/containers/${id}/files/create-folder`, {
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

async function copyFile(id, dir, file) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/containers/${id}/files/copy`, {
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

async function chmodFile(id, dir, file, perm) {
    return new Promise(async (resolve, reject) => {
        await request.post(`/containers/${id}/files/chmod`, {
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