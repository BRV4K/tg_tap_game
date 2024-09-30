//@ts-nocheck

import CopyRefferalLink from '../CopyRefferalLink/CopyRefferalLink'
import SendRefferalLink from '../SendRefferalLink/SendRefferalLink'
import './RefferalRewardButtonContainer.scss'

function RefferalRewardButtonContainer() {
    return (
        <div className='refferal-reward-btn-container w-100 d-flex'>
            <SendRefferalLink />
            <CopyRefferalLink />
        </div>
    )
}

export default RefferalRewardButtonContainer