import axios from 'axios'

const url = axios.create({
    baseURL: 'http://localhost:8000'
})

export const getDrawings = () => url.get('/drawings')

export const createDrawing = (drawing) => url.post('/drawings/', drawing)