import React from 'react'

import './Quest.scss'
import QuestAirDrop from '../../components/QuestAirDrop/QuestAirDrop'
import QuestDailyReward from '../../components/QuestDailyReward/QuestDailyReward'
import QuestQuests from '../../components/QuestQuests/QuestQuests'

function Quest() {
  return (
    <main className='w-100 d-flex flex-column align-items-center main-background main-container'>
      <QuestDailyReward/>
      <QuestAirDrop/>
      <QuestQuests/>
    </main>
  )
}

export default Quest