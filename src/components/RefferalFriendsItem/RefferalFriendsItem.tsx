//@ts-nocheck

import './RefferalFriendsItem.scss'

function RefferalFriendsItem({firstName, lastName, username, isPremium}) {
    return (
        <div className='refferal-friends-item w-100 d-flex justify-content-between'>
            <div className='refferal-friends-user d-flex align-items-center'>
                <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.817 19.43C11.2905 19.43 10.3327 18.3377 9.88818 17.7235" stroke="#B28E4C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.63756 14.4935C9.63414 13.9193 9.40314 13.3698 8.99503 12.9649C8.58692 12.5601 8.03485 12.3329 7.4594 12.3329C6.88396 12.3329 6.33189 12.5601 5.92378 12.9649C5.51567 13.3698 5.28467 13.9193 5.28125 14.4935" stroke="#B28E4C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.45996 25.8804C8.77168 25.9837 8.57156 29.4129 6.89567 29.2251C5.21979 29.0373 5.51041 25.7269 7.45996 25.8804Z" stroke="#B28E4C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.78134 4.3862C3.51598 3.65313 3.78668 2.7347 3.38595 2.33483C2.98523 1.93496 2.06483 2.20508 1.33019 2.93815C0.595546 3.67123 0.32485 4.58966 0.725573 4.98953C1.1263 5.38939 2.04669 5.11927 2.78134 4.3862Z" stroke="#B28E4C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.49263 6.69442C5.54456 5.18113 4.50719 3.7254 3.38599 2.33496" stroke="#B28E4C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.13693 7.99935C3.95749 6.69427 0.725586 4.9895 0.725586 4.9895" stroke="#B28E4C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.8174 19.43C16.3439 19.43 17.3018 18.3377 17.7462 17.7235" stroke="#B28E4C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.9961 14.4935C17.9995 13.9193 18.2305 13.3698 18.6386 12.9649C19.0467 12.5601 19.5988 12.3329 20.1742 12.3329C20.7497 12.3329 21.3018 12.5601 21.7099 12.9649C22.118 13.3698 22.349 13.9193 22.3524 14.4935" stroke="#B28E4C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.817 30.9999C17.7458 30.9999 18.1905 29.7372 18.1905 28.918C18.1905 28.0989 17.3354 25.3572 13.817 25.3572C10.2985 25.3572 9.44348 28.0989 9.44348 28.918C9.44348 29.7371 9.88812 30.9999 13.817 30.9999Z" stroke="#B28E4C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.1744 25.8804C18.8627 25.9837 19.0628 29.4129 20.7387 29.2251C22.4146 29.0373 22.124 25.7269 20.1744 25.8804Z" stroke="#B28E4C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26.9083 4.98939C27.309 4.58952 27.0383 3.67109 26.3037 2.93802C25.569 2.20494 24.6486 1.93483 24.2479 2.33469C23.8472 2.73456 24.1179 3.65299 24.8525 4.38606C25.5872 5.11914 26.5076 5.38926 26.9083 4.98939Z" stroke="#B28E4C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.142 6.69442C22.09 5.18113 23.1274 3.7254 24.2486 2.33496" stroke="#B28E4C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22.4969 7.99935C23.6764 6.69427 26.9083 4.9895 26.9083 4.9895" stroke="#B28E4C" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.1565 4.42085L17.1761 4.42138C17.6498 4.12982 18.0197 3.69721 18.2337 3.18462C17.1243 3.18116 16.0274 3.41794 15.0186 3.87862C15.879 2.97241 16.6787 2.01081 17.4128 1C17.4128 1 12.6244 2.19454 11.0054 4.25585H11.0181C4.3767 6.07 0.539429 14.0551 0.539429 18.7133C0.539429 23.992 10.2217 25.3572 13.817 25.3572C17.4124 25.3572 27.0946 23.9923 27.0946 18.7133C27.0946 14.1832 23.4646 6.50769 17.1565 4.42085Z" stroke="#B28E4C" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='refferal-friends-user-name'>
                    {firstName + " " + lastName}
                </div>
            </div>
            <div className='d-flex align-items-center'>
                <img className='refferal-friends-reward-img' width={14.5} height={22} src='/img/loot/crystal-icon.png'/>
                <div className='refferal-friends-reward-amount'>{'+ ' + (isPremium ? "300" : "100")}</div>
            </div>
        </div>
    )
}

export default RefferalFriendsItem