//@ts-nocheck

import { useMutation, useQueryClient } from 'react-query'
import { userHeroActivate } from '../../api/userHero'
import ToastSuccess from '../Toasts/ToastSuccess/ToastSuccess'
import './HeroActivateButton.scss'
import DataFetchLoader from '../DataFetchLoader/DataFetchLoader'
import { useState } from 'react'

function HeroActivateButton({ heroId }) {

  const [isLoading, setIsLoading] = useState(false)

  const queryClient = useQueryClient();
  const userHeroActivateMutation = useMutation((dataObj: object) => userHeroActivate(dataObj), {
    onSuccess: () => {
      queryClient.invalidateQueries(['userHeroes']).then(() => {
        setIsLoading(false)
        ToastSuccess("Герой успешно активирован!", true)
      })
    }
  })

  const heroActivate = () => {

    setIsLoading(true)

    userHeroActivateMutation.mutate({
      heroId: heroId,
    })
  }

  return (
    <div onClick={heroActivate} className={'position-relative'} style={{ cursor: 'pointer' }}>
      <svg width="130" viewBox="0 0 122 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M109.781 17.1208L93.6577 33.0002H20.5089L2 17.1208L20.5089 1.23877H93.6577L109.781 17.1208Z" fill='#365D4C' stroke="#B28E4C" strokeWidth="2" strokeMiterlimit="10" />
        <path d="M115.41 16.882L99.2864 32.7614H26.1375L7.62868 16.882L26.1375 1H99.2864L115.41 16.882Z" stroke="#B28E4C" strokeMiterlimit="10" />
      </svg>

      {!isLoading &&
        <div className={'activate_text position-absolute top-50 start-50 translate-middle'}>
          <span>Активировать</span>
        </div>
      }

      {isLoading &&
        <div className='position-absolute top-50 start-50 translate-middle'>
          <DataFetchLoader width={21} height={21} color={'#B28E4C'} />
        </div>
      }
    </div>
  )
}

export default HeroActivateButton