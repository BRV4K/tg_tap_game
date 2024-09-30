//@ts-nocheck

import ToastInfo from '../Toasts/ToastInfo/ToastInfo'
import './QuestAirDropInfo.scss'

function QuestAirDropInfo() {
  return (
    <>
      <div onClick={() => ToastInfo("Скоро!", true)} className='quest-air-drop-info d-flex flex-column align-items-center justify-content-center' data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottomAirDrop" aria-controls="offcanvasBottomAirDrop">
        <img className='animate__animated animate__bounceIn animate__faster' src={"img/airdrop/airdrop-icon.png"} width={44} height={40} alt="" />
        <div className='quest-air-drop-info-title animate__animated animate__bounceIn animate__faster'>{'AirDrop'}</div>
      </div>

      <div className={'offcanvas offcanvas-bottom h-auto m-0 bg-transparent'} tabIndex="-1" id={"offcanvasBottomAirDrop"} aria-labelledby="offcanvasBottomLabel">
        <div className={'offcanvas_cont'} style={{paddingBottom: '0px'}}>
          <div className="position-relative">
            <svg className='position-absolute top-0 end-0' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-bs-dismiss="offcanvas" aria-label="Закрыть" style={{ cursor: 'pointer', zIndex: 2 }}>
              <path d="M1.03613 1.00055L11.0361 11" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 10.9987L10.9991 1" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="h-75 m-0 p-0">
            <img width={'100%'}  height={'auto'} src='/img/airdrop/offcanvas/airdrop.png'/>
          </div>
        </div>
      </div>

    </>
  )
}

export default QuestAirDropInfo