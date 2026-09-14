const axios = require('axios');
const config = require('../config/config.js');

const apiClient = axios.create({
    baseURL: config.baseUrl,
    headers:{
        'Content-Type': 'application/json'
    }

});

module.exports = apiClient;