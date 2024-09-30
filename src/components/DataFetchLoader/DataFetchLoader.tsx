//@ts-nocheck

import React from 'react'
import { Oval } from 'react-loader-spinner'

export default function DataFetchLoader({ height = 25, width = 25, color = "#B28E4C" }) {
  return (
    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
      <Oval
        visible={true}
        height={height}
        width={width}
        color={color}
        secondaryColor={color}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}