import './SendRefferalLink.scss'

import { getUserIdByInitData } from '../../utils/telegram'

function SendRefferalLink() {
  const refferalUrl = process.env.NODE_ENV == "production" ? process.env.REACT_APP_BOT_URL_PRODUCTION : process.env.REACT_APP_BOT_URL_DEVELOPMENT
  
  return (
    <a href={`https://t.me/share/url?url=${refferalUrl}${getUserIdByInitData()}`} className='send-refferal-link-btn w-100 d-flex justify-content-center align-items-center text-white text-decoration-none'>Пригласить друга</a>
  )
}

export default SendRefferalLink