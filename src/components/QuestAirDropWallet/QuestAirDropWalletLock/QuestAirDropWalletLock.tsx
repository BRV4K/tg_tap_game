import { useEffect, useState } from 'react'
import './QuestAirDropWalletLock.scss'

export default function QuestAirDropWalletLock() {
    const [activeClass, setActiveClass] = useState('')

    useEffect(() => {
        setActiveClass('svg-wallet-lock-active')
    })

    return (
        <svg className={activeClass} width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3045 30.0756C16.6211 30.0756 17.6883 29.0636 17.6883 27.8153C17.6883 26.567 16.6211 25.5551 15.3045 25.5551C13.9879 25.5551 12.9207 26.567 12.9207 27.8153C12.9207 29.0636 13.9879 30.0756 15.3045 30.0756Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" className="svg-wallet-lock-1"></path>
            <path d="M15.3042 27.8151V32.3354" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-wallet-lock-2"></path>
            <path d="M34.3755 14.5693V9.05408" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-wallet-lock-3"></path>
            <path d="M34.3751 14.5693L30.8628 18.6984" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-wallet-lock-4"></path>
            <path d="M29.2896 11.5403L34.3754 14.5692" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-wallet-lock-5"></path>
            <path d="M34.3755 14.5693L37.8878 18.6984" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-wallet-lock-6"></path>
            <path d="M39.4613 11.5403L34.3755 14.5692" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-wallet-lock-7"></path>
            <path d="M29.6079 24.8946V37.9861C29.6079 39.6559 28.1903 41 26.4292 41H4.17876C2.41764 41 1 39.6559 1 37.9861V21.41C1 19.7401 2.41764 18.396 4.17876 18.396H22.754" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-wallet-lock-8"></path>
            <path d="M5.79761 10.0416C5.79761 5.04817 10.0671 1 15.3336 1C20.6 1 24.8695 5.04817 24.8695 10.0416" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-wallet-lock-9"></path>
            <path d="M24.8691 10.0419V13.055" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-wallet-lock-10"></path>
            <path d="M5.79785 9.28839V13.0546" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-wallet-lock-11"></path>
        </svg>
    )
}
