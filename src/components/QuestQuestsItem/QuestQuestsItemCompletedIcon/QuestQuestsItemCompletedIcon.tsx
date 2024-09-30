//@ts-nocheck
import './QuestQuestsItemCompletedIcon.scss'

import React, { useEffect, useState } from 'react'

function QuestQuestsItemCompletedIcon({completedProps}) {

    const [activeClass, setActiveClass] = useState('')

    useEffect(() => {        
      setActiveClass('quest-completed-icon-active')      
    })

    return (
        <svg className={!completedProps ? activeClass: 'quest-completed-icon-active'} width="29.7" height="17.5" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11.9527L7.4634 18.4936L24.3031 1" stroke="#218D45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-quest-completed-icon-1"></path>
            <path d="M11.6377 16.2546L13.8635 18.5046L30.7032 1" stroke="#218D45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-quest-completed-icon-2"></path>
            <path d="M7.40039 11.9528L9.5707 14.1532" stroke="#218D45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-quest-completed-icon-3"></path>
        </svg>
    )
}

export default QuestQuestsItemCompletedIcon