//@ts-nocheck

import { createSlice } from '@reduxjs/toolkit'
import { decrementUserLevelCurrentAPI, incrementUserLevelCurrentAPI, incrementUserLevelMaxAPI } from '../../api/userLevel'

const NAME = "userLevel"

export const userLevelSlice = createSlice({
    name: NAME,
    initialState: {
        max: 0,
        current: 0,
        autochange: true
    },
    reducers: {
        setUserLevelMax: (state, action) => {     
            state.max = action.payload     
        },
        incrementUserLevelMax: (state, action) => {     
            state.max++  
            incrementUserLevelMaxAPI()   
        },

        setUserLevelCurrent: (state, action) => {     
            state.current = action.payload     
        },
        incrementUserLevelCurrent: (state, action) => {   
            if(state.current === state.max)
                return
            
            state.current++ 
            incrementUserLevelCurrentAPI() 
        },
        decrementUserLevelCurrent: (state, action) => {    
            if(state.current === 1)
                return

            state.current--
            decrementUserLevelCurrentAPI()  
        },
        changeAutochange: (state, action) => {
            state.autochange = !state.autochange;
        }
    },
})

export const { changeAutochange, setUserLevelMax, incrementUserLevelMax, setUserLevelCurrent, incrementUserLevelCurrent, decrementUserLevelCurrent } = userLevelSlice.actions

export default userLevelSlice.reducer