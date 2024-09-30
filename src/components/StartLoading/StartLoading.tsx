//@ts-nocheck
import LoadingBar from 'react-top-loading-bar';
import './StartLoading.scss'
import { useEffect, useState } from 'react';
import { startInitData } from '../../utils/initData';
import { preloadImageWithPromise } from '../../utils/preloadImage';


function StartLoading() {

  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const initData = async () => {
      await startInitData()
    }
    initData()

    const preloadImages = async () => {
      const images = [
        //airdrop
        '/img/airdrop/airdrop-icon.png',
        '/img/airdrop/offcanvas/airdrop.png',

        //background
        '/img/background/main-background.png',
        '/img/background/monster-background.png',
        '/img/background/start-loading-background-20.png',

        //coin
        '/img/coin/coin.png',
        '/img/coin/coinClick.png',

        //daily
        '/img/daily/all-daily-box.png',
        '/img/daily/daily-day.png',

        //heroes
        '/img/heroes/daily/sirelliot.png',
        '/img/heroes/refferal/catanos.png',
        '/img/heroes/baymey.png',
        '/img/heroes/catanos.png',
        '/img/heroes/filtad.png',
        '/img/heroes/flint.png',
        '/img/heroes/ged.png',
        '/img/heroes/kassian.png',
        '/img/heroes/lass.png',
        '/img/heroes/lorri.png',
        '/img/heroes/mamon.png',
        '/img/heroes/martin.png',
        '/img/heroes/misterhomster.png',
        '/img/heroes/sirelliot.png',
        '/img/heroes/user.png',
        '/img/heroes/vedana.png',

        //loot
        '/img/loot/header/crystal-icon.png',
        '/img/loot/header/gold-icon.png',
        '/img/loot/header/soul-icon.png',
        '/img/loot/header/stone-icon.png',
        '/img/loot/refferal/refferal-user-crystal.png',
        '/img/loot/airdrop-icon.png',
        '/img/loot/crystal-icon.png',
        '/img/loot/daily-reward-crystal-icon.png',
        '/img/loot/daily-reward-gold-icon.png',
        '/img/loot/gold-icon.png',

        //quest
        '/img/quest/logo/catacombs.png',

        //ranks
        '/img/ranks/rank0.svg'

      ];

      try {
        await Promise.all(images.map(image => preloadImageWithPromise(window.location.origin + image)));
      } catch (error) {
      }

    }
    preloadImages()
  })

  return (
    <section className='start-loading-bg w-100 h-100 d-flex flex-column justify-content-center align-items-center'>

      <div className='start-loading-bg-image w-100 h-100 d-flex flex-column justify-content-between align-items-center'>

        <LoadingBar
          color={"#B0B0B0"}
          progress={progress}
          height={3}
          loaderSpeed={5000}
          waitingTime={10005000}
        />

        <div className='h-100 d-flex justify-content-center align-items-center'>
          <div className='start-loading-loader d-flex position-relative'>
            <img width={200} height={200} src='/img/logo/logo-rotate.png' className='rotate-img' />
            <img width={200} height={200} src='/img/logo/logo-static.png' className='position-absolute left-0' />
          </div>
        </div>

        <div>

          <div className='start-loading-ton-container d-flex align-items-center'>
            <div className='start-loading-icon-ton'>
              <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2344_3935)">
                  <path d="M33 66C51.2254 66 66 51.2254 66 33C66 14.7746 51.2254 0 33 0C14.7746 0 0 14.7746 0 33C0 51.2254 14.7746 66 33 66Z" fill="#0088CC" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M21.766 19.8H44.4096C45.2107 19.8 46.0113 19.9176 46.8478 20.3077C47.8506 20.775 48.3824 21.5119 48.755 22.0568C48.784 22.0992 48.8111 22.1429 48.8362 22.1876C49.2742 22.9673 49.5 23.8092 49.5 24.7149C49.5 25.5754 49.2953 26.5129 48.8362 27.33C48.8318 27.3378 48.8274 27.3456 48.8229 27.3534L34.517 51.9278C34.2015 52.4697 33.6208 52.8022 32.9938 52.8C32.3667 52.7977 31.7884 52.4612 31.4768 51.917L17.4336 27.3949C17.4295 27.3884 17.4255 27.3816 17.4215 27.375C17.1001 26.8454 16.6031 26.0264 16.5161 24.9694C16.4362 23.9976 16.6547 23.0237 17.143 22.1794C17.6314 21.3349 18.3666 20.6598 19.2509 20.2465C20.1991 19.8034 21.1599 19.8 21.766 19.8ZM31.2446 23.3106H21.766C21.1432 23.3106 20.9041 23.349 20.737 23.4272C20.5059 23.535 20.3118 23.7124 20.1821 23.9369C20.0523 24.1614 19.9936 24.4215 20.0149 24.6817C20.0272 24.8311 20.0881 25.0018 20.4469 25.5937C20.4544 25.6061 20.4618 25.6186 20.469 25.6312L31.2446 44.4474V23.3106ZM34.7553 23.3106V44.5404L45.7806 25.6013C45.905 25.3753 45.9893 25.0485 45.9893 24.7149C45.9893 24.4442 45.9333 24.2092 45.8078 23.9668C45.6762 23.7777 45.596 23.6775 45.5289 23.6088C45.4714 23.5501 45.4272 23.5187 45.3646 23.4896C45.1039 23.368 44.8371 23.3106 44.4096 23.3106H34.7553Z" fill="#B0B0B0" />
                </g>
                <defs>
                  <clipPath id="clip0_2344_3935">
                    <rect width="66" height="66" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className='start-loading-text-container'>
              <div className='start-loading-text-info'>
                based on
              </div>
              <div className='start-loading-text-ton'>
                TON
              </div>
            </div>
          </div>

          <div>
            <div className='start-loading-text-channel'>More info on the official channel</div>
            <div className='d-flex justify-content-center'>

              <a>
                <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.8188 0.264928C24.6646 2.24838 6.85207 10.754 1.93048 13.0722C-1.37016 14.557 0.562077 15.9493 0.562077 15.9493C0.562077 15.9493 3.37958 17.0628 5.79496 17.8981C8.21001 18.7333 9.49805 17.8054 9.49805 17.8054L20.8491 8.98886C24.8743 5.83347 23.9083 8.43189 22.942 9.54583C20.8491 11.959 17.3874 15.7636 14.4892 18.8264C13.2011 20.1256 13.845 21.2391 14.4088 21.7961C16.5018 23.8379 22.2178 28.0142 22.5396 28.2925C24.2402 29.6805 27.5854 31.6783 28.0942 27.4573L30.1068 12.8869C30.751 7.96833 31.3949 3.42071 31.4752 2.1215C31.717 -1.03428 28.8188 0.264928 28.8188 0.264928Z" fill="#B0B0B0" />
                </svg>
              </a>

              <a>
                <svg style={{ marginLeft: "14px", marginRight: "14px" }} width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M41.6958 4.68442C41.2058 2.84065 39.7631 1.38842 37.9307 0.895679C34.6101 5.43375e-08 21.293 0 21.293 0C21.293 0 7.97587 5.43375e-08 4.65525 0.895679C2.82287 1.38842 1.37976 2.84065 0.890209 4.68442C-5.43375e-08 8.02693 0 15 0 15C0 15 -5.43375e-08 21.9731 0.889753 25.3156C1.3793 27.1594 2.82241 28.6116 4.6548 29.1043C7.97587 30 21.293 30 21.293 30C21.293 30 34.6101 30 37.9312 29.1043C39.7636 28.6111 41.2062 27.1594 41.6962 25.3156C42.586 21.9731 42.586 15 42.586 15C42.586 15 42.586 8.02693 41.6958 4.68442Z" fill="#B0B0B0" />
                  <path d="M16.8643 8.5625V21.4375L28.1822 15.0004L16.8643 8.5625Z" fill="#291E20" />
                </svg>
              </a>

              <a>
                <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.1385 0H31.2277L20.1092 12.7077L33.1892 30H22.9477L14.9262 19.5123L5.74769 30H0.655385L12.5477 16.4077L0 0H10.5015L17.7523 9.58615L26.1385 0ZM24.3523 26.9538H27.1723L8.96923 2.88615H5.94308L24.3523 26.9538Z" fill="#B0B0B0" />
                </svg>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default StartLoading