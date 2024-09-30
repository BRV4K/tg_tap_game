import './RefferalLinkContainer.scss'

import CopyRefferalLink from '../CopyRefferalLink/CopyRefferalLink'
import SendRefferalLink from '../SendRefferalLink/SendRefferalLink'


function RefferalLinkContainer() {
    return (
        <div className='d-flex justify-content-center'>
            <div className='w-100 row refferal-link-container'>
                <div className='col-10 p-0 pe-2'>
                    <SendRefferalLink />
                </div>
                <div className='col-2 p-0'>
                    <CopyRefferalLink />
                </div>
            </div>
        </div>
    )
}

export default RefferalLinkContainer