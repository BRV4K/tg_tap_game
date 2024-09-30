import { getInitDataRaw } from "../utils/telegram"
const initDataRaw: string|undefined = getInitDataRaw()

export const getApiUrl = (): string|undefined => {    
    if(process.env.NODE_ENV === 'production')
        return process.env.REACT_APP_API_URL_PRODUCTION;
    if(process.env.NODE_ENV === 'development')
        return process.env.REACT_APP_API_URL_DEVELOPMENT;
    return "";
}

export const getAxiosConfig = (): Object => {
    return {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": getApiUrl() ,
            "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS, PUT", 
            "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
            "Authorization": `tma ${initDataRaw}`
        }
    }
}