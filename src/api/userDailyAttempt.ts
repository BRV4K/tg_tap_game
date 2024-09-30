import axios from "axios"
import { getAxiosConfig, getApiUrl } from "./index"

const axiosConfig = getAxiosConfig()
const apiURL = getApiUrl()

export async function getUserDailyAttempt() {
    const { data } = await axios.get(
        apiURL + '/api/v1/user-daily-attempt', 
        axiosConfig
    )    
    return data
}
