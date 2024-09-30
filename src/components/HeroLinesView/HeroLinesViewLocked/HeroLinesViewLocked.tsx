//@ts-nocheck

import PriceUpButton from '../../HeroPriceUpButton/HeroPriceUpButton'
import './HeroLinesViewLocked.scss'

function HeroLinesViewLocked({ index, userHero }) {

    const name = userHero.hero.nameRu
    const image = `/img/heroes/${userHero.hero.pathImage}.png`
    const rank = userHero.rank
    const level = userHero.level
    const price = userHero.hero.basePrice.toString()
    const description = userHero.hero.descriptionRu

    return (
        <div className={'border_box_locked'}>
            <div className={'line_box_locked'}>
                <div className={'d-flex'}>
                    <div className={'position-relative'} style={{ marginTop: '17px' }}>
                        <img src={image} className={'line_img_lock'} />
                        {userHero.hero.id !== 1 &&
                            <div className={'position-absolute top-0 left-0'}>
                                <img src={`/img/ranks/rank${rank}.svg`} className={'line_img_lock'} />
                            </div>
                        }
                        {userHero.hero.prestige !== "NO" &&
                            < div className={'unlocked_border'}>
                                <svg height='36vw' viewBox="0 0 304 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M302 152L274.017 179.983V274.017H179.983L152 302L124.017 274.017H29.9832V179.983L2 152L29.9832 124.017V29.9832H124.017L152 2L179.983 29.9832H274.017V124.017L302 152Z" stroke="#B28E4C" stroke-width="5" stroke-miterlimit="10" />
                                </svg>
                            </div>
                        }

                    </div>
                    <div className={'ms-3 w-100 d-flex flex-column justify-content-between'}>
                        <div>
                            <div className='hero-lines-view-locked-name'>{name}</div>
                            <p className='hero-lines-view-locked-description'>{description}</p>
                        </div>
                        {/* <div className='hero-lines-view-locked-name'>{name}</div> */}
                        <div className='d-flex flex-column w-100 justify-content-between'>
                            <div className={'w-100 priceup_button_locked priceup_button d-flex align-items-end justify-content-end mt-2'}>
                                <PriceUpButton
                                    heroId={userHero.hero.id} 
                                    heroLevel={level}
                                    heroBasePrice={userHero.hero.basePrice}
                                    heroPriceRate={userHero.hero.priceRate}
                                    heroRank={rank}
                                    text={'Призвать'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'vopros'}>
                    <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.10272 2.51852C7.91609 2.03263 9.44486 2.0095 10.689 2.44913C11.9332 2.88876 12.7762 3.93283 13.2179 5.58134C13.378 6.17893 13.4399 6.78075 13.4035 7.38682C13.3616 7.97228 13.2551 8.564 13.0841 9.16199C12.9281 9.73384 12.7206 10.3195 12.4616 10.919C12.2177 11.4923 11.971 12.0553 11.7215 12.6081C11.3378 13.4839 11.0028 14.3356 10.7166 15.1632C10.451 15.9853 10.307 16.8079 10.2846 17.6311L7.49774 17.6159C7.21063 16.5444 7.17503 15.5048 7.39094 14.4973C7.60686 13.4897 7.89362 12.5405 8.25122 11.6496C8.60882 10.7587 8.92871 9.93308 9.21088 9.1728C9.48754 8.39193 9.54304 7.69239 9.3774 7.0742C9.17311 6.31176 8.79938 5.78245 8.25621 5.48628C7.71305 5.1901 7.08085 5.13864 6.35963 5.33189C6.02993 5.42023 5.72911 5.53396 5.45719 5.67308C5.20587 5.80668 4.94977 5.96365 4.68888 6.14398C4.428 6.32431 4.15479 6.54108 3.86926 6.79427C3.58373 7.04747 3.2419 7.33783 2.84378 7.66537L0.984008 5.54651C1.72396 4.92861 2.49557 4.3464 3.29882 3.79988C4.11716 3.22723 5.05179 2.80011 6.10272 2.51852ZM9.64398 19.6911C10.3652 19.4979 10.9796 19.5652 11.487 19.893C11.9945 20.2208 12.3393 20.7247 12.5216 21.4047C12.6982 22.0641 12.6516 22.673 12.3815 23.2312C12.1115 23.7895 11.5849 24.1735 10.8019 24.3833C10.0806 24.5766 9.46353 24.499 8.95054 24.1505C8.45815 23.7966 8.12913 23.3105 7.96349 22.6923C7.7868 22.0329 7.83348 21.4241 8.10353 20.8658C8.36806 20.287 8.88154 19.8954 9.64398 19.6911Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div >
    )
}

export default HeroLinesViewLocked