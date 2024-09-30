//@ts-nocheck
import { useEffect, useState } from 'react'
import './ToastStatusIcon.scss'

function ToastStatusIcon() {

  const [activeClass, setActiveClass] = useState('')

  useEffect(() => {
    setActiveClass('toast-status-active')
  })

  return (
    <svg className={activeClass} width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.1897 8.09216L17.5864 12.3821L13.1897 16.6787L13.1563 14.2369C9.61358 14.3903 8.65952 15.0508 6.37109 17.2659C7.70545 10.4873 13.7101 10.474 13.143 10.5941L13.1897 8.09216Z" stroke="#4C363C" strokeLinecap="round" strokeLinejoin="round" className="toast-status-icon-1"></path>
      <path d="M21.983 4.73626L13.4498 1.28027C12.5392 0.906576 11.5182 0.906576 10.6076 1.28027L1.84756 4.73626C1.59375 4.83571 1.37649 5.0105 1.225 5.23713C1.07352 5.46376 0.995081 5.73135 1.00024 6.0039V14.3236C1.00024 21.7693 8.73951 27 12.0621 27C15.3846 27 22.857 21.7493 22.857 14.3236V6.0039C22.8601 5.72819 22.7778 5.45829 22.6213 5.2313C22.4648 5.0043 22.2418 4.83136 21.983 4.73626Z" stroke="#4C363C" strokeLinecap="round" strokeLinejoin="round" className="toast-status-icon-2"></path>
    </svg>
  )
}

export default ToastStatusIcon