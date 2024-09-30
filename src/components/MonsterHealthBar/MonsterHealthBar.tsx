//@ts-nocheck

import BigNumber from "bignumber.js";

import './MonsterHealthBar.scss';
import './Bubbles.scss';
import {useSelector} from "react-redux";
import AnimatedNumbers from 'react-animated-numbers';
import {numberFormat} from "../../utils/NumberFormat";


export default function HealthBar() {
    const curHealth = useSelector((state) => state.userMonsterHealth.curHealth);
    const maxHealth = useSelector((state) => state.userMonsterHealth.maxHealth);
    const monsterCounter = useSelector((state) => state.userMonsterCounter.curMonsterCounter);
    const fillPercent = new BigNumber(curHealth).dividedBy(new BigNumber(maxHealth).multipliedBy(new BigNumber(monsterCounter == 10 ? 10 : 1))).multipliedBy(new BigNumber(100)).decimalPlaces(0, BigNumber.ROUND_HALF_EVEN)
    console.log(fillPercent.toString());
    console.log('monsterCounter', monsterCounter);
    

    return (
        <div className='container-health-bar d-flex align-items-center position-relative'>
            <div className='health-bar-img'>
                <svg width="60" height="56" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9907 17.4388C17.9907 15.7338 16.6085 14.3516 14.9035 14.3516V14.3516C14.0847 14.3516 13.2995 14.6768 12.7205 15.2558L2.82882 25.1475C1.26657 26.7097 1.26674 29.2427 2.8292 30.8047L12.7205 40.6933C13.2995 41.2721 14.0846 41.5973 14.9033 41.5973V41.5973C16.6084 41.5973 17.9907 40.215 17.9907 38.5099V17.4388Z" stroke="#B28E4C" strokeMiterlimit="20"/>
                    <path d="M56.8265 25.1507L34.5043 2.82843C32.9422 1.26633 30.4095 1.26633 28.8474 2.82843L6.52514 25.1507C4.96304 26.7128 4.96304 29.2455 6.52514 30.8076L28.8474 53.1298C30.4095 54.6919 32.9422 54.6919 34.5043 53.1298L56.8265 30.8076C58.3886 29.2455 58.3886 26.7128 56.8265 25.1507Z" fill="#171027" stroke="#B28E4C" strokeWidth="2" strokeMiterlimit="20"/>
                    <path d="M38.9813 15.7128C37.5366 14.7122 35.9074 14.0088 34.1884 13.6435C32.4695 13.2783 30.695 13.2584 28.9683 13.5851C27.2416 13.9119 25.597 14.5787 24.1304 15.5467C22.6637 16.5148 21.4041 17.7648 20.4249 19.2241C19.4457 20.6833 18.7664 22.3227 18.4265 24.0469C18.0866 25.7711 18.093 27.5457 18.4451 29.2674C18.7973 30.9891 19.4882 32.6236 20.4778 34.0759C21.4674 35.5281 22.7359 36.7691 24.2094 37.7267V43.0294H27.3077V38.2873H30.0803V43.0067H33.1104V38.2873H35.8603V43.0067H38.9586V37.704C40.7647 36.4916 42.2448 34.8534 43.2682 32.9338C44.2916 31.0143 44.8269 28.8724 44.8269 26.697C44.8269 24.5217 44.2916 22.3798 43.2682 20.4602C42.2448 18.5407 40.7647 16.9025 38.9586 15.6901L38.9813 15.7128ZM25.7699 32.8936C25.1823 32.8951 24.6074 32.7223 24.1181 32.3969C23.6288 32.0715 23.247 31.6082 23.0211 31.0658C22.7951 30.5233 22.7353 29.926 22.849 29.3494C22.9627 28.7729 23.2449 28.2431 23.6599 27.827C24.0749 27.411 24.604 27.1274 25.1802 27.0122C25.7565 26.897 26.3539 26.9554 26.897 27.1799C27.44 27.4044 27.9043 27.7851 28.2309 28.2736C28.5575 28.7621 28.7319 29.3365 28.7319 29.9241C28.7299 30.7098 28.4174 31.4628 27.8626 32.019C27.3078 32.5753 26.5556 32.8896 25.7699 32.8936ZM29.444 35.4768L31.5954 31.1286L33.7468 35.4768H29.444ZM37.4208 32.8936C36.8335 32.8936 36.2593 32.7195 35.771 32.3932C35.2827 32.0669 34.9021 31.6031 34.6773 31.0605C34.4525 30.5179 34.3937 29.9208 34.5083 29.3448C34.6229 28.7688 34.9057 28.2396 35.321 27.8243C35.7363 27.409 36.2654 27.1262 36.8415 27.0116C37.4175 26.8971 38.0146 26.9559 38.5572 27.1806C39.0998 27.4054 39.5636 27.786 39.8899 28.2743C40.2162 28.7627 40.3903 29.3368 40.3903 29.9241C40.3903 30.7117 40.0775 31.467 39.5206 32.0239C38.9637 32.5808 38.2084 32.8936 37.4208 32.8936Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div id='health-bar' className='health-bar w-100 d-flex justify-content-start align-items-center'>
                <div id='health' className='health-fill h-100 d-flex align-items-center justify-content-start' style={{'width': `${fillPercent}%`}}>
                    <div className='wrapper' style={{'width': `${fillPercent - 20}%`}}>
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
                    {numberFormat(curHealth.toString())}
                    {/* {(curHealth.toString())} */}
                </div>
            </div>
        </div>
    )
}