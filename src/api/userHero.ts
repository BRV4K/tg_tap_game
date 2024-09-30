import axios from "axios"
import { getAxiosConfig, getApiUrl } from "./index"

const axiosConfig = getAxiosConfig()
const apiURL = getApiUrl()

export async function getUserHeroes() {
    const { data } = await axios.get(
        apiURL + '/api/v1/user-hero', 
        axiosConfig
    )    
    return data
}

export async function userHeroLevelUp(dataObj: object) {    
    const { data } = await axios.post(
        apiURL + '/api/v1/user-hero/level-up', 
        dataObj,
        axiosConfig
    )    
    return data
}

export async function userHeroActivate(dataObj: object) {
    const { data } = await axios.post(
        apiURL + '/api/v1/user-hero/activate', 
        dataObj,
        axiosConfig
    )    
    return data
}

export async function userHeroBuy(dataObj: object) {
    const { data } = await axios.post(
        apiURL + '/api/v1/user-hero/buy', 
        dataObj,
        axiosConfig
    )    
    return data
}