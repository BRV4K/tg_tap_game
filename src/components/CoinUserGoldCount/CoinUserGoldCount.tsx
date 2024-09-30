//@ts-nocheck

import './CoinUserGoldCount.scss'

import { useSelector } from "react-redux";

export default function CoinUserGoldCount() {

    const countUserLootGold = useSelector((state) => state.userLootGold.count)

    return (
        <div className='coin-user-gold-count-container w-100 d-flex justify-content-center align-items-center'>
            <img width={21} height={24} src={'/img/coin/coin.png'}/>
            <div className='coin-user-gold-count'>
                {numberWithSpaces(countUserLootGold)}
            </div>
        </div>
    )
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }