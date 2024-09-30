//@ts-nocheck
import axios from "axios"
import { getAxiosConfig, getApiUrl } from "./index"

const axiosConfig = getAxiosConfig()
const apiURL = getApiUrl()

export const getChatMember = async () => {
    return axios.post(
        apiURL + '/api/v1/telegram-api/get-chat-member',
        {},
        axiosConfig
    )
}