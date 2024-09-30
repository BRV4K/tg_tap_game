import './RefferalRewardUser.scss'

function RefferalRewardUser() {
  return (
    //animate__animated animate__bounceInLeft animate__faster
    //animate__animated animate__bounceIn animate__faster
    <div className='refferal-reward-user w-100 d-flex flex-column justify-content-center align-items-center position-relative'>
      <div className='refferal-reward-user-bg-crystal position-absolute end-0' style={{zIndex: 1}}>
      </div>
      <div className='w-100' style={{zIndex: 2}}>
        <div className='w-100 d-flex justify-content-center align-items-center mb-1 animate__animated animate__bounceIn animate__faster'>
          <img className='refferal-reward-user-icon' src='/img/loot/crystal-icon.png' />
          <div className='refferal-reward-user-amount'>{'+100'}</div>
        </div>
        <div className='refferal-reward-user-info'>
          {'за каждого друга'}
        </div>
      </div>
    </div>
  )
}

export default RefferalRewardUser