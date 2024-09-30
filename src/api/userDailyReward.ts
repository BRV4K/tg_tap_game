import axios from "axios"
import { getAxiosConfig, getApiUrl } from "./index"

const axiosConfig = getAxiosConfig()
const apiURL = getApiUrl()

export async function getUserDailyRewards() {
    return await axios.get(
        apiURL + '/api/v1/user-daily-reward', 
        axiosConfig
    )    
}

export async function claimDailyRewardAPI(day: number) {
    const { data } = await axios.post(
        apiURL + '/api/v1/user-daily-reward', 
        {
            day: day,
        },
        axiosConfig
    )    
    return data
}