//@ts-nocheck
import { useEffect, useState } from 'react'
import './ToastSuccessIcon.scss'

function ToastSuccessIcon() {

    const [activeClass, setActiveClass] = useState('')

    useEffect(() => {
        setActiveClass('toast-success-active')
    })

    return (
        <svg className={activeClass} width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.51514 12.9066L10.8827 17.3333L17.7429 9.99997" stroke="#325D4B" strokeLinecap="round" strokeLinejoin="round" className="toast-success-icon-1"></path>
            <path d="M21.983 4.73626L13.4498 1.28027C12.5392 0.906576 11.5181 0.906576 10.6076 1.28027L1.84756 4.73626C1.59375 4.83571 1.37649 5.0105 1.225 5.23713C1.07352 5.46376 0.995081 5.73135 1.00024 6.0039V14.3236C1.00024 21.7693 8.73951 27 12.0621 27C15.3846 27 22.857 21.7493 22.857 14.3236V6.0039C22.8601 5.72819 22.7778 5.45829 22.6213 5.2313C22.4648 5.0043 22.2418 4.83136 21.983 4.73626Z" stroke="#325D4B" strokeLinecap="round" strokeLinejoin="round" className="toast-success-icon-2"></path>
        </svg>
    )
}

export default ToastSuccessIcon