import './QuestAirDrop.scss'

import QuestAirDropInfo from '../QuestAirDropInfo/QuestAirDropInfo'
import QuestAirDropWallet from '../QuestAirDropWallet/QuestAirDropWallet'

function QuestAirDrop() {
  return (
    <div className='d-flex justify-content-center w-100'>
        <QuestAirDropWallet/>
        <QuestAirDropInfo/>
    </div>
  )
}

export default QuestAirDrop