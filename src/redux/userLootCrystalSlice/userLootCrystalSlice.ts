//@ts-nocheck

import { createSlice } from '@reduxjs/toolkit'
import { decrementStringUserLootCountCrystalAPI, incrementStringUserLootCountCrystalAPI } from '../../api/userLoot'

const NAME = 'userLootCrystal'

export const userLootCrystalSlice = createSlice({
    name: NAME,
    initialState: {
        count: BigInt(0).toString(),
    },
    reducers: {
        setUserLootCountCrystal: (state, action) => {
            state.count = BigInt(action.payload).toString()      
        },
        incrementUserLootCountCrystal: (state, action) => {                    
            const newCount = BigInt(state.count) + BigInt(action.payload)   

            state.count = newCount.toString()            
            incrementStringUserLootCountCrystalAPI(action.payload)  
        },
        decrementUserLootCountCrystal: (state, action) => {         
            const newCount = BigInt(state.count) - BigInt(action.payload)   
            if(newCount < 0)
                return
            
            state.count = newCount.toString()
            decrementStringUserLootCountCrystalAPI(action.payload)
        },
    },
})

export const { incrementUserLootCountCrystal, decrementUserLootCrystal, setUserLootCountCrystal } = userLootCrystalSlice.actions

export default userLootCrystalSlice.reducer