//@ts-nocheck

import './QuestDailyReward.scss'

import { claimDailyRewardAPI, getUserDailyRewards } from '../../api/userDailyReward';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { incrementUserLootCountGold } from '../../redux/userLootGoldSlice/userLootGoldSlice';
import { incrementUserLootCountCrystal } from '../../redux/userLootCrystalSlice/userLootCrystalSlice';
import DataFetchLoader from '../DataFetchLoader/DataFetchLoader';

import Countdown from 'react-countdown';
import { useState } from 'react';
import QuestOffcanvasAllDailyReward from '../QuestOffcanvasAllDailyReward/QuestOffcanvasAllDailyReward';
import ToastSuccess from '../Toasts/ToastSuccess/ToastSuccess';
import { numberFormat } from '../../utils/NumberFormat';
import DataFetchError from '../DataFetchError/DataFetchError';

function QuestDailyReward() {

  const [claimLoading, setClaimLoading] = useState(false)
  const [isTimerComplete, setIsTimerComplete] = useState(false)
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['userDailyRewards'],
    async () => {
      const data = await getUserDailyRewards();
      setIsTimerComplete(data.data.timeAwait == 0)
      return data;
    },
    {
      keepPreviousData: true,
    },
  )

  const dispatch = useDispatch()

  const queryClient = useQueryClient();
  const dailyRewardClaimMutation = useMutation((day: number) => claimDailyRewardAPI(day), {
    onSuccess: () => { 
      queryClient.invalidateQueries(['userDailyRewards']).then(() => {

        if (data.data.userDailyRewards.currentDay[0].rewardType === "LOOT") {
          if (data.data.userDailyRewards.currentDay[0].name === "Gold") {
            dispatch(incrementUserLootCountGold(data.data.userDailyRewards.currentDay[0].amount))
          }
          if (data.data.userDailyRewards.currentDay[0].name === "Crystal") {
            dispatch(incrementUserLootCountCrystal(data.data.userDailyRewards.currentDay[0].amount))
          }
        }

        setClaimLoading(false)
        ToastSuccess("Ежедневная награда получена!", true)
      })
    }
  })

  const dailyRewardClaimOnClick = () => {

    if (!isTimerComplete) {
      return
    }

    setClaimLoading(true)
    dailyRewardClaimMutation.mutate(data.data.userDailyRewards.currentDay[0].day)
  }

  if (isSuccess) {
  }

  const timerComplete = () => {
    setIsTimerComplete(true)
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return;
    } else {
      return <span>{(hours < 10 ? '0' : '') + hours}:{(minutes < 10 ? '0' : '') + minutes}:{(seconds < 10 ? '0' : '') + seconds}</span>;
    }
  };

  return (
    //animate__animated animate__bounceInDown animate__faster
    <section className='daily-reward-container w-100 animate__animated'>

      {isSuccess &&
        <div className='w-100 h-100 d-flex justify-content-center position-relative'>
          <div className='daily-reward-title position-absolute top-0 start-0'>
            {'Ежедневная награда'}
          </div>

          <div className='daily-reward-reward-container w-100 d-flex justify-content-center align-items-center'>

            <div className='d-flex align-items-center'>

              <div className='daily-reward-previous-container d-flex justify-content-center align-items-center'>
                {data.data.userDailyRewards.previousDay.length === 1 && data.data.userDailyRewards.previousDay[0].pathImage === "gold" &&
                  <img width={42} height={48} src={`/img/loot/${data.data.userDailyRewards.previousDay[0].pathImage}-icon.png`} />
                }
                {data.data.userDailyRewards.previousDay.length === 1 && data.data.userDailyRewards.previousDay[0].pathImage === "crystal" &&
                  <img width={32} height={48} src={`/img/loot/${data.data.userDailyRewards.previousDay[0].pathImage}-icon.png`} />
                }
                {data.data.userDailyRewards.previousDay.length === 1 && data.data.userDailyRewards.previousDay[0].rewardType === "HERO" &&
                  <img width={48} height={48} src={`/img/heroes/daily/${data.data.userDailyRewards.previousDay[0].pathImage}.png`} />
                }
              </div>

              <div className='daily-reward-current-container position-relative w-100'>
                {data.data.userDailyRewards.currentDay.length === 1 &&
                  <>
                    <svg width="106" height="108" viewBox="0 0 106 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M52.7982 106C80.7303 106 103.374 82.7188 103.374 54C103.374 25.2812 80.7303 2 52.7982 2C24.8661 2 2.22266 25.2812 2.22266 54C2.22266 82.7188 24.8661 106 52.7982 106Z" stroke="#B28E4C" strokeWidth="4" strokeMiterlimit="10" />
                      <path d="M90.3475 54.0001C90.3475 62.2378 87.8405 69.8699 83.5626 76.1394V86.353H73.2965C67.4026 90.3088 60.3647 92.607 52.8019 92.607C45.2392 92.607 38.1975 90.3088 32.3074 86.353H21.1049V74.703C17.4009 68.7208 15.2563 61.6205 15.2563 54.0039C15.2563 46.3874 17.4009 39.2871 21.1049 33.3049V22.1362H31.6089C37.6387 17.8854 44.9409 15.4009 52.8057 15.4009C60.6705 15.4009 67.9689 17.8854 74.0025 22.1362H83.5702V31.8685C87.848 38.138 90.3551 45.7701 90.3551 54.0078L90.3475 54.0001Z" stroke="#B28E4C" strokeMiterlimit="10" />
                    </svg>

                    <div onClick={dailyRewardClaimOnClick} className={`daily-reward-current-day ${!isTimerComplete ? 'daily-reward-current-day-await' : ''} position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center`}>
                      {claimLoading &&
                      <div className='position-absolute top-50 start-50 translate-middle'>
                        <DataFetchLoader width={45} height={45} color={"#B28E4C"} />
                      </div>
                      }
                      {data.data.userDailyRewards.currentDay[0].rewardType === "LOOT" && data.data.userDailyRewards.currentDay[0].name === "Gold" &&
                        <img className={claimLoading ? 'daily-reward-current-container-image-loading' : ''} alt='' width={49} height={56} src={`/img/loot/${data.data.userDailyRewards.currentDay[0].pathImage}-icon.png`} />
                      }
                      {data.data.userDailyRewards.currentDay[0].rewardType === "LOOT" && data.data.userDailyRewards.currentDay[0].name === "Crystal" &&
                        <img className={claimLoading ? 'daily-reward-current-container-image-loading' : ''} alt='' width={37} height={54} src={`/img/loot/${data.data.userDailyRewards.currentDay[0].pathImage}-icon.png`} />
                      }
                      {data.data.userDailyRewards.currentDay[0].rewardType === "HERO" &&
                        <img className={claimLoading ? 'daily-reward-current-container-image-loading' : ''} alt='' width={54} height={54} src={`/img/heroes/daily/${data.data.userDailyRewards.currentDay[0].pathImage}.png`} />
                      }
                    </div>

                    {data.data.timeAwait > 0 && !isTimerComplete &&
                      <div className='daily-reward-current-time w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle'>
                        <Countdown onComplete={timerComplete} date={Date.now() + data.data.timeAwait} renderer={renderer}>
                        </Countdown>
                      </div>
                    }

                    <div className='daily-reward-current-reward daily-reward-current-reward-await w-100 d-flex justify-content-center align-items-center'>

                      {data.data.userDailyRewards.currentDay[0].rewardType === "HERO" &&
                        (data.data.userDailyRewards.currentDay[0].name)
                      }
                      {data.data.userDailyRewards.currentDay[0].rewardType === "LOOT" &&
                        (numberFormat(data.data.userDailyRewards.currentDay[0].amount))
                      }

                    </div>
                  </>
                }

              </div>

              <div className='daily-reward-next-container d-flex justify-content-center align-items-center'>
                {data.data.userDailyRewards.nextDay.length === 1 && data.data.userDailyRewards.nextDay[0].rewardType === "LOOT" && data.data.userDailyRewards.nextDay[0].pathImage === "gold" &&
                  <img width={42} height={48} src={`/img/loot/${data.data.userDailyRewards.nextDay[0].pathImage}-icon.png`} />
                }
                {data.data.userDailyRewards.nextDay.length === 1 && data.data.userDailyRewards.nextDay[0].rewardType === "LOOT" && data.data.userDailyRewards.nextDay[0].pathImage === "crystal" &&
                  <img width={32} height={48} src={`/img/loot/${data.data.userDailyRewards.nextDay[0].pathImage}-icon.png`} />
                }
                {data.data.userDailyRewards.nextDay.length === 1 && data.data.userDailyRewards.nextDay[0].rewardType === "HERO" &&
                  <img width={48} height={48} src={`/img/heroes/daily/${data.data.userDailyRewards.nextDay[0].pathImage}.png`} />
                }
              </div>


            </div>

          </div>

          <div className='daily-reward-day-container d-flex flex-column align-items-center position-absolute top-0 end-0' data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottomAllDailyRewards" aria-controls="offcanvasBottomAllDailyRewards">

            <svg width="34" height="19" viewBox="0 0 34 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.959 1.04785L33.0172 17.8598L17 9.82888L0.980957 17.8598L4.03918 1.04785" stroke="#B28E4C" strokeMiterlimit="10" />
            </svg>

            <div className='daily-reward-day-text'>
              {'День'}
            </div>
            <div className='daily-reward-day-count'>
              {(data.data.timeAwait > 0 && !isTimerComplete) ? data.data.userDailyRewards.currentDay[0].day - 1 : data.data.userDailyRewards.currentDay[0].day}
            </div>

          </div>

          <QuestOffcanvasAllDailyReward data={data} isTimerComplete={isTimerComplete} currentDay={data.data.userDailyRewards.currentDay[0].day}/>

        </div>
      }

      {isLoading &&
        <DataFetchLoader width={80} height={80} color={"#B28E4C"} />
      }

      {isError &&
        <DataFetchError text={"Ой! Что-то пошло не так..."} />
      }

    </section>
  )
}

export default QuestDailyReward