//@ts-nocheck
import './RefferalRewardItem.scss'
import RefferalRewardClaimButton from "../RefferalRewardClaimButton/RefferalRewardClaimButton"
import { useDispatch } from 'react-redux';
import { claimRefferalReward } from '../../api/refferalReward';
import { useMutation, useQueryClient } from 'react-query';
import { incrementUserLootCountGold } from '../../redux/userLootGoldSlice/userLootGoldSlice';
import { incrementUserLootCountCrystal } from '../../redux/userLootCrystalSlice/userLootCrystalSlice';
import { useState } from 'react';
import { Oval, TailSpin } from 'react-loader-spinner';
import QuestQuestsItemCompletedIcon from '../QuestQuestsItem/QuestQuestsItemCompletedIcon/QuestQuestsItemCompletedIcon';
import ToastSuccess from '../Toasts/ToastSuccess/ToastSuccess';
import RefferalRewardItemCompletedIcon from './RefferalRewardItemCompletedIcon/RefferalRewardItemCompletedIcon';
import { numberFormat } from '../../utils/NumberFormat';
import DataFetchLoader from '../DataFetchLoader/DataFetchLoader';

function RefferalRewardItem({ count, pathImage, amount, type, status, name, receivedProps }) {

    const [loading, setLoading] = useState(false)
    const [received, setReceived] = useState(receivedProps)

    const dispatch = useDispatch()
    const queryClient = useQueryClient();
    const claimRefferalRewardMutation = useMutation((count: number) => claimRefferalReward(count), {
        onSuccess: () => {
            queryClient.invalidateQueries(['refferalsRewards']).then(() => {

                if (type === "LOOT") {
                    if (name === "Gold") {
                        dispatch(incrementUserLootCountGold(amount))
                    }
                    if (name === "Crystal") {
                        dispatch(incrementUserLootCountCrystal(amount))
                    }
                }

                setLoading(false)
                setReceived(true)

                ToastSuccess("Награда успешно получена!")

            })
        }
    })

    const refferalRewardClaim = () => {
        if (loading)
            return
        if (received)
            return
        if (status !== "COMPLETED")
            return

        setLoading(true)
        claimRefferalRewardMutation.mutate(count)

        // setTimeout(() => {

        //     if (type === "LOOT") {
        //         if (name === "Gold") {
        //             dispatch(incrementUserLootCountGold(amount))
        //         }
        //         if (name === "Crystal") {
        //             dispatch(incrementUserLootCountCrystal(amount))
        //         }
        //     }

        //     setLoading(false)
        //     setReceived(true)

        //     ToastSuccess("Награда успешно получена!")

        //     setTimeout(() => {
        //         claimRefferalRewardMutation.mutate(count)
        //     }, 1500)

        // }, 2000)
    }

    return (
        <div onClick={refferalRewardClaim} className={`refferal-reward-task-container ${status === "COMPLETED" ? 'refferal-reward-task-container-completed' : ''} ${(received && !loading) ? 'refferal-reward-task-container-received' : ''} w-100 d-flex flex-row justify-content-between align-items-center`}>
            <div className='position-relative'>
                <svg width="50" height="50" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.448 52.2173C40.4944 52.2173 51.8813 40.7666 51.8813 26.6414C51.8813 12.5163 40.4944 1.06555 26.448 1.06555C12.4015 1.06555 1.01465 12.5163 1.01465 26.6414C1.01465 40.7666 12.4015 52.2173 26.448 52.2173Z" stroke="#B28E4C" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M45.3317 26.6414C45.3317 30.6926 44.0705 34.4476 41.9197 37.5307V42.5539H36.7558C33.7923 44.5 30.2524 45.6296 26.4487 45.6296C22.6451 45.6296 19.1052 44.5 16.1416 42.5539H10.5071V36.8232C8.64478 33.8807 7.56567 30.3883 7.56567 26.6414C7.56567 22.8946 8.64478 19.4021 10.5071 16.4597V10.9653H15.7895C18.8227 8.87507 22.4931 7.65259 26.4487 7.65259C30.4043 7.65259 34.0748 8.8744 37.1079 10.9653H41.9197V15.7522C44.0705 18.8353 45.3317 22.5903 45.3317 26.6414Z" stroke="#B28E4C" strokeMiterlimit="10" />
                    <path d="M34.1691 19.458C34.2193 19.4742 34.2702 19.489 34.3197 19.5072C34.2307 19.5671 34.0318 19.6674 34.0037 19.7744C33.6382 20.0416 33.248 20.2732 32.8764 20.5331C30.7898 21.9938 28.6537 23.3806 26.5557 24.8239C26.0597 25.1652 25.5851 25.5415 25.1038 25.9036L23.2595 27.2695C22.2299 28.0288 21.1334 28.7363 20.1748 29.5866C20.1983 30.1076 20.2813 30.6307 20.3321 31.1503L20.6381 34.4267L20.859 36.8003C20.8791 37.0245 20.8563 37.3408 20.9092 37.5475L20.9206 37.5394L20.9688 37.5771C20.9386 37.6094 20.9078 37.6404 20.877 37.6714C20.7632 37.5017 20.3395 35.3126 20.2478 34.8824L19.6145 31.9817C19.415 31.0393 19.2336 30.0921 18.9973 29.1578C19.8555 28.5977 20.7398 28.0753 21.6067 27.53L27.1944 23.979L31.559 21.1564C32.2867 20.6778 33.0003 20.177 33.7353 19.7084C33.8973 19.668 34.0372 19.5536 34.1704 19.458H34.1691Z" fill="url(#paint0_linear_2344_3183)" />
                    <path d="M38.2509 16.8859L38.2576 16.9148C38.1291 17.0649 37.9644 17.2097 37.8111 17.3335L26.9277 27.1841L25.3264 28.6563C24.7788 29.1531 24.2239 29.6411 23.6904 30.1534C23.4534 30.381 23.0457 30.7108 22.8543 30.9484C22.7344 31.0972 22.3348 32.4409 22.318 32.6556C22.1018 33.3779 21.8916 34.1063 21.6935 34.834C21.4987 35.5482 21.3173 36.2625 21.095 36.9686C21.0415 37.1389 21.008 37.3907 20.9203 37.5408L20.9089 37.5489C20.856 37.3422 20.8788 37.0258 20.8587 36.8017L20.6378 34.4281L20.3319 31.1517C20.2817 30.6327 20.198 30.109 20.1746 29.588C21.1338 28.7377 22.2297 28.0302 23.2593 27.2709L25.1035 25.905C25.5848 25.5429 26.0594 25.1659 26.5555 24.8253C28.6534 23.3813 30.7896 21.9952 32.8762 20.5345C33.2477 20.2746 33.6373 20.0437 34.0035 19.7758C34.0316 19.6694 34.2304 19.5685 34.3194 19.5085C34.2699 19.4904 34.219 19.4756 34.1688 19.4594C34.0349 19.5557 33.895 19.6694 33.7337 19.7098C33.9626 19.5213 35.1783 18.8017 35.2399 18.6543C35.3544 18.5432 37.3733 17.38 37.5561 17.312L37.5996 17.2945C37.7931 17.1403 38.0374 17.0117 38.2516 16.8865L38.2509 16.8859Z" fill="#291E20" />
                    <path d="M35.2401 18.6536C35.3546 18.5425 37.3735 17.3793 37.5563 17.3113C37.3682 17.5853 35.2394 18.9397 34.7748 19.2487C34.5164 19.4203 34.2674 19.6115 34.0037 19.7744C34.0318 19.6681 34.2306 19.5671 34.3196 19.5072C34.2701 19.489 34.2192 19.4742 34.169 19.458C34.0351 19.5543 33.8952 19.6681 33.7339 19.7084C33.9628 19.52 35.1785 18.8003 35.2401 18.6529V18.6536Z" fill="#907241" />
                    <path d="M11.0769 26.5351C11.5087 26.3608 11.9592 26.2254 12.3957 26.0619L17.6305 24.1581L29.1024 19.969C32.325 18.8306 35.5362 17.66 38.7354 16.457L38.6457 16.6448C38.5178 16.7115 38.3578 16.7903 38.2514 16.8858C38.0372 17.0111 37.7928 17.1396 37.5994 17.2938L37.5559 17.3113C37.3731 17.3793 35.3541 18.5425 35.2397 18.6536C34.6693 18.9458 34.1157 19.2796 33.5614 19.6001L30.294 21.5287L22.5782 26.0545C21.7107 26.564 20.8371 27.0622 19.9568 27.5489C19.4112 27.8552 18.8556 28.1844 18.2852 28.4409C17.8126 28.3231 17.3447 28.1851 16.8734 28.0605L14.1449 27.3537L12.3562 26.8818C11.9297 26.77 11.4973 26.6677 11.0769 26.5344V26.5351Z" fill="#B28E4C" />
                    <path d="M38.2507 16.8858C38.3571 16.7895 38.5171 16.7114 38.645 16.6448C38.3591 17.4984 37.9856 18.3264 37.6569 19.1645C36.9353 21.0345 36.1949 22.8972 35.4371 24.7531C34.9812 25.8955 34.5555 27.052 34.1103 28.1984C33.955 28.599 33.779 28.9914 33.6183 29.39L32.6885 31.7346C32.1804 33.0089 31.693 34.2933 31.1629 35.5589C30.5818 35.2351 29.98 34.9477 29.3876 34.6468L27.4409 33.639L26.2895 33.0453C26.1208 32.9584 25.9407 32.8454 25.7633 32.7794C25.5397 33.0359 25.2894 33.2701 25.0517 33.5138L23.2563 35.3233C22.7235 35.8659 22.1852 36.4031 21.6423 36.9355C21.4234 37.1483 21.2045 37.3886 20.9669 37.5778L20.9187 37.5401C21.0064 37.3893 21.0399 37.1382 21.0934 36.9679C21.3157 36.2617 21.4964 35.5475 21.6919 34.8332C21.8907 34.1055 22.1009 33.3778 22.3165 32.6548C22.3332 32.4408 22.7328 31.0971 22.8527 30.9477C23.0441 30.71 23.4518 30.3802 23.6888 30.1527C24.2223 29.6404 24.7772 29.1523 25.3248 28.6555L26.9261 27.1833L37.8095 17.3328C37.9628 17.2089 38.1282 17.0642 38.256 16.914L38.2493 16.8851L38.2507 16.8858Z" fill="#907241" />
                    <path d="M22.786 32.8516C22.8603 32.7378 22.9018 32.5655 22.9494 32.4356C23.0591 32.132 23.1616 31.8176 23.3082 31.5302C23.7654 31.7664 24.2246 32 24.6852 32.2296C24.8873 32.3299 25.1511 32.414 25.3251 32.5534C25.459 32.6328 25.615 32.7365 25.7643 32.7789C25.5407 33.0354 25.2903 33.2696 25.0527 33.5133L23.2573 35.3228C22.7244 35.8654 22.1862 36.4026 21.6433 36.9351C21.4244 37.1478 21.2055 37.3881 20.9679 37.5773L20.9197 37.5396C21.0074 37.3888 21.0408 37.1377 21.0944 36.9674C21.3166 36.2612 21.4974 35.547 21.6929 34.8327C21.8917 34.105 22.1019 33.3773 22.3174 32.6544C22.3382 32.8765 22.0691 33.619 22.0021 33.891C22.0095 33.8896 22.0169 33.8883 22.0242 33.8869C22.1387 33.8667 22.2612 33.9051 22.3656 33.8795C22.4614 33.6399 22.541 33.3814 22.6508 33.1498C22.697 33.0529 22.7137 32.9458 22.7606 32.8482L22.7867 32.8516H22.786Z" fill="#291E20" />
                    <path d="M25.3251 32.554C25.459 32.6334 25.615 32.7371 25.7643 32.7795C25.5407 33.0359 25.2903 33.2702 25.0527 33.5139L23.2573 35.3234C22.7244 35.866 22.1862 36.4032 21.6433 36.9356C21.4244 37.1484 21.2055 37.3887 20.9679 37.5778L20.9197 37.5401C21.0074 37.3894 21.0408 37.1383 21.0944 36.9679C21.3166 36.2618 21.4974 35.5476 21.6929 34.8333C21.8917 34.1056 22.1019 33.3779 22.3174 32.6549C22.3382 32.8771 22.0691 33.6196 22.0021 33.8915C22.0095 33.8902 22.0169 33.8889 22.0242 33.8875C22.1387 33.8673 22.2612 33.9057 22.3656 33.8801C22.4614 33.6405 22.541 33.382 22.6508 33.1504C22.697 33.0534 22.7137 32.9464 22.7606 32.8488L22.7867 32.8522C22.618 33.3564 22.4125 33.8478 22.2338 34.3486C21.9352 35.1861 21.6587 36.0275 21.3086 36.8454C21.7083 36.2692 22.4232 35.5792 22.9253 35.0561L25.3251 32.554Z" fill="url(#paint1_linear_2344_3183)" />
                    <defs>
                        <linearGradient id="paint0_linear_2344_3183" x1="28.2858" y1="29.0046" x2="23.1577" y2="24.6312" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#BB9869" />
                            <stop offset="1" stopColor="#D3B584" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_2344_3183" x1="22.6983" y1="33.6444" x2="23.9994" y2="35.9178" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#BB9867" />
                            <stop offset="1" stopColor="#D4B98E" />
                        </linearGradient>
                    </defs>
                </svg>

                {type === "HERO" &&

                    <div className='refferal-reward-task-reward-hero position-absolute top-50 translate-middle-y'>
                        <img width={119} height={116} src='/img/heroes/refferal/catanos.png' />
                    </div>

                }

            </div>
            <div className='refferal-reward-task-reward-container w-100'>
                <div className='refferal-reward-task-title'>
                    {'Пригласи'} {count} {count == 1 ? 'друга' : 'друзей'}
                </div>
                {type === "LOOT" &&
                    <div className='refferal-reward-task-amount d-flex align-items-center'>
                        <img className='' src={"img/loot/" + pathImage + "-icon.png"} width={pathImage === "gold" ? 18 : 15} />
                        <div className='refferal-reward-task-amount-text'>{numberFormat(amount)}</div>
                    </div>
                }
                {type === "HERO" &&
                    <div className='refferal-reward-task-amount d-flex align-items-center'>
                        <div className='refferal-reward-task-hero-text'>{'Эксклюзивный герой'}</div>
                    </div>
                }
            </div>

            <div className="refferal-reward-claim-button d-flex justify-content-end">
                {(!received && loading) &&
                    <Oval
                        visible={true}
                        height={25}
                        width={25}
                        color={"#B28E4C"}
                        secondaryColor={"#B28E4C"}
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                }
                {!received && status == "NOT_COMPLETED" && loading === false &&
                    <div className="refferal-reward-claim-button-icon-not-completed">
                        <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.60522 1.10071L12.7439 12.3018L1.60522 23.5029" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                }
                {!received && status == "COMPLETED" && loading === false &&
                    <div className="refferal-reward-claim-button-icon-completed">
                        <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.60522 1.10071L12.7439 12.3018L1.60522 23.5029" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                }
                {(received && loading === false) &&
                    <RefferalRewardItemCompletedIcon completedProps={receivedProps} />
                }
            </div>
        </div>
    )
}

export default RefferalRewardItem