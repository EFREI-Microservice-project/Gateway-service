const axios = require("axios");

const instance = axios.create({
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use((request) => {
    console.log(`Request: ${request.method.toUpperCase()} ${request.url}`);
    return request;
});

module.exports = instance;
