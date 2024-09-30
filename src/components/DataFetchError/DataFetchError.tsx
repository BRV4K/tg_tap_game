//@ts-nocheck

import './DataFetchError.scss'

export default function DataFetchError({text}) {
    return (
        <div className='data-fetch-error w-100 h-100 d-flex justify-content-center align-items-center'>
            <div className='data-fetch-error-text'>
                {text}
            </div>
        </div>
    )
}