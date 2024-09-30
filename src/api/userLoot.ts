import axios from "axios"
import { getAxiosConfig, getApiUrl } from "./index"

const axiosConfig = getAxiosConfig()
const apiURL = getApiUrl()

export async function getUserLoot() {
  return axios.get(
    apiURL + '/api/v1/user-loot',
    axiosConfig
  )
}

//++UserLootCount

//++String
export async function incrementStringUserLootCountGoldAPI(count: string) {
  axios.post(
    apiURL + '/api/v1/user-loot/increment-string-user-gold',
    {
      count: count,
    },
    axiosConfig
  )
}
export async function decrementStringUserLootCountGoldAPI(count: string) {
  axios.post(
    apiURL + '/api/v1/user-loot/decrement-string-user-gold',
    {
      count: count,
    },
    axiosConfig
  )
}
//--String UserLootCountGold

//++Int UserLootCountGold
export async function incrementUserLootCountGoldAPI(count: number) {
  axios.post(
    apiURL + '/api/v1/user-loot/increment-user-gold',
    {
      count: count,
    },
    axiosConfig
  )
}
export async function decrementUserLootCountGoldAPI(count: number) {
  axios.post(
    apiURL + '/api/v1/user-loot/decrement-user-gold',
    {
      count: count,
    },
    axiosConfig
  )
}
//--Int

//--UserLootCount

//++UserLootCountCrystal

//++String

export async function incrementStringUserLootCountCrystalAPI(count: string) {
  axios.post(
    apiURL + '/api/v1/user-loot/increment-string-user-crystal',
    {
      count: count,
    },
    axiosConfig
  )
}
export async function decrementStringUserLootCountCrystalAPI(count: string) {
  axios.post(
    apiURL + '/api/v1/user-loot/decrement-string-user-crystal',
    {
      count: count,
    },
    axiosConfig
  )
}

//--String

//++Int
export async function incrementUserLootCountCrystalAPI(count: number) {
  axios.post(
    apiURL + '/api/v1/user-loot/increment-user-crystal',
    {
      count: count,
    },
    axiosConfig
  )
}
export async function decrementUserLootCountCrystalAPI(count: number) {
  axios.post(
    apiURL + '/api/v1/user-loot/decrement-user-crystal',
    {
      count: count,
    },
    axiosConfig
  )
}
//--Int

//--UserLootCountCrystal

