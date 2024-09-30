import axios from "axios"
import { getAxiosConfig, getApiUrl } from "./index"

const axiosConfig = getAxiosConfig()
const apiURL = getApiUrl()

export async function getUserLevel() {
    const { data } = await axios.get(
        apiURL + '/api/v1/user-level', 
        axiosConfig
    )    
    return data
}

export async function incrementUserLevelMaxAPI() {
    const { data } = await axios.post(
        apiURL + '/api/v1/user-level/increment-max', 
        {},
        axiosConfig
    )    
    return data
}

export async function incrementUserLevelCurrentAPI() {
    const { data } = await axios.post(
        apiURL + '/api/v1/user-level/increment-current', 
        {},
        axiosConfig
    )    
    return data
}
export async function decrementUserLevelCurrentAPI() {
    const { data } = await axios.post(
        apiURL + '/api/v1/user-level/decrement-current', 
        {},
        axiosConfig
    )    
    return data
}