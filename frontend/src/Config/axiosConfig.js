import axios from 'axios';

const http = axios.create({
    baseURL : 'http://localhost:4546',
    headers : {
        "Content-Type":"application/json"
    }
})

export {http};