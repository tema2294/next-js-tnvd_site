import axios from "axios"

const baseUrlHeroku = 'https://diesel-market.herokuapp.com/'
// const baseUrlHeroku = 'http://localhost:5000/'


export const apiHeroku = axios.create({
    baseURL: baseUrlHeroku,
})