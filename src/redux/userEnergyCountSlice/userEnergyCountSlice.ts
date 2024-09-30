//@ts-nocheck

import { createSlice } from '@reduxjs/toolkit'
import { initCloudStorage } from '@telegram-apps/sdk'

const NAME = "userEnergyCount"

const cloudStorage = initCloudStorage()

const userEnergyCountMax = 100 
const lastUserEnergyCountStorage = await cloudStorage.get("lastUserEnergyCount")

export const userEnergyCountSlice = createSlice({
    name: NAME,
    initialState: {
        color: '#B0B0B0',
        countMax: userEnergyCountMax,
        count: await cloudStorage.get("userEnergyCount") === "" ? userEnergyCountMax : Number(await cloudStorage.get("userEnergyCount"))
    },
    reducers: {
        setColor: (state, action) => {
            state.color = action.payload;
        },
        setUserEnergyCount: (state, action) => {                
            
            if(state.count == 100)
                return

            if(lastUserEnergyCountStorage === "") {
                state.count = 100
                cloudStorage.set("lastUserEnergyCount", Date.now()) 
                return
            }  

            const lastUserEnergyCountSec = (Date.now() - lastUserEnergyCountStorage) / 1000
            const energyCount = Math.round(lastUserEnergyCountSec / 20)
            if(energyCount <= 0)
                return

            state.count = state.count + energyCount > userEnergyCountMax ? userEnergyCountMax : state.count + energyCount
            cloudStorage.set("lastUserEnergyCount", Date.now())
        },
        setUserEnergyCountStorage: (state, action) => {  
            cloudStorage.set("userEnergyCount", state.count)
            cloudStorage.set("lastUserEnergyCount", Date.now())  
        },
        setUserEnergyCountStorageFirstTime: (state, action) => {  
            state.count = userEnergyCountMax
            cloudStorage.set("userEnergyCount", userEnergyCountMax)
            cloudStorage.set("lastUserEnergyCount", "")  
        },
        incrementUserEnergyCount: (state, action) => {                
            if(state.count >= state.countMax)
                return
            state.count++ 

            cloudStorage.set("userEnergyCount", state.count)
            cloudStorage.set("lastUserEnergyCount", Date.now()) 
        },
        decrementUserEnergyCountClient: (state, action) => {  
            if(state.count - 1 === -1)
                return   

            state.count--  
        },
    },
})

export const { setColor, setUserEnergyCount, setUserEnergyCountStorage, incrementUserEnergyCount, decrementUserEnergyCount, decrementUserEnergyCountClient, setUserEnergyCountStorageFirstTime } = userEnergyCountSlice.actions

export default userEnergyCountSlice.reducer