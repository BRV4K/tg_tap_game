//@ts-nocheck
import './Monsters.scss'

import MonsterHealthBar from '../../components/MonsterHealthBar/MonsterHealthBar';
import MonsterCanvas from '../../components/MonsterCanvas/MonsterCanvas';
import Damage from '../../components/MonsterUserStats/MonsterUserStats'
import Level from '../../components/Level/Level'
import { useDispatch, useSelector } from 'react-redux'
import { incrementUserLootCountGold, decrementUserLootCountGold } from '../../redux/userLootGoldSlice/userLootGoldSlice';
import { decrementUserLevelCurrent, incrementUserLevelCurrent, incrementUserLevelMax } from '../../redux/userLevelSlice/userLevelSlice';
import { changeAutochange } from "../../redux/userLevelSlice/userLevelSlice";
import {useEffect} from "react";
import { numberFormat } from '../../utils/NumberFormat';

function Monsters() {

    const dispatch = useDispatch()
    const userHeroesDamageDPC = useSelector((state) => state.userHeroesDamage.DPC)
    const userHeroesDamageDPS = useSelector((state) => state.userHeroesDamage.DPS)
    const countUserLootGold = useSelector((state) => state.userLootGold.count)
    const userLevelMax = useSelector((state) => state.userLevel.max)
    const userLevelCurrent = useSelector((state) => state.userLevel.current)
    const levelAutochange = useSelector((state) => state.userLevel.autochange);


    useEffect(() => {
    const moneyDiv = document.getElementById('money');
    moneyDiv.style.animation = 'money 0.5s linear infinite';
    setTimeout(() => {
      moneyDiv.style.animation = ''
    }, 500)
    }, [countUserLootGold])

    const handleChange = () => {
      dispatch(changeAutochange());
    }

  //animate__animated animate__slideInDown
    return (
    <>
        <div id='monsters'>
            <div className='canvas position-absolute w-100 h-100'>
                <MonsterCanvas className='h-100'/>
            </div>
            <Damage />
            <div className='z-5 d-flex justify-content-center align-items-center'>
                <Level />
            </div>

            <div className='position-absolute checkbox d-flex align-items-center justify-content-center'>
                <p>Автопереход на новый уровень</p>
                <input type='checkbox' checked={levelAutochange} onChange={handleChange}/>
            </div>

            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <img src='./img/coin/coin.png' className='gamescreen-coin'/>
                </div>
                <div className='money' id='money'>
                    {numberFormat(countUserLootGold)}
                </div>
            </div>
            <div className='health_bar position-absolute d-flex justify-content-center w-100'>
                <MonsterHealthBar/>
            </div>
        </div>
    </>
    )
}

export default Monsters;