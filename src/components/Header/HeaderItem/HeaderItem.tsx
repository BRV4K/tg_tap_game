//@ts-nocheck

import './HeaderItem.scss'

function HeaderItem({ count, imagePath, disable, iconWidth, iconHeight}) {
  return (
    <div className='header-item-container d-flex align-items-center justify-content-center position-relative'>
      {disable &&
        <div className='header-item-lock position-absolute top-50 translate-middle'>
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.00667 13.2098C7.55954 13.2098 8.00773 12.7849 8.00773 12.2607C8.00773 11.7365 7.55954 11.3115 7.00667 11.3115C6.45381 11.3115 6.00562 11.7365 6.00562 12.2607C6.00562 12.7849 6.45381 13.2098 7.00667 13.2098Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.00684 12.2606V14.1588" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.0156 6.69813V4.38208" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.0155 6.69812L13.5405 8.43207" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.8799 5.42627L15.0156 6.69818" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.0156 6.69812L16.4906 8.43207" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.1513 5.42627L15.0156 6.69818" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.0135 11.0341V16.5317C13.0135 17.2329 12.4181 17.7974 11.6786 17.7974H2.33487C1.59532 17.7974 1 17.2329 1 16.5317V9.57085C1 8.86963 1.59532 8.30518 2.33487 8.30518H10.1353" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.01465 4.79689C3.01465 2.69997 4.80756 1 7.01913 1C9.23071 1 11.0236 2.69997 11.0236 4.79689" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.0234 4.797V6.06231" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.01465 4.48047V6.06205" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      }
      <div className={`header-item-icon ${disable ? 'header-item-icon-disable' : ''} header-item-icon position-absolute top-50 translate-middle`}>
        <img src={imagePath} width={iconWidth} height={iconHeight} />
      </div>
      <div className='header-item-count'>{count}</div>
    </div>
  )
}

export default HeaderItem