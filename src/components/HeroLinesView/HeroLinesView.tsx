//@ts-nocheck

import './HeroLinesView.scss'
import HeroLinesViewActivate from './HeroLinesViewActivate/HeroLinesViewActivate';
import HeroLinesViewLocked from './HeroLinesViewLocked/HeroLinesViewLocked';
import HeroLinesViewUnlocked from './HeroLinesViewUnlocked/HeroLinesViewUnlocked';

function HeroLinesView({ userHeroes }) {
    return (
        <div>
            {userHeroes.map((userHero, index) => {
                if (userHero.status === "ACTIVE" && userHero.level !== 0) {
                    return (
                        <HeroLinesViewUnlocked
                            key={index}
                            index={index}
                            userHero={userHero}
                        />
                    )
                }
                if (userHero.status === "ACTIVE" && userHero.level === 0) {
                    return (
                        <HeroLinesViewLocked
                            key={index}
                            index={index}
                            userHero={userHero}
                        />
                    )
                }
                if (userHero.status === "NOT_ACTIVE" && userHero.hero.type === "REFFERAL") {
                    return (
                        <HeroLinesViewActivate
                            key={index}
                            index={index}
                            userHero={userHero}
                        />
                    )
                }
                if (userHero.status === "NOT_ACTIVE" && userHero.hero.type === "DAILY") {
                    return (
                        <HeroLinesViewActivate
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

export default HeroLinesView