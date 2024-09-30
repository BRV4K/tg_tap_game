//@ts-nocheck

import { createSlice } from '@reduxjs/toolkit'

const NAME = "userMonsterCounter"


export const userMonsterCounter = createSlice({
    name: NAME,
    initialState: {
        curMonsterCounter: 1
    },
    reducers: {
        incrementMonsterCount: (state, action) => {
            state.curMonsterCounter++;
        },
        resetMonsterCount: (state, action) => {
            state.curMonsterCounter = 1;
        }
    },
})

export const { incrementMonsterCount, resetMonsterCount} = userMonsterCounter.actions

export default userMonsterCounter.reducer