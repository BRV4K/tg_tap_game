//@ts-nocheck
import AllDailyRewardItem from '../AllDailyRewardItem/AllDailyRewardItem';
import './QuestOffcanvasAllDailyReward.scss'

import Countdown from 'react-countdown';

function QuestOffcanvasAllDailyReward({ data, isTimerComplete, currentDay }) {

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return;
        } else {
            return (<><span className='me-1'>До следующей награды:</span><span>{(hours < 10 ? '0' : '') + hours}:{(minutes < 10 ? '0' : '') + minutes}:{(seconds < 10 ? '0' : '') + seconds}</span></>);
        }
    };

    return (
        <div className="quest-offcanvas-all-daily-reward overflow-auto offcanvas offcanvas-bottom d-flex flex-column align-items-center" tabIndex="-1" id="offcanvasBottomAllDailyRewards" aria-labelledby="offcanvasBottomAllDailyRewardsLabel">

            <div className="position-relative w-100">
                <svg className='position-absolute top-0 end-0' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-bs-dismiss="offcanvas" aria-label="Закрыть" style={{ cursor: 'pointer', zIndex: 2 }}>
                    <path d="M1.03613 1.00055L11.0361 11" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 10.9987L10.9991 1" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <div className='quest-offcanvas-all-daily-reward-title-container d-flex align-items-center'>
                <div className='quest-offcanvas-all-daily-image-container'>
                    <img src='/img/daily/all-daily-box.png' />
                </div>
                <div className=''>
                    <div className='quest-offcanvas-all-daily-reward-title'>
                        {'Цикл ежедневных наград'}
                    </div>
                    <div className='quest-offcanvas-all-daily-text-timer'>
                        {data.data.timeAwait > 0 && !isTimerComplete &&
                            <Countdown date={Date.now() + data.data.timeAwait} renderer={renderer}>
                            </Countdown>
                        }
                        {isTimerComplete &&
                            <span>{'Заберите награду!'}</span>
                        }
                    </div>
                </div>
            </div>

            <div className='d-flex flex-wrap justify-content-center' style={{ gap: "10px" }}>
                {data.data.allUserDailyRewards.map((AllDailyRewardItemEl, index) => {
                    return (
                        <AllDailyRewardItem
                            key={AllDailyRewardItemEl.day}
                            status={AllDailyRewardItemEl.status}
                            day={AllDailyRewardItemEl.day}
                            amount={AllDailyRewardItemEl.amount}
                            pathImage={AllDailyRewardItemEl.pathImage}
                            rewardType={AllDailyRewardItemEl.rewardType}
                            name={AllDailyRewardItemEl.name}
                            isTimerComplete={isTimerComplete}
                            currentDay={currentDay}
                        />
                    )
                })
                }
            </div>
        </div>
    )
}

export default QuestOffcanvasAllDailyReward