import axios from "axios"
import { getAxiosConfig, getApiUrl } from "./index"

const axiosConfig = getAxiosConfig()
const apiURL = getApiUrl()

export async function getRefferalReward() {
    const { data } = await axios.get(
        apiURL + '/api/v1/refferal-reward', 
        axiosConfig
    )

    if(data.status === 200) {
        return data
    }
}

export async function claimRefferalReward(count: number) {
    const { data } = await axios.post(
        apiURL + '/api/v1/refferal-reward', 
        {
            count: count
        },
        axiosConfig
    )
}


export async function getUserRefferal() {
    return await axios.post(
        apiURL + '/api/v1/refferal-reward/get-frens', 
        {

        },
        axiosConfig
    )
}
