//@ts-nocheck

import { createSlice } from '@reduxjs/toolkit'

const NAME = "userMonsterIsSpawn"


export const userMonsterIsSpawn = createSlice({
    name: NAME,
    initialState: {
        isSpawn: false
    },
    reducers: {
        setMonsterIsSpawnTrue: (state, action) => {
            state.isSpawn = true;
        },
        setMonsterIsSpawnFalse: (state, action) => {
            state.isSpawn = false;
        }
    },
})

export const { setMonsterIsSpawnFalse, setMonsterIsSpawnTrue } = userMonsterIsSpawn.actions

export default userMonsterIsSpawn.reducer