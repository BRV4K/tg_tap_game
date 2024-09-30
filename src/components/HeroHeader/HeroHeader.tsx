import './HeroHeader.scss'
import ChangeButton from './ChangeButton/ChangeButton'
import WorkshopButton from './WorkshopButton/WorkshopButton'
import ScienceButton from './ScienceButton/ScienceButton'
import LevelButton from './LevelButton/LevelButton'

function HeroHeader() {
    return (
        <div className={'hero-header justify-content-between'}>
            <div className={''}>
                <ChangeButton/>
            </div>
            <div className={'w-100 d-flex justify-content-center align-items-center'}>
                <WorkshopButton/>
            </div>
            <div className={'w-100 d-flex justify-content-center align-items-center'}>
                <ScienceButton/>
            </div>            
            <div className={''}>
                <LevelButton/>
            </div>
        </div>
    )
}

export default HeroHeader