//@ts-nocheck

import BigNumber from "bignumber.js";

import './CoinEnergyBar.scss';
import './Bubbles.scss';
import { useDispatch, useSelector } from "react-redux";
import AnimatedNumbers from 'react-animated-numbers';
import { numberFormat } from "../../utils/NumberFormat";
import { incrementUserEnergyCount } from "../../redux/userEnergyCountSlice/userEnergyCountSlice";
import { useEffect } from "react";
import { setColor } from "../../redux/userEnergyCountSlice/userEnergyCountSlice"



export default function CoinEnergyBar() {

    const dispatch = useDispatch();
    const color = useSelector(state => state.userEnergyCount.color);
    const userEnergyCount = useSelector((state) => state.userEnergyCount.count);
    const userEnergyCountMax = useSelector((state) => state.userEnergyCount.countMax);
    const fillPercentUserEnergyCount = userEnergyCount / userEnergyCountMax * 100;

    useEffect(() => {
        if (userEnergyCount === 0) {
            dispatch(setColor('#B13D58'));
        }

        else if (userEnergyCount > 0 && color === '#B13D58') {
            dispatch(setColor('#B0B0B0'));
        }
    }, [userEnergyCount]);


    return (
        <div className="w-100 d-flex justify-content-center align-items-center">
            <div className='container-health-bar d-flex align-items-center position-relative'>
                <div id='energy-bar' className='health-bar-img'>
                    <svg width="60" height="56" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9907 17.4388C17.9907 15.7338 16.6085 14.3516 14.9035 14.3516V14.3516C14.0847 14.3516 13.2995 14.6768 12.7205 15.2558L2.82882 25.1475C1.26657 26.7097 1.26674 29.2427 2.8292 30.8047L12.7205 40.6933C13.2995 41.2721 14.0846 41.5973 14.9033 41.5973V41.5973C16.6084 41.5973 17.9907 40.215 17.9907 38.5099V17.4388Z" stroke="#B28E4C" strokeMiterlimit="20" />
                        <path d="M56.8265 25.1507L34.5042 2.82843C32.9421 1.26633 30.4095 1.26633 28.8474 2.82843L6.52508 25.1507C4.96298 26.7128 4.96298 29.2455 6.52508 30.8076L28.8474 53.1298C30.4095 54.6919 32.9421 54.6919 34.5042 53.1298L56.8265 30.8076C58.3886 29.2455 58.3886 26.7128 56.8265 25.1507Z" fill="#171027" stroke="#B28E4C" strokeWidth="2" strokeMiterlimit="20" />
                        <path id='energy_logo' d="M36.2397 13L23 29.4077L31.5081 29.2061L25.8567 43L39.1538 25.5485L30.0134 25.7744L36.2397 13Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div id='health-bar' className='health-bar w-100 d-flex justify-content-start align-items-center'>
                    <div id='health' className='health-fill h-100 d-flex align-items-center justify-content-start' style={{ 'width': `${fillPercentUserEnergyCount}%` }}>
                        <div className='wrapper' style={{ 'width': `${fillPercentUserEnergyCount - 20}%` }}>
                            <div><span className="dot"></span></div>
                            <div><span className="dot"></span></div>
                            <div><span className="dot"></span></div>
                            <div><span className="dot"></span></div>
                            <div><span className="dot"></span></div>
                            <div><span className="dot"></span></div>
                            <div><span className="dot"></span></div>
                            <div><span className="dot"></span></div>
                            <div><span className="dot"></span></div>
                            <div><span className="dot"></span></div>
                            <div><span className="dot"></span></div>
                            <div><span className="dot"></span></div>
                            <div><span className="dot"></span></div>
                            <div><span className="dot"></span></div>
                            <div><span className="dot"></span></div>
                        </div>
                    </div>
                    <div className='health-text'>
                        {numberFormat(userEnergyCount.toString())}
                    </div>
                </div>
            </div>
        </div>
    )
}