import { useEffect, useState } from "react";

export default function Game({active}) {
  const [strokeCololor, setStrokeColor] = useState(
    active ? "#B28E4C" : "#B8B8B8"
  );
  useEffect(() => {
    setStrokeColor(active ? "#B28E4C" : "#B8B8B8");
  });

  return (
    <svg
      height={85}
      viewBox="0 0 221 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"p-0 m-0"}
    >
      <path
        d="M110.092 215.73C168.685 215.73 216.183 168.333 216.183 109.865C216.183 51.3974 168.685 4 110.092 4C51.4989 4 4 51.3974 4 109.865C4 168.333 51.4989 215.73 110.092 215.73Z"
        fill="#171027"
        fillOpacity="1"
        stroke={"#B28E4C"}
        strokeWidth="8"
        strokeMiterlimit="10"
      />
      <path
        d="M188.858 109.865C188.858 126.636 183.599 142.174 174.625 154.938V175.731H153.09C140.727 183.785 125.963 188.463 110.099 188.463C94.2348 188.463 79.4636 183.785 67.108 175.731H43.6086V152.013C35.8388 139.834 31.3401 125.379 31.3401 109.873C31.3401 94.3665 35.8388 79.9114 43.6086 67.7323V44.9945H65.6427C78.2914 36.3404 93.6091 31.2822 110.107 31.2822C126.605 31.2822 141.915 36.3404 154.571 44.9945H174.641V64.8081C183.615 77.572 188.874 93.1099 188.874 109.881L188.858 109.865Z"
        stroke="#B28E4C"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M111.062 166.313C124.013 155.831 143.756 145.894 143.756 103.533V77.1114C132.244 77.1114 122.2 71.7122 110.947 67.1172C100.326 71.5112 89.0445 77.1689 76.8415 77.054V103.677C77.302 144.056 96.1533 156.261 111.062 166.313Z"
        stroke={strokeCololor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M111.062 85.2676C104.571 87.5598 97.886 89.2612 91.088 90.3509C89.7353 114.102 98.1968 130.558 111.062 143.165C124.157 130.414 129.971 113.183 129.769 91.2699C123.302 90.0732 117.016 88.056 111.062 85.2676Z"
        stroke={strokeCololor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M137.31 138.283C148.419 146.899 154.377 156.807 160.334 166.198C149.912 161.324 140.598 154.375 132.964 145.779"
        stroke={strokeCololor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M83.3747 137.335C72.0351 147.1 64.0053 156.29 60.1199 165.566C69.7902 159.823 78.3668 155.113 87.2601 144.515"
        stroke={strokeCololor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60.8395 61L76.9567 77.054"
        stroke={strokeCololor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M74.1937 74.2968L83.605 66.2842"
        stroke={strokeCololor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M66.1639 83.688L74.1937 74.2969"
        stroke={strokeCololor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M159.96 61.0288L143.872 77.1115"
        stroke={strokeCololor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M146.635 74.3545L154.664 83.7456"
        stroke={strokeCololor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M137.223 66.313L146.634 74.3543"
        stroke={strokeCololor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
