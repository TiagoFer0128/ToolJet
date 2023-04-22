import React from 'react';

const Bug = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 24 24' }) => (
  <svg
    width={width}
    height={width}
    className={className}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1122_124236)">
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12.52C22 13.07 21.56 13.52 21 13.52H18V14.52C18 15.04 17.94 15.55 17.81 16.04L18.03 16.17L20.52 17.66C20.99 17.94 21.14 18.56 20.86 19.03C20.58 19.51 19.96 19.66 19.49 19.38L19 19.09L17.34 18.1L17.29 18.07L16.98 17.88C16.76 18.19 16.52 18.49 16.25 18.76C15.49 19.52 14.55 20.05 13.54 20.31C13.38 20.36 13.21 20.39 13.04 20.42V17.81C13.04 17.26 12.59 16.81 12.04 16.81C11.49 16.81 11.04 17.26 11.04 17.81V20.44C10.85 20.41 10.66 20.36 10.47 20.31C9.45 20.05 8.52 19.52 7.76 18.76C7.49 18.49 7.24 18.19 7.03 17.88L6.71 18.07L5.08 19.05L4.52 19.38C4.04 19.66 3.43 19.51 3.14 19.03C2.86 18.56 3.02 17.94 3.49 17.66L5.98 16.17L6.2 16.04C6.07 15.55 6 15.04 6 14.52V13.52H3C2.45 13.52 2 13.07 2 12.52C2 11.97 2.45 11.52 3 11.52H6V11.46C6.05 10.72 6.21 9.98001 6.48 9.29001L6.05 9.01001L3.46 7.36001C3 7.06001 2.86 6.45001 3.16 5.98001C3.46 5.52001 4.08 5.38001 4.54 5.68001L6.99 7.25001L7.57 7.62001C7.71 7.55001 7.85 7.52001 8 7.52001H16C16.15 7.52001 16.3 7.55001 16.43 7.62001L17.01 7.25001L19.46 5.68001C19.93 5.38001 20.55 5.52001 20.85 5.98001C21.14 6.45001 21.01 7.06001 20.54 7.36001L17.95 9.02001L17.53 9.29001C17.8 9.98001 17.96 10.72 18 11.46V11.52H21C21.56 11.52 22 11.97 22 12.52Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.35 6.41H8.65C9.12 5.01 10.44 4 12 4C13.56 4 14.88 5.01 15.35 6.41Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_1122_124236">
        <rect width="20" height="16.44" fill="white" transform="translate(2 4)" />
      </clipPath>
    </defs>
  </svg>
);

export default Bug;
