import axios from "axios"
import { getAxiosConfig, getApiUrl } from "./index"

const axiosConfig = getAxiosConfig()
const apiURL = getApiUrl()

export async function getUserQuestSocial() {
    const { data } = await axios.get(
        apiURL + '/api/v1/user-quest-social', 
        axiosConfig
    )    
    return data
}

export async function claimUserQuestSocial(id: number) {
    const { data } = await axios.post(
        apiURL + '/api/v1/user-quest-social', 
        {
            id: id,    
        },
        axiosConfig
    )    
    return data
}