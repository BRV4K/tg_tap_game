//@ts-nocheck
import BigNumber from "bignumber.js";

import Choul from "../MonstersGLTF/Choul/Choul";
import React, {useEffect, useState} from "react";
import './Monster.scss';
import { useDispatch, useSelector } from "react-redux";
import {
    setIdleAnimation,
    setSpawnAnimation,
    setHitAnimation,
    setDieAnimation,
    setAnimations
} from '../../redux/userMonsterAnimation/userMonsterAnimation';
import {
    setHealthAfterDamage,
    setFullHP,
    setMaxHealth,
    setZeroHealth,
    setHealthDPS
} from "../../redux/userMonsterHealth/userMonsterHealth";
import { setMonster } from '../../redux/userMonsterChange/userMonsterChange';
import { setMonsterIsSpawnTrue, setMonsterIsSpawnFalse } from "../../redux/userMonsterIsSpawn/userMonsterIsSpawn";
import {incrementUserLootCountGold} from "../../redux/userLootGoldSlice/userLootGoldSlice";
import {incrementMonsterCount} from "../../redux/userMonsterCounter/userMonsterCounter";


export default function Monster(props) {
    const [counter, setCounter] = useState(0);
    const DPC = useSelector((state) => state.userHeroesDamage.DPC);
    const DPS = useSelector((state) => state.userHeroesDamage.DPS);
    const health = useSelector((state) => state.userMonsterHealth.curHealth);
    const maxHealth = useSelector((state) => state.userMonsterHealth.maxHealth);
    const monsterIndex = useSelector((state) => state.userMonsterChange.monster);
    const isSpawn = useSelector((state) => state.userMonsterIsSpawn.isSpawn);
    const levelCurrent = useSelector((state) => state.userLevel.current);
    const animationIndex = useSelector((state) => state.userMonsterAnimation.animationIndex);
    const dispatch = useDispatch();
    const [xcoord, setXcoord] = useState(170);
    const [ycoord, setYcoord] = useState(250);

    const monsterCounter = useSelector((state) => state.userMonsterCounter.curMonsterCounter);

    //DPS
    // useEffect(() => {
    //     if (BigInt(health.toString()) > BigInt('0')) {
    //         if (animationIndex !== 1) {
    //             const interval = setInterval(() => {
    //                 dispatch(setHealthAfterDamage(DPS));
    //             }, 1500);
    //             return () => {clearInterval(interval)}
    //         }
    //         return;
    //     }
    // }, []);

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const xPositions = ['20%', '30%', '40%', '50%', '60%', '70%', '80%'];

    const handleClickMonster = (e) => {
        setXcoord(e.clientX);
        setYcoord(e.clientY);

        if (new BigNumber(health.toString()).comparedTo(new BigNumber('0')) == 1) {
            let damageDiv = document.createElement('div');
            damageDiv.className = 'damage position-fixed z-3';
            damageDiv.id = `damage${counter}`;
            damageDiv.innerHTML = `<p>-${DPC}</p>`;
            damageDiv.style.color = '#B0B0B0';
            damageDiv.style.left = `${xPositions[randomIntFromInterval(0, 6)]}`;
            damageDiv.style.top = `30%`;
            document.body.appendChild(damageDiv);
            setTimeout(() => {
                const damageToRemove = document.getElementById(`damage${counter}`);
                document.body.removeChild(damageToRemove);
            }, 1000);

            if ( new BigNumber(health.toString()).comparedTo(new BigNumber(DPC.toString())) == 1 ) {
                dispatch(setHitAnimation());
                dispatch(setHealthAfterDamage(DPC));
                setCounter(counter + 1);
                setTimeout(() => {
                    dispatch(setIdleAnimation());
                },);
            }

            else if (new BigNumber(health.toString()).comparedTo(new BigNumber(DPC.toString())) == 0 || new BigNumber(health.toString()).comparedTo(new BigNumber(DPC.toString())) == -1 ) {
                dispatch(setZeroHealth());
            }
        }
    }

    //ИЗМЕНЕНИЕ ЗДОРОВЬЯ В ЗАВИСИМОСТИ ОТ УРОВНЯ
    useEffect(() => {
        dispatch(setMaxHealth({levelCurrent: levelCurrent, monsterCounter: monsterCounter}));
        dispatch(setFullHP({monsterCounter: monsterCounter}));
    }, [levelCurrent])


    //ПОЯВЛЕНИЕ
    if (!isSpawn) {
        dispatch(setMaxHealth({levelCurrent: levelCurrent, monsterCounter: monsterCounter}));
        dispatch(setFullHP({monsterCounter: monsterCounter}));
        dispatch(setSpawnAnimation());
        setTimeout(() => {
            dispatch(setIdleAnimation());
            dispatch(setMonsterIsSpawnTrue());
        }, 800)
    }

    //ЗОНА КЛИКА
    const monstersDiv = document.getElementById('monsters');
    if (document.getElementById('damage-zone') !== null) {
        const removeZone = document.getElementById('damage-zone');
        monstersDiv.removeChild(removeZone);
    }
    const damageDiv = document.createElement('div');
    damageDiv.className = 'position-fixed z-3';
    damageDiv.onclick = handleClickMonster;
    damageDiv.id = 'damage-zone';
    damageDiv.style.marginLeft = '10%';
    damageDiv.style.top = '25%';
    damageDiv.style.width = '80%';
    damageDiv.style.height = '50%';
    monstersDiv.appendChild(damageDiv);

    const chouls = [
        <Choul scale={1.2} />
    ];

    //МОНЕТЫ
    useEffect(() => {
        if ( new BigNumber(health.toString()).comparedTo(new BigNumber('0')) == 0 ) {
            damageDiv.onclick = null;
            dispatch(setDieAnimation());
            setTimeout(() => {
                dispatch(setIdleAnimation());
                dispatch(setMonster(1));
                setTimeout(() => {
                    dispatch(setMonster(0));
                    dispatch(setFullHP({monsterCounter: monsterCounter}));
                    damageDiv.onclick = handleClickMonster;
                });
            }, 1000);

            let coin1 = document.createElement('div');
            coin1.className = 'coin1 position-fixed z-3';
            coin1.innerHTML = '<img src="./img/coin/coin.png" />'
            coin1.id = `coin1`;
            coin1.style.left = `${xcoord}px`;
            coin1.style.top = `${ycoord}px`;
            document.body.appendChild(coin1);

            let coin2 = document.createElement('div');
            coin2.className = 'coin2 position-fixed z-3';
            coin2.innerHTML = '<img src="./img/coin/coin.png" />'
            coin2.id = `coin2`;
            coin2.style.left = `${xcoord}px`;
            coin2.style.top = `${ycoord}px`;
            document.body.appendChild(coin2);

            let coin3 = document.createElement('div');
            coin3.className = 'coin3 position-fixed z-3';
            coin3.innerHTML = '<img src="./img/coin/coin.png" />'
            coin3.id = `coin3`;
            coin3.style.left = `${xcoord}px`;
            coin3.style.top = `${ycoord}px`;
            document.body.appendChild(coin3);

            setTimeout(() => {
                const coin1ToRemove = document.getElementById(`coin1`);
                document.body.removeChild(coin1ToRemove);
            }, 1000);

            setTimeout(() => {
                const coin2ToRemove = document.getElementById(`coin2`);
                document.body.removeChild(coin2ToRemove);
            }, 1200);

            setTimeout(() => {
                const coin3ToRemove = document.getElementById(`coin3`);
                document.body.removeChild(coin3ToRemove);
            }, 800);

            setTimeout(() => {
                if ( new BigNumber(health.toString()).comparedTo(new BigNumber('0')) == 0 ) {
                    dispatch(incrementUserLootCountGold(100));
                    dispatch(incrementMonsterCount());
                }
            }, 500);
        }
    }, [health]);

    return (<>
        {chouls[monsterIndex]}
    </>)
}