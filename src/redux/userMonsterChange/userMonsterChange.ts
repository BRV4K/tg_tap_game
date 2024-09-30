//@ts-nocheck

import { createSlice } from '@reduxjs/toolkit'

const NAME = "userMonsterChange"


export const userMonsterChange = createSlice({
    name: NAME,
    initialState: {
        monster: 0
    },
    reducers: {
        setMonster: (state, action) => {
            state.monster = action.payload;
        }
    },
})

export const { setMonster } = userMonsterChange.actions

export default userMonsterChange.reducer