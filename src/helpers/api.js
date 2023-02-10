import axios from "axios";
import {URL } from "../utils/constants"

export const instance = axios.create({
    baseURL: URL,
    params: {key: '484129036', locale: 'en-US'},
    headers: {
        'X-RapidAPI-Key': '49b09cc728mshc39e1ff45febab5p15dd31jsnc76484bc8683',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
})