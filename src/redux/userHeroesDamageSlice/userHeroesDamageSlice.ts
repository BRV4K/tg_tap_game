//@ts-nocheck

import { createSlice } from '@reduxjs/toolkit'
import { getUserHeroesDamage } from '../../api/userHero'

const NAME = "userHeroesDamage"

// const { data } = await getUserHeroesDamage()

export const userHeroesDamageSlice = createSlice({
    name: NAME,
    initialState: {
        DPC: BigInt(0).toString(),
        DPS: BigInt(0).toString(),
    },
    reducers: {
        setUserHeroesDamageDPC: (state, action) => {     
            state.DPC = BigInt(action.payload).toString()     
        },
        setUserHeroesDamageDPS: (state, action) => {
            state.DPS = BigInt(action.payload).toString()
        },
    },
})

export const { setUserHeroesDamageDPC, setUserHeroesDamageDPS } = userHeroesDamageSlice.actions

export default userHeroesDamageSlice.reducer