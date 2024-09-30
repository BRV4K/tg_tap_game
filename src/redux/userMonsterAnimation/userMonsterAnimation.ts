//@ts-nocheck

import { createSlice } from '@reduxjs/toolkit'

const NAME = "userMonsterAnimation"


export const userMonsterAnimation = createSlice({
    name: NAME,
    initialState: {
        animationIndex: 0,
        animations: []
    },
    reducers: {
        setIdleAnimation: (state, action) => {
            state.animationIndex = 0;
        },
        setSpawnAnimation: (state, action) => {
            state.animationIndex = 1
        },
        setHitAnimation: (state, action) => {
            state.animationIndex = 2;
        },
        setDieAnimation: (state, action) => {
            state.animationIndex = 3;
        },
        setAnimations: (state, action) => {
            state.animations = state.payload;
        }
    },
})

export const { setAnimations, setIdleAnimation, setSpawnAnimation, setHitAnimation, setDieAnimation} = userMonsterAnimation.actions

export default userMonsterAnimation.reducer