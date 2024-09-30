//@ts-nocheck

import { useDispatch, useSelector } from 'react-redux'
import './LevelButton.scss'
import { setUserHeroBtnLevelCount } from '../../../redux/userHeroBtnLevelCountSlice/userHeroBtnLevelCountSlice'

function LevelButton() {

    const dispatch = useDispatch()
    const level = useSelector((state) => state.userHeroBtnLevelCount.countLevel)

    const setLevelCount = () => {
        dispatch(setUserHeroBtnLevelCount())
    }

    return (
        <div style={{cursor: 'pointer'}} onClick={setLevelCount} className={'position-relative'}>
            <svg height={41} width={52} fill="none" viewBox="0 0 52 41" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00014 8.25738V1H8.25751M8.25751 40.2573H1.00014V32.9999M43.7434 40.2573H51V32.9999M43.7434 1.00005H51V8.25743" stroke="#B28E4C" strokeMiterlimit="20" strokeLinecap="round" />
            </svg>
            <div className={'level_text position-absolute top-50 start-50 translate-middle w-100'}>
                X{level}
            </div>
        </div>
    )
}

export default LevelButton