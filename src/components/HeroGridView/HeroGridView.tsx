//@ts-nocheck

import './HeroGridView.scss'
import HeroGridViewUnlocked from './HeroGridViewUnlocked/HeroGridViewUnlocked'

function HeroGridView({ userHeroes }) {
  return (
    <div className='hero-grid-view d-flex flex-wrap justify-content-center'>
      {userHeroes.map((userHero, index) => {
        if (userHero.status === "ACTIVE" && userHero.level !== 0) {
          return (
            <HeroGridViewUnlocked
              key={index}
              index={index}
              userHero={userHero}
            />
          )
        }
      })
      }
    </div>
  )
}

export default HeroGridView