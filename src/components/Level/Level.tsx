//@ts-nocheck

import './Level.scss';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetMonsterCount } from "../../redux/userMonsterCounter/userMonsterCounter";
import { incrementUserLevelCurrent, incrementUserLevelMax } from "../../redux/userLevelSlice/userLevelSlice";
import { decrementUserLevelCurrent } from "../../redux/userLevelSlice/userLevelSlice";
import { setMonsterIsSpawnFalse, setMonsterIsSpawnTrue } from "../../redux/userMonsterIsSpawn/userMonsterIsSpawn";

export default function Level() {
    const levelCurrent = useSelector((state) => state.userLevel.current);
    const levelMax = useSelector((state) => state.userLevel.max);
    const monsterCounter = useSelector((state) => state.userMonsterCounter.curMonsterCounter);
    const levelAutochange = useSelector((state) => state.userLevel.autochange);
    const dispatch = useDispatch();

    useEffect(() => {
        if (monsterCounter === 11) {
            if (levelCurrent === levelMax) {
                dispatch(incrementUserLevelMax());
            }

            if (levelAutochange) {
                dispatch(incrementUserLevelCurrent());
            }

            dispatch(resetMonsterCount());
        }
    }, [monsterCounter]);


    useEffect(() => {

        if (levelCurrent == 1 && levelMax == 1) {
            const leftArrow = document.getElementById('level-arrow-left');
            leftArrow.style.opacity = '30%';
            const rightArrow = document.getElementById('level-arrow-right');
            rightArrow.style.opacity = '30%';
        }

        else if (levelCurrent <= 1) {
            const leftArrow = document.getElementById('level-arrow-left');
            leftArrow.style.opacity = '30%';
            const rightArrow = document.getElementById('level-arrow-right');
            rightArrow.style.opacity = '100%';
        }

        else if (levelCurrent >= levelMax) {
            const leftArrow = document.getElementById('level-arrow-left');
            leftArrow.style.opacity = '100%';
            const rightArrow = document.getElementById('level-arrow-right');
            rightArrow.style.opacity = '30%';
        }

        else {
            const leftArrow = document.getElementById('level-arrow-left');
            leftArrow.style.opacity = '100%';
            const rightArrow = document.getElementById('level-arrow-right');
            rightArrow.style.opacity = '100%';
        }

    }, [levelCurrent, levelMax]);

    const handleCLickLeftArrow = () => {
        if (levelCurrent > 1) {
            dispatch(decrementUserLevelCurrent());
            dispatch(resetMonsterCount());
            setTimeout(() => {
                dispatch(setMonsterIsSpawnTrue());
            });
        }
    }

    const handleCLickRightArrow = () => {
        if (levelCurrent < levelMax) {
            dispatch(incrementUserLevelCurrent());
            dispatch(resetMonsterCount());
            setTimeout(() => {
                dispatch(setMonsterIsSpawnTrue());
            });
        }
    }

    return (
        <div className='z-5 d-flex gap-1 level_container align-items-center justify-content-center'>
            <div id='level-arrow-left' className='level_arrow' onClick={handleCLickLeftArrow}>
                <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 1L2 16L14.5 31" stroke="#B0B0B0" strokeWidth="3" />
                </svg>
            </div>

            <div className='level_background d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex align-items-center'>
                    <p className='level_word'>Уровень: </p>
                    <p className='level_value'>{levelCurrent}</p>
                </div>
                <p className='level_cur_monster'>{monsterCounter}/10</p>
            </div>

            <div id='level-arrow-right' className='level_arrow' onClick={handleCLickRightArrow}>
                <svg width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 1L14.5 16L2 31" stroke="#B0B0B0" strokeWidth="3" />
                </svg>
            </div>
        </div>
    )
}