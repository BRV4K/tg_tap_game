//@ts-nocheck

import { numberFormat } from '../../utils/NumberFormat'
import { getMaxLevelByRanks } from '../../utils/ranks'
import { getInitData } from '../../utils/telegram'
import PriceUpButton from '../HeroPriceUpButton/HeroPriceUpButton'
import './HeroOffcanvas.scss'

export default function HeroOffcanvas({ userHero }) {

    const initData = getInitData()

    const name = userHero.hero.nameRu === "User" ? initData.user?.firstName + " " + initData.user?.lastName : userHero.hero.nameRu
    const description = userHero.hero.descriptionRu
    const image = `/img/heroes/${userHero.hero.pathImage}.png`
    const rank = userHero.rank
    const level = userHero.level
    const damageType = userHero.hero.damageType
    const damage = userHero.hero.baseDamage * userHero.level

    var race = ""
    if (userHero.hero.race === "ELF")
        race = "Эльф"
    if (userHero.hero.race === "HUMAN")
        race = "Человек"
    if (userHero.hero.race === "DRAGON")
        race = "Дракон"
    if (userHero.hero.race === "DWARF")
        race = "Гном"
    if (userHero.hero.race === "UNDEAD")
        race = "Нежить"
    if (userHero.hero.race === "ANIMALS")
        race = "Зверь"
    if (userHero.hero.race === "EVIL")
        race = "Зло"
    if (userHero.hero.race === "CREATURE")
        race = "Существо"
    if (userHero.hero.race === "DEMON")
        race = "Демон"
    if (userHero.hero.race === "GOBLIN")
        race = "Гоблин"

    //fix-me
    var prestige = ""
    if (userHero.hero.prestige === "NO")
        prestige = "Базовый"

    const price = level === 1 ? userHero.hero.basePrice : (userHero.hero.basePrice + level) * Math.pow(userHero.hero.damageRate, level - 1)

    return (
        <>
            <div className={'d-flex position-relative m-auto gap-3 pb-3'}>
                <div className={'position-relative'}>
                    <img src={image} className={'offcanvas_img'} />

                    {userHero.hero.id !== 1 &&
                        <div className={'position-absolute top-0 left-0'}>
                            <img src={`/img/ranks/rank${rank}.svg`} className={'offcanvas_img'} />
                        </div>
                    }

                </div>
                <div className={''}>
                    <div className='hero-offcanvas-name'>{name}</div>
                    <div className={'hero-offcanvas-description w-100'}>{description}</div>
                    <div className={'hero-offcanvas-race w-100'}>Расса: {race}</div>
                    <div>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9.6398V1H9.6398M9.6398 41H1V32.3602M32.3612 41H41V32.3602M32.3612 1H41V9.6398" stroke="#B28E4C" strokeOpacity="0.2" strokeMiterlimit="20" strokeLinecap="round" />
                            <path d="M19.7283 26.8064C20.7157 26.8064 21.5162 26.0474 21.5162 25.1112C21.5162 24.175 20.7157 23.416 19.7283 23.416C18.7409 23.416 17.9404 24.175 17.9404 25.1112C17.9404 26.0474 18.7409 26.8064 19.7283 26.8064Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19.7275 25.1113V28.5015" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M34.0322 15.1765V11.04" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M34.0317 15.1768L31.3975 18.2736" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M30.2178 12.9053L34.0321 15.1769" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M34.0322 15.1768L36.6664 18.2736" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M37.8466 12.9053L34.0322 15.1769" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M30.4558 22.9208V32.7394C30.4558 33.9917 29.3926 34.9998 28.0718 34.9998H11.3841C10.0632 34.9998 9 33.9917 9 32.7394V20.3073C9 19.055 10.0632 18.0469 11.3841 18.0469H25.3154" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.5986 11.7812C12.5986 8.03611 15.8007 5 19.7506 5C23.7004 5 26.9025 8.03611 26.9025 11.7812" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M26.9023 11.7812V14.0411" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.5986 11.2158V14.0405" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                </div>
            </div>
            <div className={'offcanvas_indicators_box'}>
                <div className={'m-auto'}>
                    <p className='hero-offcanvas-level'>Уровень: <b>{level}/200</b></p>
                    <div className='position-relative' style={{ width: '40px' }}>
                        <svg className='position-absolute top-50 start-50 translate-middle' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.00671 11.1764C6.46751 11.1764 6.84105 10.8222 6.84105 10.3853C6.84105 9.94836 6.46751 9.59418 6.00671 9.59418C5.54591 9.59418 5.17236 9.94836 5.17236 10.3853C5.17236 10.8222 5.54591 11.1764 6.00671 11.1764Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.00635 10.3854V11.9675" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.6816 5.74907V3.81873" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.6815 5.74915L11.4521 7.19433" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.9019 4.68915L12.6819 5.74924" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.6816 5.74915L13.9109 7.19433" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.4617 4.68915L12.6816 5.74924" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.0128 9.36306V13.9451C11.0128 14.5295 10.5166 15 9.90022 15H2.11257C1.49617 15 1 14.5295 1 13.9451V8.14345C1 7.55901 1.49617 7.08856 2.11257 7.08856H8.61392" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.6792 4.16457C2.6792 2.41686 4.17353 1 6.01679 1C7.86006 1 9.35438 2.41686 9.35438 4.16457" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.35449 4.16461V5.2192" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.6792 3.90076V5.21894" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className='hero-offcanvas-damage'>{damageType === "DPC" ? 'ДПК' : 'ДПС'}: {true ? "-" : numberFormat(damage)}</p>
                    </div>
                    <p className='hero-offcanvas-damage' style={{ opacity: '100%' }}>Золота за клик: {numberFormat(damage)}</p>
                    <p className='hero-offcanvas-rank'>Ранг: {rank === 0 ? 'без ранга' : rank}</p>
                    <div className='position-relative'>
                        <svg className='position-absolute top-50 start-50 translate-middle' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.00671 11.1764C6.46751 11.1764 6.84105 10.8222 6.84105 10.3853C6.84105 9.94836 6.46751 9.59418 6.00671 9.59418C5.54591 9.59418 5.17236 9.94836 5.17236 10.3853C5.17236 10.8222 5.54591 11.1764 6.00671 11.1764Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.00635 10.3854V11.9675" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.6816 5.74907V3.81873" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.6815 5.74915L11.4521 7.19433" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.9019 4.68915L12.6819 5.74924" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.6816 5.74915L13.9109 7.19433" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.4617 4.68915L12.6816 5.74924" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.0128 9.36306V13.9451C11.0128 14.5295 10.5166 15 9.90022 15H2.11257C1.49617 15 1 14.5295 1 13.9451V8.14345C1 7.55901 1.49617 7.08856 2.11257 7.08856H8.61392" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.6792 4.16457C2.6792 2.41686 4.17353 1 6.01679 1C7.86006 1 9.35438 2.41686 9.35438 4.16457" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.35449 4.16461V5.2192" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.6792 3.90076V5.21894" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className='hero-offcanvas-prestige'>Уровень престижа: {prestige}</p>
                    </div>
                </div>
                <div className={''}>
                    <svg width={'164'} viewBox="0 0 166 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.2">
                            <path d="M119.141 3.87404L112.577 1.21559C111.876 0.928135 111.091 0.928135 110.39 1.21559L103.652 3.87404C103.457 3.95054 103.29 4.085 103.173 4.25933C103.057 4.43366 102.996 4.6395 103 4.84915V11.2489C103 16.9764 108.953 21 111.509 21C114.065 21 119.813 16.961 119.813 11.2489V4.84915C119.815 4.63707 119.752 4.42945 119.632 4.25484C119.511 4.08023 119.34 3.9472 119.141 3.87404Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <path opacity="0.2" d="M10.476 34.888C10.476 33.936 10.742 33.2127 11.274 32.718C11.806 32.2233 12.534 31.976 13.458 31.976C14.382 31.976 15.1007 32.2373 15.614 32.76C16.1273 33.2733 16.384 33.9873 16.384 34.902V39.396C16.384 39.9653 16.258 40.4553 16.006 40.866C15.7633 41.2767 15.418 41.594 14.97 41.818C14.5313 42.042 14.0227 42.154 13.444 42.154C12.8933 42.154 12.394 42.0513 11.946 41.846C11.498 41.6407 11.1387 41.3327 10.868 40.922C10.6067 40.5113 10.476 40.0027 10.476 39.396V34.888ZM11.274 39.382C11.274 39.83 11.3673 40.2033 11.554 40.502C11.7407 40.8007 11.9927 41.0293 12.31 41.188C12.6367 41.3373 13.0053 41.412 13.416 41.412C13.8453 41.412 14.2233 41.342 14.55 41.202C14.8767 41.0527 15.1333 40.8287 15.32 40.53C15.5067 40.222 15.6 39.8393 15.6 39.382V34.762C15.6 34.3047 15.5113 33.9267 15.334 33.628C15.1567 33.3293 14.9047 33.1053 14.578 32.956C14.2513 32.7973 13.864 32.718 13.416 32.718C12.9867 32.718 12.6087 32.7973 12.282 32.956C11.9647 33.1053 11.7173 33.3293 11.54 33.628C11.3627 33.9267 11.274 34.3047 11.274 34.762V39.382Z" fill="#B0B0B0" />
                        <g opacity="0.2">
                            <path d="M58.6557 13.9859C58.2555 13.9859 57.7299 14.1872 57.7299 14.6796C57.7299 15.0956 58.1444 15.4328 58.6557 15.4328C59.167 15.4328 59.5814 15.0955 59.5814 14.6796C59.5814 14.1872 59.0535 13.9859 58.6557 13.9859ZM57.6793 19.6254V17.0305C56.579 16.8634 55.619 16.4206 55 15.7948L55.4785 14.5743H56.4199V4.5699C56.4199 3.71636 57.7763 1.33738 58.6557 1C59.5351 1.33738 60.8914 3.71631 60.8914 4.5699V14.5743H61.8329L62.3114 15.7948C61.6925 16.4205 60.7324 16.8633 59.6321 17.0305V19.6254H59.9194C59.9059 20.1495 59.7603 20.6438 59.5145 20.9999H57.7968C57.551 20.6437 57.4054 20.1494 57.3918 19.6254L57.6793 19.6254Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M58.6559 13.986V5.08643" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M67.2524 8.01395C67.6525 8.01395 68.1781 7.81272 68.1781 7.32031C68.1781 6.90431 67.7637 6.56708 67.2524 6.56708C66.7411 6.56708 66.3266 6.90436 66.3266 7.32031C66.3266 7.81272 66.8546 8.01395 67.2524 8.01395ZM68.2287 2.37446V4.96938C69.329 5.13651 70.2891 5.57928 70.9081 6.20508L70.4296 7.42559H69.4881V17.43C69.4881 18.2835 68.1318 20.6625 67.2524 20.9999C66.373 20.6625 65.0166 18.2836 65.0166 17.43V7.42559H64.0752L63.5967 6.20513C64.2156 5.57938 65.1757 5.13656 66.276 4.96944V2.37451H65.9886C66.0022 1.85041 66.1478 1.3561 66.3936 1H68.1112C68.357 1.35621 68.5026 1.85046 68.5162 2.37451L68.2287 2.37446Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M67.2523 8.01416V16.9137" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <path opacity="0.2" d="M59.476 34.888C59.476 33.936 59.742 33.2127 60.274 32.718C60.806 32.2233 61.534 31.976 62.458 31.976C63.382 31.976 64.1007 32.2373 64.614 32.76C65.1273 33.2733 65.384 33.9873 65.384 34.902V39.396C65.384 39.9653 65.258 40.4553 65.006 40.866C64.7633 41.2767 64.418 41.594 63.97 41.818C63.5313 42.042 63.0227 42.154 62.444 42.154C61.8933 42.154 61.394 42.0513 60.946 41.846C60.498 41.6407 60.1387 41.3327 59.868 40.922C59.6067 40.5113 59.476 40.0027 59.476 39.396V34.888ZM60.274 39.382C60.274 39.83 60.3673 40.2033 60.554 40.502C60.7407 40.8007 60.9927 41.0293 61.31 41.188C61.6367 41.3373 62.0053 41.412 62.416 41.412C62.8453 41.412 63.2233 41.342 63.55 41.202C63.8767 41.0527 64.1333 40.8287 64.32 40.53C64.5067 40.222 64.6 39.8393 64.6 39.382V34.762C64.6 34.3047 64.5113 33.9267 64.334 33.628C64.1567 33.3293 63.9047 33.1053 63.578 32.956C63.2513 32.7973 62.864 32.718 62.416 32.718C61.9867 32.718 61.6087 32.7973 61.282 32.956C60.9647 33.1053 60.7173 33.3293 60.54 33.628C60.3627 33.9267 60.274 34.3047 60.274 34.762V39.382Z" fill="#B0B0B0" />
                        <path opacity="0.2" d="M162.826 1L154 11.9385L159.672 11.8041L155.904 21L164.769 9.36569L158.676 9.51626L162.826 1Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path opacity="0.2" d="M107.476 34.888C107.476 33.936 107.742 33.2127 108.274 32.718C108.806 32.2233 109.534 31.976 110.458 31.976C111.382 31.976 112.101 32.2373 112.614 32.76C113.127 33.2733 113.384 33.9873 113.384 34.902V39.396C113.384 39.9653 113.258 40.4553 113.006 40.866C112.763 41.2767 112.418 41.594 111.97 41.818C111.531 42.042 111.023 42.154 110.444 42.154C109.893 42.154 109.394 42.0513 108.946 41.846C108.498 41.6407 108.139 41.3327 107.868 40.922C107.607 40.5113 107.476 40.0027 107.476 39.396V34.888ZM108.274 39.382C108.274 39.83 108.367 40.2033 108.554 40.502C108.741 40.8007 108.993 41.0293 109.31 41.188C109.637 41.3373 110.005 41.412 110.416 41.412C110.845 41.412 111.223 41.342 111.55 41.202C111.877 41.0527 112.133 40.8287 112.32 40.53C112.507 40.222 112.6 39.8393 112.6 39.382V34.762C112.6 34.3047 112.511 33.9267 112.334 33.628C112.157 33.3293 111.905 33.1053 111.578 32.956C111.251 32.7973 110.864 32.718 110.416 32.718C109.987 32.718 109.609 32.7973 109.282 32.956C108.965 33.1053 108.717 33.3293 108.54 33.628C108.363 33.9267 108.274 34.3047 108.274 34.762V39.382Z" fill="#B0B0B0" />
                        <path opacity="0.2" d="M1.64522 5.05871C-2.22698 12.551 12.5507 21 13.6044 21C14.7615 21 29.4293 12.551 25.5636 5.05871C23.8635 2.17557 19.4224 -2.41418 13.6044 5.05871C10.1266 0.00998419 4.72875 -0.384346 1.64522 5.05871Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path opacity="0.2" d="M155.476 34.888C155.476 33.936 155.742 33.2127 156.274 32.718C156.806 32.2233 157.534 31.976 158.458 31.976C159.382 31.976 160.101 32.2373 160.614 32.76C161.127 33.2733 161.384 33.9873 161.384 34.902V39.396C161.384 39.9653 161.258 40.4553 161.006 40.866C160.763 41.2767 160.418 41.594 159.97 41.818C159.531 42.042 159.023 42.154 158.444 42.154C157.893 42.154 157.394 42.0513 156.946 41.846C156.498 41.6407 156.139 41.3327 155.868 40.922C155.607 40.5113 155.476 40.0027 155.476 39.396V34.888ZM156.274 39.382C156.274 39.83 156.367 40.2033 156.554 40.502C156.741 40.8007 156.993 41.0293 157.31 41.188C157.637 41.3373 158.005 41.412 158.416 41.412C158.845 41.412 159.223 41.342 159.55 41.202C159.877 41.0527 160.133 40.8287 160.32 40.53C160.507 40.222 160.6 39.8393 160.6 39.382V34.762C160.6 34.3047 160.511 33.9267 160.334 33.628C160.157 33.3293 159.905 33.1053 159.578 32.956C159.251 32.7973 158.864 32.718 158.416 32.718C157.987 32.718 157.609 32.7973 157.282 32.956C156.965 33.1053 156.717 33.3293 156.54 33.628C156.363 33.9267 156.274 34.3047 156.274 34.762V39.382Z" fill="#B0B0B0" />
                        <path d="M78.7283 29.8064C79.7157 29.8064 80.5162 29.0474 80.5162 28.1112C80.5162 27.175 79.7157 26.416 78.7283 26.416C77.7409 26.416 76.9404 27.175 76.9404 28.1112C76.9404 29.0474 77.7409 29.8064 78.7283 29.8064Z" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M78.7275 28.1113V31.5015" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M93.0322 18.1765V14.04" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M93.0317 18.1768L90.3975 21.2736" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M89.2178 15.9053L93.0321 18.1769" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M93.0322 18.1768L95.6664 21.2736" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M96.8466 15.9053L93.0322 18.1769" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M89.4558 25.9208V35.7394C89.4558 36.9917 88.3926 37.9998 87.0718 37.9998H70.3841C69.0632 37.9998 68 36.9917 68 35.7394V23.3073C68 22.055 69.0632 21.0469 70.3841 21.0469H84.3154" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M71.5986 14.7812C71.5986 11.0361 74.8007 8 78.7506 8C82.7004 8 85.9025 11.0361 85.9025 14.7812" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M85.9023 14.7812V17.0411" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M71.5986 14.2158V17.0405" stroke="#B0B0B0" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            {level < getMaxLevelByRanks(rank) &&
                <div className={'mt-3 w-100 justify-content-end d-flex'}>
                    <PriceUpButton
                        heroId={userHero.hero.id}
                        heroLevel={level}
                        text={'Улучшить'}
                        heroBasePrice={userHero.hero.basePrice}
                        heroPriceRate={userHero.hero.priceRate}
                        heroRank={rank}
                        offCanvas={true}
                    />
                </div>
            }
            {(level == getMaxLevelByRanks(rank) && userHero.hero.nameRu !== "User") &&
                <div className={'mt-3 w-100 justify-content-end d-flex'}>
                    <div className={'priceup_button d-flex align-items-end'}>
                        <div className={`price-up-button ${"price-up-button-dis"} position-relative`}>
                            <svg width={true ? '177' : '122'} height={true ? '50' : '40'} viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M129 19.8599L110.945 38.7166H29.0301L8.30322 19.8599L29.0301 1H110.945L129 19.8599Z" stroke="#B28E4C" strokeMiterlimit="10" />
                                <path d="M122.697 20.1433L104.641 39H22.7269L2 20.1433L22.7269 1.28339H104.641L122.697 20.1433Z" stroke="#B28E4C" strokeWidth="2" strokeMiterlimit="10" />
                            </svg>

                            <div className={'priceup_text position-absolute top-50 start-50 translate-middle'}>
                                <div className={`price-up-button-text ${true ? 'price-up-button-text-offCanvas' : ''}`} style={{ marginBottom: '1px', fontSize: '13px' }}>{"Повысить ранг"}</div>
                                <div className={'d-flex align-items-center justify-content-center'}>
                                    <img width={true ? 16.46 : 13} height={true ? 18 : 14} src={'/img/loot/stone-icon.png'} />
                                    <div className={`ms-1 price-up-button-price ${true ? 'price-up-button-price-offCanvas' : ''}`}>{'10 000'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}