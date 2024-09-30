import { useEffect, useState } from "react";

export default function Heroes({ active }) {
  const [strokeCololor, setStrokeColor] = useState(
    active ? "#B28E4C" : "#B8B8B8"
  );
  useEffect(() => {
    setStrokeColor(active ? "#B28E4C" : "#B8B8B8");
  });

  return (
    <div className={"d-flex align-items-center justify-content-center w-100"}>
      <div className={"p-0 m-0"}>
        <svg
          height={30}
          width={50}
          viewBox="0 0 104 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3425 75.3481L29.0622 77.4648L29.4903 51.2585L19.3039 53.2513L19.3425 75.3481Z"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M52.105 88.3362L43.8272 83.9292L43.424 44.887L52.105 40.0784L60.7861 44.887L60.3829 83.9292L52.105 88.3362Z"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M84.906 53.2513L74.7195 51.2585L75.1476 77.4648L84.8673 75.3481L84.906 53.2513Z"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M52.1051 27.6558L6.38112 45.28L2 49.3178L2.48679 78.183L5.06405 82.5489L52.1072 101.184L99.1501 82.5489L101.727 78.183L102.214 49.3178L97.8312 45.28L52.1051 27.6558Z"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M52.1051 119.489L10.1903 102.039L8.77795 91.833L52.1051 106.463L95.4322 91.833L94.0196 102.039L52.1051 119.489Z"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M52.105 21.1635L15.0636 35.5578C15.3171 33.3198 15.9924 31.1499 17.054 29.1623C19.4322 24.9194 22.793 21.3057 26.8558 18.6228C30.9187 15.9398 35.5657 14.2656 40.409 13.7397L52.105 2L63.8035 13.7409C68.6468 14.2668 73.2937 15.9411 77.3565 18.624C81.4193 21.3069 84.78 24.9206 87.1583 29.1635C88.2198 31.1511 88.8951 33.321 89.1486 35.559L52.105 21.1635Z"
            stroke={strokeCololor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
