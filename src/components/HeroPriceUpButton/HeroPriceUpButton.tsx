//@ts-nocheck

import './HeroPriceUpButton.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQueryClient } from 'react-query';
import { userHeroLevelUp } from '../../api/userHero';
import { decrementUserLootCountGold } from '../../redux/userLootGoldSlice/userLootGoldSlice';
import ToastError from '../Toasts/ToastError/ToastError';
import ToastSuccess from '../Toasts/ToastSuccess/ToastSuccess';
import { numberFormat } from '../../utils/NumberFormat';
import { getMaxLevelByRanks } from '../../utils/ranks';
import { getHeroPrice } from '../../utils/heroPrice';

import BigNumber from "bignumber.js";
import { useState } from 'react';
import DataFetchLoader from '../DataFetchLoader/DataFetchLoader';

function HeroPriceUpButton({ heroId, heroLevel, text, heroBasePrice, heroPriceRate, heroRank, offCanvas = false }) {

    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()
    const queryClient = useQueryClient();
    const countUserLootGold = useSelector((state) => state.userLootGold.count)
    const levelCount = useSelector((state) => state.userHeroBtnLevelCount.countLevel)
    const levelCountRank = heroLevel + levelCount > getMaxLevelByRanks(heroRank, "User") ? getMaxLevelByRanks(heroRank) - heroLevel : levelCount;

    const heroPrice = getHeroPrice(heroBasePrice, levelCountRank, heroLevel, heroPriceRate)

    const priceLevelUp = heroPrice
    const canLevelUp = new BigNumber(countUserLootGold).comparedTo(new BigNumber(priceLevelUp)) == 0 || new BigNumber(countUserLootGold).comparedTo(new BigNumber(priceLevelUp)) == 1

    const userHeroLevelUpMutation = useMutation((dataObj: object) => userHeroLevelUp(dataObj), {
        onSuccess: () => {
            queryClient.invalidateQueries(['userHeroes']).then(() => {
                dispatch(decrementUserLootCountGold(heroPrice))
                setIsLoading(false)
                ToastSuccess("Герой успешно улучшен!", true)
            })
        }
    })
    const userHeroLevelUpBtn = () => {
        if (!canLevelUp) {
            return
        }

        setIsLoading(true)

        userHeroLevelUpMutation.mutate({
            heroId: heroId,
            countLvl: levelCountRank,
        })
    }

    return (
        <div onClick={userHeroLevelUpBtn} className={`price-up-button ${canLevelUp ? "" : "price-up-button-dis"} position-relative`}>
            <svg width={offCanvas ? '177' : '122'} height={offCanvas ? '50' : '40'} viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M129 19.8599L110.945 38.7166H29.0301L8.30322 19.8599L29.0301 1H110.945L129 19.8599Z" stroke="#B28E4C" strokeMiterlimit="10" />
                <path d="M122.697 20.1433L104.641 39H22.7269L2 20.1433L22.7269 1.28339H104.641L122.697 20.1433Z" stroke="#B28E4C" strokeWidth="2" strokeMiterlimit="10" />
            </svg>

            {isLoading &&
                <div className='position-absolute top-50 start-50 translate-middle'>
                    <DataFetchLoader width={18} height={18} color={'#B28E4C'} />
                </div>
            }

            {!isLoading &&
                <div className={'priceup_text position-absolute top-50 start-50 translate-middle'}>
                    <div className={`price-up-button-text ${offCanvas ? 'price-up-button-text-offCanvas' : ''}`} style={{ marginBottom: '1px' }}>{text}</div>
                    <div className={'d-flex align-items-center justify-content-center'}>
                        <img width={offCanvas ? 16.46 : 12} height={offCanvas ? 18 : 14} src={'/img/loot/gold-icon.png'} />
                        <div className={`ms-1 price-up-button-price ${offCanvas ? 'price-up-button-price-offCanvas' : ''}`}>{numberFormat(heroPrice)}</div>
                    </div>
                </div>
            }
        </div>
    )
}

export default HeroPriceUpButton