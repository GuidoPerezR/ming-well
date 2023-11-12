import axios from 'axios'

const url = axios.create({
    baseURL: 'http://localhost:8000'
})

export const createUser = (user) => url.post('/users/', user)

export const getUser = () => url.get('users/')