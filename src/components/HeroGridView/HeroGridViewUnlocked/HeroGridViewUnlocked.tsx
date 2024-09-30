//@ts-nocheck

import HeroOffcanvas from '../../HeroOffcanvas/HeroOffcanvas'
import './HeroGridViewUnlocked.scss'

function HeroGridViewUnlocked({ index, userHero }) {

  const rank = userHero.rank
  const image = `/img/heroes/${userHero.hero.pathImage}.png`

  return (
    <div>
      <div className={'hero-grid-view-unlocked position-relative'}>
        <div className={'grid_border'}>
          <div className={'position-relative'} data-bs-toggle="offcanvas" data-bs-target={"#offcanvasBottomHero" + index} aria-controls="offcanvasBottom" style={{ cursor: 'pointer' }}>
            <div className={userHero.hero.id !== 1 ? `rang${rank}` : ''}>
              <img src={image} className={'h-100 w-100'} />
            </div>
          </div>
        </div>
      </div>
      <div className={'offcanvas offcanvas-bottom h-auto m-0 bg-transparent'} tabIndex="-1" id={"offcanvasBottomHero" + index} aria-labelledby="offcanvasBottomLabel">
        <div className={'offcanvas_cont'}>
          <div className="position-relative">
            <svg className='position-absolute top-0 end-0' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-bs-dismiss="offcanvas" aria-label="Закрыть" style={{cursor:'pointer', zIndex: 2}}>
              <path d="M1.03613 1.00055L11.0361 11" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 10.9987L10.9991 1" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="h-75 m-0 p-0">
            <HeroOffcanvas userHero={userHero} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroGridViewUnlocked