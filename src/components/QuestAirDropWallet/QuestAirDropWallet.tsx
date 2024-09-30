//@ts-nocheck

import ToastInfo from '../Toasts/ToastInfo/ToastInfo'
import './QuestAirDropWallet.scss'
import QuestAirDropWalletLock from './QuestAirDropWalletLock/QuestAirDropWalletLock'

function QuestAirDropWallet() {
  return (
    //animate__animated animate__bounceInLeft animate__faster
    //animate__animated animate__bounceIn animate__faster
    <div onClick={() => ToastInfo("Скоро!", true)} className='quest-air-drop-wallet-container w-100 d-flex align-items-center position-relative'>
      <div className='quest-air-drop-wallet-icon d-flex justify-content-center align-items-center'>
        <svg width="45" height="36" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.25 26.75V13.25" stroke="#B0B0B0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M44.3749 13.25H38.5193C34.5046 13.25 31.25 16.272 31.25 20C31.25 23.728 34.5046 26.75 38.5193 26.75H44.3749C44.5626 26.75 44.6562 26.75 44.7354 26.7453C45.9488 26.6713 46.9152 25.774 46.9948 24.6472C47 24.5736 47 24.4865 47 24.3126V15.6874C47 15.5135 47 15.4263 46.9948 15.3528C46.9152 14.2261 45.9488 13.3287 44.7354 13.2548C44.6562 13.25 44.5626 13.25 44.3749 13.25Z" stroke="#B0B0B0" strokeWidth="3" />
          <path d="M44.6713 13.25C44.4964 9.03732 43.9323 6.45444 42.1139 4.63603C39.478 2 35.2352 2 26.75 2H20C11.5147 2 7.27209 2 4.63603 4.63603C2 7.27209 2 11.5147 2 20C2 28.4852 2 32.728 4.63603 35.3639C7.27209 38 11.5147 38 20 38H26.75C35.2352 38 39.478 38 42.1139 35.3639C43.9323 33.5457 44.4964 30.9627 44.6713 26.75" stroke="#B0B0B0" strokeWidth="3" />
          <path d="M37.9802 20H38.0005" stroke="#B0B0B0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      </div>
      <div className='quest-air-drop-wallet-title m-auto'>
        {'Привязать кошелек'}
      </div>

      <div className='quest-air-drop-wallet-lock w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle'>
        <QuestAirDropWalletLock/>
      </div>

    </div>
  )
}

export default QuestAirDropWallet