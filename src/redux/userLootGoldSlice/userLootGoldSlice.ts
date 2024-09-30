//@ts-nocheck

import { createSlice } from '@reduxjs/toolkit'
import { decrementStringUserLootCountGoldAPI, incrementStringUserLootCountGoldAPI } from '../../api/userLoot'

const NAME = 'userLootGold'

export const userLootGoldSlice = createSlice({
    name: NAME,
    initialState: {
        count: BigInt(0).toString(),      
    },
    reducers: {
        setUserLootCountGold: (state, action) => {
            state.count = BigInt(action.payload).toString()            
        },
        incrementUserLootCountGold: (state, action) => {  
            const newCount = BigInt(state.count) + BigInt(action.payload)   
            state.count = newCount.toString()    
            incrementStringUserLootCountGoldAPI(action.payload)  
        },
        incrementUserLootCountGoldClient: (state, action) => {  
            const newCount = BigInt(state.count) + BigInt(action.payload)   
            state.count = newCount.toString()    
        },
        incrementUserLootCountGoldSendApi: (state, action) => {   
            incrementStringUserLootCountGoldAPI(action.payload) 
        },
        decrementUserLootCountGold: (state, action) => {   
            const newCount = BigInt(state.count) - BigInt(action.payload)   
            if(newCount < 0)
                return
            
            state.count = newCount.toString()
            decrementStringUserLootCountGoldAPI(action.payload)
        },
    },
})

export const { incrementUserLootCountGold, incrementUserLootCountGoldClient, incrementUserLootCountGoldSendApi, decrementUserLootCountGold, setUserLootCountGold } = userLootGoldSlice.actions

export default userLootGoldSlice.reducer