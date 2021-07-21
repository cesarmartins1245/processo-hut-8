import axios from 'axios'
const api = 'https://processo-seletivo-hut8.herokuapp.com'


export default axios.create({
    baseURL : api,
    headers: {
        'Content-Type': 'application/json',
        'Acess-Control-Allow-Origin': '*',
    }
})