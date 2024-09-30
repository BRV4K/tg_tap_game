export const getMaxLevelByRanks = (rank: number|string, heroName = "") => {

    if(heroName == "User")
        return 99999999

    if(Number(rank) === 0) {
        return 200
    }
    return 0
}