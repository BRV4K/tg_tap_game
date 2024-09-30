import { useEffect, useState } from "react";
import styles from "../navbar.module.css";

export default function Quest({ active }) {
  const [strokeCololor, setStrokeColor] = useState("#B8B8B8");
  useEffect(() => {
    setStrokeColor(active ? "#B28E4C" : "#B8B8B8");
  });

  return (
    <div className={"w-100 p-0 m-0"} style={{maxHeight: '30px'}}>
        <svg
          height={30}
          width={50}
          viewBox="0 0 104 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.3292 65.6529C29.0928 67.8253 11.9765 66.7767 3.94388 44.7529C-4.08869 22.7291 14.0487 6.13771 34.9483 3.17771C58.2202 -0.118236 84.645 2.20393 88.1734 27.2239C90.3564 42.7034 85.7864 49.495 81.024 53.0445"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M41.3293 65.653C38.7345 68.0854 39.2272 99.6622 74.06 96.8157C108.893 93.9692 103.338 67.6005 98.9836 61.7576C94.6294 55.9146 89.8248 50.9705 77.5884 53.5924C65.3519 56.2143 46.2839 61.0086 41.3293 65.653Z"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M46.7747 87.8123C46.7747 87.8123 42.9059 93.7444 30.219 94.8679C17.5322 95.9915 9.87474 89.1747 10.2501 80.635C10.6255 72.0952 14.5726 67.0666 24.5729 65.4233"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M62.274 67.0762C67.0036 71.4959 72.2584 75.9905 72.2584 75.9905C67.3037 76.8894 63.7754 79.811 63.7754 79.811"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M95.0801 71.4209C91.3267 74.7168 85.6213 78.0131 85.6213 78.0131C87.8734 80.0358 89.6 83.182 89.6 83.182"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M50.8634 24.4522L68.1298 20.9314"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.1594 29.0967L37.4257 31.6437"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60.1722 29.0967C60.7727 32.3178 61.2231 35.2394 61.2984 38.2359"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29.3502 30.4524C29.3502 30.4524 29.6183 36.8124 30.1437 40.9324"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.1437 76.5898C30.1437 76.5898 32.2458 78.4625 36.0743 81.2342"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.986 75.8035C34.986 75.8035 31.7954 80.3356 30.8572 81.2345"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5184 77.7886C17.7947 79.1745 21.398 82.2459 21.398 82.2459"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.7599 77.2266C19.6337 79.5863 16.9688 82.9198 16.9688 82.9198"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      {/* <div className={styles.info}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="18" cy="18" rx="18" ry="18" fill="#B13D58" /> 
        </svg>
      </div>
      <div className={styles.text}>
        <p className={"text-white d-flex"}>
          {questCount <= 9 ? `+${questCount}` : `>9`}
          {0}
        </p>
      </div> */}
    </div>
  );
}
