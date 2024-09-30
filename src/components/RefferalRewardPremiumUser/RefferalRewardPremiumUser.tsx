import './RefferalRewardPremiumUser.scss'

function RefferalRewardPremiumUser() {
    return (
        //animate__animated animate__bounceInRight animate__faster
        //animate__animated animate__bounceIn animate__faster
        <div className='refferal-reward-premium-user w-100 d-flex flex-column justify-content-center align-items-center position-relative'>
            <div className='refferal-reward-user-bg-crystal position-absolute end-0' style={{ zIndex: 1 }}></div>
            <div className='w-100' style={{ zIndex: 2 }}>
                <div className='w-100 d-flex justify-content-center align-items-center mb-1 animate__animated animate__bounceIn animate__faster'>
                    <img className='refferal-reward-premium-user-icon' src='/img/loot/crystal-icon.png'/>
                    <div className='refferal-reward-premium-user-amount'>{'+300'}</div>
                </div>
                <div className='refferal-reward-premium-user-info'>
                    {'за каждого друга, с telegram premium'}
                </div>
                <svg className='position-absolute top-0 start-50 translate-middle' width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.2025 25.0388L8.00264 29.2996C7.25398 29.7425 6.27527 29.5154 5.81666 28.7922C5.59265 28.439 5.52588 28.0133 5.63145 27.6119L6.746 23.3742C7.14832 21.8444 8.23198 20.5657 9.70491 19.8826L17.5596 16.2396C17.9258 16.0697 18.0802 15.6453 17.9044 15.2916C17.762 15.0051 17.44 14.8448 17.1158 14.899L8.37251 16.3612C6.5952 16.6584 4.77258 16.1843 3.39007 15.0652L0.62799 12.8292C-0.0449263 12.2844 -0.133283 11.3158 0.430641 10.6658C0.704913 10.3496 1.09932 10.1534 1.52503 10.1212L9.96404 9.48321C10.5602 9.43813 11.0798 9.07367 11.3087 8.53997L14.5643 0.948329C14.9003 0.164783 15.8303 -0.207271 16.6414 0.117319C17.0308 0.273175 17.3403 0.572096 17.5016 0.948329L20.7572 8.53997C20.9861 9.07367 21.5057 9.43813 22.1019 9.48321L30.5874 10.1247C31.4626 10.1909 32.1165 10.9299 32.048 11.7755C32.0152 12.1822 31.8159 12.5596 31.4946 12.8243L25.0232 18.1537C24.5674 18.5289 24.3689 19.1195 24.5088 19.6818L26.4984 27.6656C26.7039 28.4903 26.1784 29.3195 25.325 29.518C24.9147 29.6135 24.4822 29.5473 24.1225 29.3344L16.8634 25.0388C16.3538 24.7373 15.7121 24.7373 15.2025 25.0388Z" fill="#B0B0B0" />
                </svg>
            </div>
        </div>
    )
}

export default RefferalRewardPremiumUser