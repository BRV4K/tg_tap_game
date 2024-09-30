import './QrCode.scss'

const QrCode = () => {
  return (
    <div className="qr-code-container d-flex flex-column justify-content-center align-items-center">
      <h1 className='qr-code-title'>Use Telegram on your mobile!</h1>
      <img src='/img/qrcode/qrcode.png' width={'250'} height={'250'}/>
      <div className='qr-code-bot'>@catacomBot</div>
    </div>
  )
}

export default QrCode