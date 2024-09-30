//@ts-nocheck
import './Coin.scss'

import { CoinClick } from '../../components/CoinClick/CoinClick';
import CoinEnergyBar from '../../components/CoinEnergyBar/CoinEnergyBar';
import CoinUserStats from '../../components/CoinUserStats/CoinUserStats';
import CoinUserGoldCount from '../../components/CoinUserGoldCount/CoinUserGoldCount';

function Coin() {
    return (
        <div className='h-100 coin-background main-container position-relative'>
            <CoinUserStats/>
            <CoinUserGoldCount/>
            <CoinClick/>
            <div className='position-absolute health_bar d-flex justify-content-center w-100'>
                <CoinEnergyBar/>
            </div>
        </div>
    )
}

export default Coin;