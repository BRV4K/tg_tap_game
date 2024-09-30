import './WorkshopButton.scss'

function WorkshopButton() {
    return (
        <div className={'workshop_box w-100 d-flex justify-content-center align-items-center'}>
            <div className={'position-relative w-100 h-100 d-flex justify-content-center align-items-center'}>

                <div className='d-flex workshop_box_content justify-conetent-center align-items-center'>
                    <svg width="25" height="36" viewBox="0 0 25 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.2832 35L22.8177 27.4106C23.1068 27.2023 23.3318 26.916 23.4669 26.5846C23.6021 26.2532 23.6419 25.8901 23.5818 25.5369L21.3448 12.3913C18.3425 11.9609 15.3155 11.7288 12.2832 11.6964" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.2832 9.66561C14.4726 9.62597 16.6616 9.76885 18.8277 10.0928" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.8477 9.68531C16.0195 8.54326 19.4639 4.24025 12.2832 3.27823" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.2239 9.66565C17.7676 9.42512 19.4102 8.30269 19.4102 6.6992C19.4102 5.0957 16.9462 4.09924 15.2239 4.09924" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.2831 35L1.74868 27.4106C1.45958 27.2023 1.23455 26.916 1.09939 26.5846C0.964227 26.2532 0.924414 25.8901 0.984516 25.5369L3.22152 12.3913C6.22384 11.9609 9.25082 11.7288 12.2831 11.6964" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.2832 9.66561C10.0938 9.62597 7.90487 9.76885 5.73877 10.0928" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.7187 9.68531C8.5469 8.54326 5.10249 4.24025 12.2832 3.27823" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.34212 9.66565C6.79845 9.42512 5.15576 8.30269 5.15576 6.6992C5.15576 5.0957 7.61983 4.09924 9.34212 4.09924" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.2832 2.80392C12.777 2.80392 13.1774 2.4001 13.1774 1.90196C13.1774 1.40382 12.777 1 12.2832 1C11.7893 1 11.3889 1.40382 11.3889 1.90196C11.3889 2.4001 11.7893 2.80392 12.2832 2.80392Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.2832 9.66545V2.80399" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.2832 11.6964V35" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className='workshop_box_text'>Мастерская</div>
                </div>

                <div className={'small_lock'}>
                    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.15217 15.5378C8.81044 15.5378 9.34408 15.0319 9.34408 14.4077C9.34408 13.7836 8.81044 13.2776 8.15217 13.2776C7.49389 13.2776 6.96025 13.7836 6.96025 14.4077C6.96025 15.0319 7.49389 15.5378 8.15217 15.5378Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.15207 14.4075V16.6676" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.6876 7.78472V5.0271" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.6874 7.78467L15.9313 9.8492" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.1447 6.27026L17.6876 7.78467" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.6876 7.78467L19.4437 9.8492" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20.2305 6.27026L17.6876 7.78467" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24.5428 7.75762V5" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24.5426 7.75757L22.7864 9.8221" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.9998 6.24316L24.5427 7.75757" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24.5428 7.75757L26.2989 9.8221" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M27.0857 6.24316L24.5428 7.75757" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.3039 12.9473V19.493C15.3039 20.3279 14.5951 21 13.7145 21H2.58937C1.70882 21 1 20.3279 1 19.493V11.205C1 10.3701 1.70882 9.698 2.58937 9.698H11.877" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.39876 5.52079C3.39876 3.02407 5.5335 1 8.16672 1C10.7999 1 12.9347 3.02407 12.9347 5.52079" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.9343 5.521V7.02755" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.39859 5.14404V7.02716" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default WorkshopButton