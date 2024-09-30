import { configureStore } from '@reduxjs/toolkit'

import userLootGoldReducer from './userLootGoldSlice/userLootGoldSlice'
import userLootCrystalReducer from './userLootCrystalSlice/userLootCrystalSlice'
import userMonsterHealthReducer from './userMonsterHealth/userMonsterHealth'
import userMonsterAnimationReducer from './userMonsterAnimation/userMonsterAnimation'
import userHeroesDamageReducer from './userHeroesDamageSlice/userHeroesDamageSlice'
import userHeroViewReducer from './userHeroViewSlice/userHeroViewSlice'
import userLevelReducer from './userLevelSlice/userLevelSlice'
import userHeroBtnLevelCountReducer from './userHeroBtnLevelCountSlice/userHeroBtnLevelCountSlice'
import userMonsterChangeReducer from './userMonsterChange/userMonsterChange'
import userMonsterIsSpawnReducer from './userMonsterIsSpawn/userMonsterIsSpawn'
import userMonsterCounterReducer from './userMonsterCounter/userMonsterCounter'
import userEnergyCountReducer from './userEnergyCountSlice/userEnergyCountSlice'

export default configureStore({
  reducer: {
    userLootGold:     userLootGoldReducer,
    userLootCrystal:  userLootCrystalReducer,
    userHeroesDamage: userHeroesDamageReducer,
    userHeroView:     userHeroViewReducer,
    userLevel:        userLevelReducer,
    userHeroBtnLevelCount: userHeroBtnLevelCountReducer,
    userMonsterHealth: userMonsterHealthReducer,
    userMonsterAnimation: userMonsterAnimationReducer,
    userMonsterChange: userMonsterChangeReducer,
    userMonsterIsSpawn: userMonsterIsSpawnReducer,
    userMonsterCounter: userMonsterCounterReducer,
    userEnergyCount: userEnergyCountReducer,
  },
})