//@ts-nocheck

import { createSlice } from '@reduxjs/toolkit'
// import { initCloudStorage } from '@telegram-apps/sdk'

const NAME = "userHeroBtnLevelCount"

// const cloudStorage = initCloudStorage()

export const userHeroBtnLevelCountSlice = createSlice({
    name: NAME,
    initialState: {
        countLevel: localStorage.getItem('userHeroBtnLevelCount') == null ? 1 : Number(localStorage.getItem('userHeroBtnLevelCount'))
    },
    reducers: {
        setUserHeroBtnLevelCount: (state, action) => {     

            if(state.countLevel == 1)
                state.countLevel = 10
            else if(state.countLevel == 10)
                state.countLevel = 25   
            else if(state.countLevel == 25)
                state.countLevel = 100  
            else if(state.countLevel == 100)
                state.countLevel = 1  
            // else if(state.countLevel == 1000)
            //     state.countLevel = 1  
            
            localStorage.setItem('userHeroBtnLevelCount', state.countLevel)            
        },
    },
})

export const { setUserHeroBtnLevelCount } = userHeroBtnLevelCountSlice.actions

export default userHeroBtnLevelCountSlice.reducer