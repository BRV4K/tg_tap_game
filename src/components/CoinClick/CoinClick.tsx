//@ts-nocheck

import { useDispatch, useSelector } from "react-redux"
import { decrementUserEnergyCount, decrementUserEnergyCountClient, setUserEnergyCountStorage } from "../../redux/userEnergyCountSlice/userEnergyCountSlice"
import { incrementUserLootCountGold, incrementUserLootCountGoldClient, incrementUserLootCountGoldSendApi } from "../../redux/userLootGoldSlice/userLootGoldSlice";
import { useEffect, useState } from "react";
import { numberFormat } from "../../utils/NumberFormat";
import './CoinClick.scss';
import { Vibration } from 'react-native';
import { useIdleTimer } from 'react-idle-timer';


export function CoinClick() {

    const dispatch = useDispatch()
    const [counter, setCounter] = useState();
    const [xcoord, setXcoord] = useState(100);
    const [ycoord, setYcoord] = useState(100);
    const userEnergyCount = useSelector((state) => state.userEnergyCount.count)
    const dpc = useSelector(state => state.userHeroesDamage.DPC);
    const dps = useSelector(state => state.userHeroesDamage.DPS);

    const [newClickGold, setNewClickGold] = useState("0")

    document.addEventListener('mousedown', (e) => {
        setXcoord(e.pageX);
        setYcoord(e.pageY - 65);
    });

    const setIdleCoin = () => {

        if (BigInt(newClickGold.toString()) !== BigInt("0")) {
            dispatch(incrementUserLootCountGoldSendApi(newClickGold.toString()));
            setNewClickGold("0")
        }
        dispatch(setUserEnergyCountStorage());

        const coinImg = document.getElementById('coin-img');
        coinImg.classList.toggle('idle');
    }

    const resetIdleCoin = () => {
        const coinImg = document.getElementById('coin-img');
        coinImg.classList.remove('idle');
    }

    const { getRemainingTime, getLastActiveTime } = useIdleTimer({
        timeout: 500,
        onIdle: setIdleCoin,
        onActive: resetIdleCoin,
        onAction: resetIdleCoin,
        debounce: 500
    });

    const onClickCoin = () => {
        if (userEnergyCount !== 0) {

            //test
            setNewClickGold((BigInt(newClickGold) + (BigInt(dpc) + BigInt(dps))).toString())
            dispatch(incrementUserLootCountGoldClient((BigInt(dpc) + BigInt(dps)).toString()));

            dispatch(decrementUserEnergyCountClient());
            setCounter(counter + 1);

            Vibration.vibrate([50]);

            let damageDiv = document.createElement('div');
            damageDiv.className = 'damage position-fixed';
            damageDiv.id = `damage${counter}`;
            damageDiv.innerHTML = `<p>+${numberFormat((BigInt(dpc) + BigInt(dps)).toString())}</p>`;
            damageDiv.style.zIndex = '2';
            damageDiv.style.left = `${xcoord}px`;
            damageDiv.style.top = `${ycoord}px`;
            document.body.appendChild(damageDiv);
            setTimeout(() => {
                const damageToRemove = document.getElementById(`damage${counter}`);
                document.body.removeChild(damageToRemove);
            }, 1500);
        }

        if (userEnergyCount === 0) {
            const energyLogo = document.getElementById('energy_logo');
            energyLogo.classList.toggle('anim_energy');
            setTimeout(() => {
                energyLogo.classList.remove('anim_energy');
            }, 300);
        }

    }

    return (
        <div id='coin' className={userEnergyCount > 0 ? 'coin-click-container anim d-flex justify-content-center d-flex justify-content-center align-items-center w-100' : 'coin-click-container d-flex justify-content-center d-flex justify-content-center align-items-center w-100'} onClick={onClickCoin}>
            <img id='coin-img' className='coin-img h-100' src="/img/coin/coinClick.png" />
        </div>
    )
}