//@ts-nocheck

import BigNumber from "bignumber.js";

export const getHeroPrice = (heroBasePrice, levelCountRank, heroLevel, heroPriceRate) => {

    if (heroLevel == 1 && levelCountRank === 1) {
        return new BigNumber(heroBasePrice).toString()
    }

    if (heroLevel == 0 && levelCountRank === 1) {
        return BigNumber(heroBasePrice).toString()
    }

    const heroBasePriceBigNumber = new BigNumber(heroBasePrice)
    // const levelCountRankBigNumber = new BigNumber(levelCountRank)
    // const heroLevelBigNumber = new BigNumber(heroLevel)
    const heroPriceRateBigNumber = new BigNumber(heroPriceRate)

    let price = new BigNumber(0)
    for (let index = heroLevel; index < heroLevel + levelCountRank; index++) {        
        price = price.plus(heroBasePriceBigNumber.multipliedBy(heroPriceRateBigNumber.pow(new BigNumber(index))))
    }    
    return price.decimalPlaces(0, BigNumber.ROUND_HALF_EVEN).toString()
}