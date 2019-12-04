const BASE_URL = 'http://125.16.230.6:8080'
const getClient = () => {
    return fetch(`${BASE_URL}/getClients`)
}

module.exports = {
    getClient
}