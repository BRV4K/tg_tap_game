//@ts-nocheck
import HeroGridView from '../HeroGridView/HeroGridView'
import HeroLinesView from '../HeroLinesView/HeroLinesView'
import './HeroContainer.scss'
import { getUserHeroes } from '../../api/userHero'
import { useQuery } from 'react-query'
import DataFetchLoader from '../DataFetchLoader/DataFetchLoader'
import { useDispatch, useSelector } from 'react-redux'
import { setUserHeroesDamageDPC, setUserHeroesDamageDPS } from '../../redux/userHeroesDamageSlice/userHeroesDamageSlice'
import { initDataUserHeroesDamage } from '../../utils/initData'
import DataFetchError from '../DataFetchError/DataFetchError'

function HeroContainer() {

    const dispatch = useDispatch()

    const { data, isLoading, isError, isSuccess } = useQuery(
        ['userHeroes'],
        () => getUserHeroes(),
        {
            keepPreviousData: true,
        }
    )

    if (isSuccess) {
        initDataUserHeroesDamage()
    }

    const userHeroView = useSelector(state => state.userHeroView.view)
    return (
        <>
            {isSuccess &&
                <div className={'container_heroes'}>
                    {userHeroView === 'Grid' ? <HeroGridView userHeroes={data.userHeroes} /> : <HeroLinesView userHeroes={data.userHeroes} />}
                </div>
            }

            {isLoading &&
                <DataFetchLoader width={80} height={80} color={"#B28E4C"} />
            }

            {isError &&
                <DataFetchError text={"Ой! Что-то пошло не так..."} />
            }
        </>
    )
}

export default HeroContainer