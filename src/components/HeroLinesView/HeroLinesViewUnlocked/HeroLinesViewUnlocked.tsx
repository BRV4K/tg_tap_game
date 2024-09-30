//@ts-nocheck

import HeroOffcanvas from '../../HeroOffcanvas/HeroOffcanvas'
import './HeroLinesViewUnlocked.scss'
import PriceUpButton from '../../HeroPriceUpButton/HeroPriceUpButton'
import { getInitData } from '../../../utils/telegram'
import { numberFormat } from '../../../utils/NumberFormat'
import { getMaxLevelByRanks } from '../../../utils/ranks'

function HeroLinesViewUnlocked({ index, userHero }) {

    const initData = getInitData()

    const name = userHero.hero.nameRu === "User" ? initData.user?.firstName + " " + initData.user?.lastName : userHero.hero.nameRu
    const image = `/img/heroes/${userHero.hero.pathImage}.png`
    const rank = userHero.rank
    const level = userHero.level
    const damageType = userHero.hero.damageType
    const damage = userHero.hero.baseDamage * userHero.level
    const price = (level === 1 ? BigInt(userHero.hero.basePrice) : (BigInt(userHero.hero.basePrice) + BigInt(level)) * BigInt((BigInt(userHero.hero.damageRate) ** BigInt(level - 1)))).toString()

    return (
        <>
            <div className={'border_box'}>
                <div className={'line_box_unlocked'}>
                    <div className={'d-flex w-100'}>
                        <div data-bs-toggle="offcanvas" data-bs-target={"#offcanvasBottomHero" + index} aria-controls="offcanvasBottom" className='d-flex align-items-center' style={{ marginTop: '17px' }}>
                            <div className={'position-relative'}>
                                <img src={image} className={'line_img'} />
                                {userHero.hero.id !== 1 &&
                                    <div className={'position-absolute top-0 left-0'}>
                                        <img src={`/img/ranks/rank${rank}.svg`} className={'line_img'} />
                                    </div>
                                }
                            </div>
                        </div>
                        <div className={'ms-3 w-100'}>
                            <div className='hero-lines-view-unlocked-name'>{name}</div>
                            <div className={'w-100'}>
                                <p className='hero-lines-view-unlocked-level'>Уровень: <span>{level}</span></p>
                                <div className='hero-lines-view-unlocked-info-cont d-flex w-100 justify-content-between'>
                                    <div>
                                        <div className='hero-lines-view-unlocked-har'>
                                            <div className='position-relative hero-lines-view-unlocked-damage-container'>
                                                <svg className='position-absolute top-50 start-50 translate-middle' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.36415 11.9033C6.85786 11.9033 7.25809 11.5238 7.25809 11.0557C7.25809 10.5876 6.85786 10.2081 6.36415 10.2081C5.87044 10.2081 5.47021 10.5876 5.47021 11.0557C5.47021 11.5238 5.87044 11.9033 6.36415 11.9033Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M6.36377 11.0556V12.7507" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M13.5161 6.08835V4.02014" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M13.5158 6.08838L12.1987 7.63678" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M11.6089 4.95264L13.5161 6.08844" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M13.5161 6.08838L14.8332 7.63678" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M15.4233 4.95264L13.5161 6.08844" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M11.7279 9.96045V14.8697C11.7279 15.4959 11.1963 16 10.5359 16H2.19203C1.53161 16 1 15.4959 1 14.8697V8.65373C1 8.02755 1.53161 7.5235 2.19203 7.5235H9.15772" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M2.79932 4.39059C2.79932 2.51806 4.40037 1 6.37529 1C8.3502 1 9.95126 2.51806 9.95126 4.39059" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M9.95093 4.39062V5.52054" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M2.79932 4.10803V5.52037" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>

                                                <p className='hero-lines-view-unlocked-damage'>{damageType === "DPC" ? 'ДПК' : 'ДПС'}: {true ? "-" : numberFormat(damage)}</p>
                                            </div>
                                            <p className='hero-lines-view-unlocked-rank'>Доход: {numberFormat(damage)}</p>
                                        </div>

                                        <div className='mt-1'>
                                            <svg width="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 5.3199V1H5.3199M5.3199 21H1V16.6801M16.6806 21H21V16.6801M16.6806 1H21V5.3199" stroke="#B28E4C" strokeOpacity="0.2" strokeMiterlimit="20" strokeLinecap="round" />
                                                <path d="M10.3643 13.9032C10.858 13.9032 11.2582 13.5237 11.2582 13.0556C11.2582 12.5875 10.858 12.208 10.3643 12.208C9.87057 12.208 9.47034 12.5875 9.47034 13.0556C9.47034 13.5237 9.87057 13.9032 10.3643 13.9032Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10.3639 13.0557V14.7507" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17.5159 8.08823V6.02002" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17.5157 8.08838L16.1986 9.63678" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M15.6086 6.95215L17.5158 8.08796" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17.5159 8.08838L18.833 9.63678" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M19.423 6.95215L17.5159 8.08796" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M15.7279 11.9604V16.8697C15.7279 17.4959 15.1963 17.9999 14.5359 17.9999H6.19203C5.53161 17.9999 5 17.4959 5 16.8697V10.6537C5 10.0275 5.53161 9.52344 6.19203 9.52344H13.1577" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6.79919 6.39059C6.79919 4.51806 8.40025 3 10.3752 3C12.3501 3 13.9511 4.51806 13.9511 6.39059" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13.9508 6.39062V7.52054" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6.79907 6.10791V7.52024" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    {(level < getMaxLevelByRanks(rank) || userHero.hero.nameRu === "User") &&
                                        <div className={'priceup_button d-flex align-items-end'}>
                                            <PriceUpButton
                                                heroId={userHero.hero.id}
                                                heroLevel={level}
                                                heroBasePrice={userHero.hero.basePrice}
                                                heroPriceRate={userHero.hero.priceRate}
                                                heroRank={rank}
                                                text={'Улучшить'}
                                            />
                                        </div>
                                    }

                                    {(level == getMaxLevelByRanks(rank) && userHero.hero.nameRu !== "User") &&
                                        <div className={'priceup_button d-flex align-items-end'}>
                                            <div className={`price-up-button ${"price-up-button-dis"} position-relative`}>
                                                <svg width={false ? '177' : '122'} height={false ? '50' : '40'} viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M129 19.8599L110.945 38.7166H29.0301L8.30322 19.8599L29.0301 1H110.945L129 19.8599Z" stroke="#B28E4C" strokeMiterlimit="10" />
                                                    <path d="M122.697 20.1433L104.641 39H22.7269L2 20.1433L22.7269 1.28339H104.641L122.697 20.1433Z" stroke="#B28E4C" strokeWidth="2" strokeMiterlimit="10" />
                                                </svg>

                                                <div className={'priceup_text position-absolute top-50 start-50 translate-middle'}>
                                                    <div className={`price-up-button-text ${false ? 'price-up-button-text-offCanvas' : ''}`} style={{ marginBottom: '1px', fontSize: '11px' }}>{"Повысить ранг"}</div>
                                                    <div className={'d-flex align-items-center justify-content-center'}>
                                                        <img width={false ? 16.46 : 13} height={false ? 18 : 14} src={'/img/loot/stone-icon.png'} />
                                                        <div className={`ms-1 price-up-button-price ${false ? 'price-up-button-price-offCanvas' : ''}`}>{'10 000'}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'offcanvas offcanvas-bottom h-auto m-0 bg-transparent'} tabIndex="-1" id={"offcanvasBottomHero" + index} aria-labelledby="offcanvasBottomLabel">
                <div className={'offcanvas_cont'}>
                    <div className="position-relative">
                        <svg className='position-absolute top-0 end-0' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-bs-dismiss="offcanvas" aria-label="Закрыть" style={{ cursor: 'pointer', zIndex: 2 }}>
                            <path d="M1.03613 1.00055L11.0361 11" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 10.9987L10.9991 1" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="h-75 m-0 p-0">
                        <HeroOffcanvas userHero={userHero} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroLinesViewUnlocked