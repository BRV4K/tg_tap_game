//@ts-nocheck

import store from '../redux/store'

import { getStartParamRef } from '../utils/telegram'

import { upsertUser } from '../api/user'
import { getUserLoot } from '../api/userLoot'
import { getUserHeroes } from '../api/userHero'

import { setUserLootCountGold } from '../redux/userLootGoldSlice/userLootGoldSlice'
import { setUserLootCountCrystal } from '../redux/userLootCrystalSlice/userLootCrystalSlice'
import { setUserHeroesDamageDPC, setUserHeroesDamageDPS } from '../redux/userHeroesDamageSlice/userHeroesDamageSlice'
import { setUserEnergyCount, setUserEnergyCountStorageFirstTime } from '../redux/userEnergyCountSlice/userEnergyCountSlice'

import { initCloudStorage } from '@telegram-apps/sdk'
const cloudStorage = initCloudStorage()

export const startInitData = async () => {
  const userFetch = await upsertUser(getStartParamRef())
  
  if (userFetch.status !== 200) {
    return
  }
  if (!userFetch.data.upsertUser) {
    return
  }

  if (userFetch.data.isFirstTime) {
    store.dispatch(setUserEnergyCountStorageFirstTime())
  }

  initDataUserLootCount()
  initDataUserHeroesDamage()
  initDataUserEnergyCount()
}

const initDataUserLootCount = async () => {
  const userLoot = await getUserLoot()
  for (const userLootEl of userLoot.data) {
    if (userLootEl.name === "Gold")
      store.dispatch(setUserLootCountGold(userLootEl.count))
    if (userLootEl.name === "Crystal")
      store.dispatch(setUserLootCountCrystal(userLootEl.count))
  }
}

export const initDataUserHeroesDamage = async () => {
  const data = await getUserHeroes();  
  const userHeroesDamage = {
    DPC: BigInt(0),
    DPS: BigInt(0),
  }
  for (const element of data.userHeroes) {
    if (element.status !== "ACTIVE")
      continue

    if (element.level === 0)
      continue

    if (element.hero.damageType === "DPC")
      userHeroesDamage.DPC += BigInt(element.level) * BigInt(element.hero.baseDamage) * BigInt(element.hero.damageRate)

    if (element.hero.damageType === "DPS")
      userHeroesDamage.DPS += BigInt(element.level) * BigInt(element.hero.baseDamage) * BigInt(element.hero.damageRate)
  }

  store.dispatch(setUserHeroesDamageDPC(userHeroesDamage.DPC.toString()))
  store.dispatch(setUserHeroesDamageDPS(userHeroesDamage.DPS.toString()))
}

const initDataUserEnergyCount = async () => {
  store.dispatch(setUserEnergyCount())  
}