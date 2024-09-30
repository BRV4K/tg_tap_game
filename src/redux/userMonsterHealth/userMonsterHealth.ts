// //@ts-nocheck

// import BigNumber from "bignumber.js";
// import { createSlice } from '@reduxjs/toolkit'

// const NAME = "userMonsterHealth"

// export const userMonsterHealth = createSlice({
//     name: NAME,
//     initialState: {
//         curHealth: new BigNumber('10').toString(),
//         maxHealth: new BigNumber('10').toString()
//     },
//     reducers: {
//         setMaxHealth: (state, action) => {

//             const baseHealth = new BigNumber('10')
//             const level = new BigNumber(action.payload.toString())

//             const res1 = baseHealth.multipliedBy(level.minus(new BigNumber('1')))

//             const res2 = new BigNumber('1.55').pow(level.minus(new BigNumber('1')))

//             // console.log(res1.plus(res2).toString());

//             state.maxHealth = res1.plus(res2).toString()
//         },
//         setFullHP: (state, action) => {
//             state.curHealth = new BigNumber(state.maxHealth.toString()).toString();
//         },
//         setHealthAfterDamage: (state, action) => {
//             state.curHealth = (new BigNumber(state.curHealth.toString()).minus(new BigNumber(action.payload.toString()))).toString()
//         },
//         setHealthDPS: (state, action) => {
//             // action.payload > state.curHealth ? state.curHealth = 0 : state.curHealth -= action.payload;
//         },
//         setZeroHealth: (state, action) => {
//             state.curHealth = new BigNumber('0').toString();
//         }
//     },
// })

// export const { setFullHP, setHealthAfterDamage, setHealthDPS, setMaxHealth, setZeroHealth } = userMonsterHealth.actions

// export default userMonsterHealth.reducer

//@ts-nocheck

import { createSlice } from '@reduxjs/toolkit'
import BigNumber from "bignumber.js"

const NAME = "userMonsterHealth"


export const userMonsterHealth = createSlice({
    name: NAME,
    initialState: {
        curHealth: new BigNumber('10').toString(),
        maxHealth: new BigNumber('10').toString()
    },
    reducers: {
        setMaxHealth: (state, action) => {
        
            if (action.payload.levelCurrent == 1) {
                state.maxHealth = new BigNumber('10').toString()
                return
            }

            const baseHealth = new BigNumber('10')
            const level = new BigNumber(action.payload.levelCurrent.toString())
            // const level = new BigNumber('100000')

            const res1 = baseHealth.multipliedBy(level.minus(new BigNumber('1')))
            const res2 = new BigNumber('1.09').pow(level.minus(new BigNumber('1')))
            const res3 = res1.plus(res2)

            state.maxHealth = res3.decimalPlaces(0, BigNumber.ROUND_HALF_EVEN).toString()
        },
        setFullHP: (state, action) => {
            if(action.payload.monsterCounter+1 == 10) {
                state.curHealth = new BigNumber(state.maxHealth.toString()).multipliedBy(new BigNumber(10)).toString()    
                return
            }
            state.curHealth = new BigNumber(state.maxHealth.toString()).toString()
        },
        setHealthAfterDamage: (state, action) => {

            // const baseHealth = new BigNumber('10')
            // const level = new BigNumber('100000')

            // const res1 = baseHealth.multipliedBy(level.minus(new BigNumber('1')))
            // const res2 = new BigNumber('1.55').pow(level.minus(new BigNumber('1')))
            // const res3 = res1.plus(res2)

            // const curHealth = new BigNumber(state.curHealth.toString())
            // const res = curHealth.minus(res3)
            // state.curHealth = res.decimalPlaces(0, BigNumber.ROUND_HALF_EVEN).toString()

            const curHealth = new BigNumber(state.curHealth.toString())
            const res = curHealth.minus(new BigNumber(action.payload.toString()))
            state.curHealth = res.decimalPlaces(0, BigNumber.ROUND_HALF_EVEN).toString()

        },
        setHealthDPS: (state, action) => {
            //action.payload > state.curHealth ? state.curHealth = 0 : state.curHealth -= action.payload;

        },
        setZeroHealth: (state, action) => {
            state.curHealth = new BigNumber(0).toString();
        }
    },
})

export const { setFullHP, setHealthAfterDamage, setHealthDPS, setMaxHealth, setZeroHealth } = userMonsterHealth.actions

export default userMonsterHealth.reducer