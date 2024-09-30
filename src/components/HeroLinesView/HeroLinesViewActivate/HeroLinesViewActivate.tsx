//@ts-nocheck

import HeroActivateButton from '../../HeroActivateButton/HeroActivateButton'
import './HeroLinesViewActivate.scss'

function HeroLinesViewActivate({ index, userHero }) {

    const name = userHero.hero.nameRu
    const image = `/img/heroes/${userHero.hero.pathImage}.png`
    const rank = userHero.rank

    return (
        <div className={'border_box'}>
            <div className={'line_box_activate'}>
                <div className={'d-flex'} >

                    <div className='d-flex align-items-center' style={{ marginTop: '17px' }}>
                        <div className={'position-relative'}>
                            <img src={image} className={'line_img'} />
                            {userHero.hero.id !== 1 &&
                                <div className={'position-absolute top-0 left-0'}>
                                    <img src={`/img/ranks/rank${rank}.svg`} className={'line_img'} />
                                </div>
                            }
                        </div>
                    </div>

                    <div className={'ms-4 w-100'}>
                        <div className='hero-lines-view-activate-name'>{name}</div>
                        <p className='hero-lines-view-activate-desc'>Поздравляем, ваш герой собран. Нажмите активировать что бы призвать его.</p>
                        <div className={'priceup_button_locked w-100 d-flex justify-content-end mt-2'}>
                            <HeroActivateButton heroId={userHero.hero.id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroLinesViewActivate