//@ts-nocheck

import { createSlice } from '@reduxjs/toolkit'
// import { initCloudStorage } from '@telegram-apps/sdk'

const NAME = "userHeroView"

// const cloudStorage = initCloudStorage()

export const userHeroViewSlice = createSlice({
    name: NAME,
    initialState: {
        view: localStorage.getItem('userHeroView') === null ? "Lines" : localStorage.getItem('userHeroView')
    },
    reducers: {
        setUserHeroViewGrid: (state, action) => {     
            state.view = "Grid"     
            localStorage.setItem('userHeroView', 'Grid')
        },
        setUserHeroViewLines: (state, action) => {
            state.view = "Lines"
            localStorage.setItem('userHeroView', 'Lines')
        },
    },
})

export const { setUserHeroViewGrid, setUserHeroViewLines } = userHeroViewSlice.actions

export default userHeroViewSlice.reducer