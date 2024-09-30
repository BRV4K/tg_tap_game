import { useEffect, useState } from "react";
import styles from "../navbar.module.css";

export default function Upgrade({ active, disable }) {
  const [strokeCololor, setStrokeColor] = useState("#B8B8B8");
  useEffect(() => {
    if (disable) {
        setStrokeColor("#B8B8B8") 
        return
    }
    setStrokeColor(active ? "#B28E4C" : "#B8B8B8");
  });

  return (
      <div className={"d-flex align-items-center justify-content-center"} style={{maxHeight: '30px'}}>
        <div className={"p-0 m-0"}>
          <svg
            height={30}
            viewBox="0 0 104 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M63.174 80.8604L57.9875 99.3347H73.35L64.487 128.291L96.8862 87.3461H81.458L100.694 54.361C101.503 52.9669 102.003 51.4158 102.16 49.8125C102.318 48.2092 102.129 46.5908 101.606 45.0666C101.083 43.5424 100.239 42.1477 99.1306 40.9766C98.022 39.8055 96.6746 38.8853 95.1792 38.2779L6.54922 2.24653C6.05952 2.04541 5.52833 1.96549 5.00097 2.01361C4.47362 2.06172 3.96576 2.23643 3.52073 2.52283C3.0757 2.80923 2.70671 3.19881 2.44525 3.65834C2.1838 4.11786 2.03764 4.63369 2.01924 5.16179C1.49402 23.9309 11.867 31.1699 15.3794 32.4474C18.8918 33.7248 59.7272 48.8253 59.7272 48.8253L12.0968 38.3434C11.8139 38.2773 11.5184 38.2873 11.2406 38.3724C10.9628 38.4575 10.7127 38.6147 10.5157 38.8279C10.3187 39.0411 10.182 39.3027 10.1195 39.5859C10.0571 39.8691 10.071 40.1637 10.1601 40.4398C12.2281 46.9909 18.4979 63.0085 29.8556 63.3688L59.7929 64.3188L28.4441 68.9046C28.1786 68.9399 27.9258 69.0396 27.7078 69.1949C27.4898 69.3502 27.3132 69.5564 27.1934 69.7955C27.0736 70.0346 27.0143 70.2993 27.0206 70.5665C27.0269 70.8337 27.0986 71.0953 27.2296 71.3285C30.1511 76.3729 38.4889 88.0667 50.9955 84.7911L63.174 80.8604Z"
              stroke={strokeCololor}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M59.752 88.4766C62.4904 88.4766 64.7103 86.3717 64.7103 83.7753C64.7103 81.1788 62.4904 79.074 59.752 79.074C57.0136 79.074 54.7936 81.1788 54.7936 83.7753C54.7936 86.3717 57.0136 88.4766 59.752 88.4766Z"
              stroke={strokeCololor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M59.7521 83.7751V93.1772"
              stroke={strokeCololor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M89.5042 77.7008V104.931C89.5042 108.404 86.5555 111.2 82.8924 111.2H36.6118C32.9487 111.2 30 108.404 30 104.931V70.4529C30 66.9797 32.9487 64.1838 36.6118 64.1838H75.2482"
              stroke={strokeCololor}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M39.9789 46.8065C39.9789 36.4201 48.8594 28 59.8136 28C70.7678 28 79.6483 36.4201 79.6483 46.8065"
              stroke={strokeCololor}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M79.6476 46.8064V53.0736"
              stroke={strokeCololor}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M39.9788 45.2393V53.073"
              stroke={strokeCololor}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={styles.star1}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4215 13.2239V1.7522"
              stroke={strokeCololor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.4214 13.2239L5.11584 21.8123"
              stroke={strokeCololor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.84308 6.92383L12.4216 13.2238"
              stroke={strokeCololor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.4215 13.2239L19.727 21.8123"
              stroke={strokeCololor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23 6.92383L12.4215 13.2238"
              stroke={strokeCololor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={styles.star2}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4215 13.2239V1.7522"
              stroke={strokeCololor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.4214 13.2239L5.11584 21.8123"
              stroke={strokeCololor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.84308 6.92383L12.4216 13.2238"
              stroke={strokeCololor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.4215 13.2239L19.727 21.8123"
              stroke={strokeCololor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23 6.92383L12.4215 13.2238"
              stroke={strokeCololor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
  );
}
