import axios from "axios"
import { getAxiosConfig, getApiUrl } from "./index"

const axiosConfig = getAxiosConfig()
const apiURL = getApiUrl()

export async function upsertUser(parentId: string) {
  return axios.post(
    apiURL + '/api/v1/user',
    {
      parentId: parentId,
    },
    axiosConfig
  )
}

export async function userOnline(online: boolean) {
  return axios.post(
    apiURL + '/api/v1/user/online',
    {
      online: online,
    },
    axiosConfig
  )
}