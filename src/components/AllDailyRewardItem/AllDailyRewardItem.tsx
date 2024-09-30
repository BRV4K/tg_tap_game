//@ts-nocheck

import { useState } from 'react';
import { numberFormat } from '../../utils/NumberFormat'
import './AllDailyRewardItem.scss'
import { useDispatch } from 'react-redux';
import { useMutation, useQueryClient } from 'react-query';
import { claimDailyRewardAPI } from '../../api/userDailyReward';
import { incrementUserLootCountGold } from '../../redux/userLootGoldSlice/userLootGoldSlice';
import { incrementUserLootCountCrystal } from '../../redux/userLootCrystalSlice/userLootCrystalSlice';
import DataFetchLoader from '../DataFetchLoader/DataFetchLoader';
import ToastSuccess from '../Toasts/ToastSuccess/ToastSuccess';

function AllDailyRewardItem({ day, pathImage, amount, status, rewardType, name, isTimerComplete, currentDay }) {

  const [claimLoading, setClaimLoading] = useState(false)

  const dispatch = useDispatch()

  const queryClient = useQueryClient();
  const dailyRewardClaimMutation = useMutation((day: number) => claimDailyRewardAPI(day), {
    onSuccess: () => {
      queryClient.invalidateQueries(['userDailyRewards']).then(() => {

        if (rewardType === "LOOT") {
          if (name === "Gold") {
            dispatch(incrementUserLootCountGold(amount))
          }
          if (name === "Crystal") {
            dispatch(incrementUserLootCountCrystal(amount))
          }
        }

        setClaimLoading(false)
        ToastSuccess("Ежедневная награда получена!", true)
      })
    }
  })

  const allDailyRewardItemOnClick = () => {
    if (isTimerComplete && day === currentDay && !claimLoading) {
      setClaimLoading(true)
      dailyRewardClaimMutation.mutate(day)
    }
  }


  return (
    <div onClick={allDailyRewardItemOnClick} className='all-daily-reward-item d-flex flex-column align-items-center position-relative' style={{ cursor: currentDay === day ? 'pointer' : 'auto' }}>
      {status === "RECEIVED" &&
        <div className='position-absolute top-50 start-50 translate-middle'>
          <svg width="45" height="27" viewBox="0 0 45 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 16.6427L10.231 25.9843L34.2814 1" stroke="#218D45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.1929 22.7866L19.3717 26L43.4221 1" stroke="#218D45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.1409 16.6423L13.2405 19.785" stroke="#218D45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </div>
      }
      <div className={`all-daily-reward-item-container ${status === 'RECEIVED' ? 'received-opacity-25' : ''} w-100 h-100 d-flex flex-column align-items-center justify-content-between `}>
        <div className='all-daily-reward-item-day w-100'>
          {'День'} {day}
        </div>
        <div className='all-daily-reward-item-image d-flex justify-content-center'>
          {rewardType === "LOOT" && name === "Gold" &&
            <img width={41} height={50} src={`/img/loot/daily-reward-${pathImage}-icon.png`} alt='' />
          }
          {rewardType === "LOOT" && name === "Crystal" &&
            <img width={56} height={50} src={`/img/loot/daily-reward-${pathImage}-icon.png`} alt='' />
          }
          {rewardType === "HERO" &&
            <img width={50} height={50} src={`/img/heroes/daily/${pathImage}.png`} alt='' />
          }
        </div>
        <div className='all-daily-reward-item-amount d-flex justify-content-center align-items-center'>
          {claimLoading &&
              <DataFetchLoader width={13} height={13} color={"#B28E4C"} />
          }
          {(rewardType === "LOOT" && !claimLoading) &&
            (isTimerComplete && day === currentDay ? "забрать" : (status === "RECEIVED" ? "собрано" : "+ " + numberFormat(amount)))
          }
          {(rewardType === "HERO" && !claimLoading) &&
            (isTimerComplete && day === currentDay ? "забрать" : (status === "RECEIVED" ? "собрано" : name))
          }
        </div>
      </div>
    </div>
  )
}

export default AllDailyRewardItem