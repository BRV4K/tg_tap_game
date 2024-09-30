import { useEffect, useState } from "react";

export default function Friends({ active }) {
  const [strokeCololor, setStrokeColor] = useState(
    active ? "#B28E4C" : "#B8B8B8"
  );
  useEffect(() => {
    setStrokeColor(active ? "#B28E4C" : "#B8B8B8");
  });

  return (
    <div className={"d-flex align-items-center justify-content-center w-100 p-0 m-0"}>
     
        <svg
          height={30}
          width={50}
          viewBox="0 0 101 113"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.107 68.8359C40.9445 68.8359 37.4711 64.8747 35.8591 62.6475"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.9516 50.9348C34.9392 48.8524 34.1015 46.8596 32.6215 45.3915C31.1415 43.9234 29.1394 43.0994 27.0526 43.0994C24.9657 43.0994 22.9637 43.9234 21.4837 45.3915C20.0037 46.8596 19.166 48.8524 19.1536 50.9348"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.0525 92.2285C31.8094 92.6031 31.0837 105.039 25.0061 104.358C18.9285 103.677 19.9825 91.6717 27.0525 92.2285Z"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.0864 14.28C12.7506 11.6215 13.7323 8.29086 12.2791 6.84075C10.8259 5.39065 7.48806 6.37022 4.8239 9.0287C2.15973 11.6872 1.17806 15.0178 2.63127 16.4679C4.08448 17.918 7.42227 16.9385 10.0864 14.28Z"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.544 22.65C20.1058 17.1621 16.3438 11.883 12.2778 6.84058"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.6289 27.3829C14.3516 22.6501 2.63123 16.4678 2.63123 16.4678"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M50.1069 68.8359C59.2694 68.8359 62.7429 64.8747 64.3548 62.6475"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M65.2622 50.9348C65.2746 48.8524 66.1123 46.8596 67.5923 45.3915C69.0723 43.9234 71.0744 43.0994 73.1612 43.0994C75.2481 43.0994 77.2501 43.9234 78.7301 45.3915C80.2101 46.8596 81.0478 48.8524 81.0602 50.9348"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M50.1068 110.794C64.3547 110.794 65.9672 106.215 65.9672 103.244C65.9672 100.273 62.8664 90.3308 50.1068 90.3308C37.3473 90.3308 34.2465 100.274 34.2465 103.244C34.2465 106.214 35.8589 110.794 50.1068 110.794Z"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M73.1614 92.2285C68.4045 92.6031 69.1302 105.039 75.2078 104.358C81.2853 103.677 80.2314 91.6717 73.1614 92.2285Z"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M97.5829 16.4676C99.0361 15.0175 98.0544 11.6868 95.3903 9.02836C92.7261 6.36988 89.3883 5.39031 87.9351 6.84042C86.4819 8.29052 87.4636 11.6212 90.1277 14.2797C92.7919 16.9381 96.1297 17.9177 97.5829 16.4676Z"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M76.6698 22.65C80.1079 17.1621 83.8699 11.883 87.9359 6.84058"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M81.585 27.3829C85.8622 22.6501 97.5826 16.4678 97.5826 16.4678"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M62.2173 14.4056L62.2886 14.4076C64.0061 13.3502 65.3476 11.7814 66.1238 9.92245C62.1006 9.90992 58.1226 10.7686 54.4643 12.4392C57.5844 9.1529 60.4848 5.66566 63.1468 2C63.1468 2 45.7819 6.33196 39.9106 13.8072H39.9567C15.8718 20.3862 1.95605 49.3439 1.95605 66.2368C1.95605 85.3798 37.0684 90.3308 50.1069 90.3308C63.1454 90.3308 98.2577 85.3809 98.2577 66.2368C98.2577 49.8083 85.0934 21.9735 62.2173 14.4056Z"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
    </div>
  );
}
