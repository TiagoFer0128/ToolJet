import React from 'react';

const ArrowLeft = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303L9.46967 16.5303C9.76256 16.8232 10.2374 16.8232 10.5303 16.5303C10.8232 16.2374 10.8232 15.7626 10.5303 15.4697L7.81066 12.75L18 12.75C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25L7.81066 11.25L10.5303 8.53033C10.8232 8.23744 10.8232 7.76256 10.5303 7.46967C10.2374 7.17678 9.76256 7.17678 9.46967 7.46967L5.46967 11.4697Z"
      fill={fill}
    />
    <path
      d="M5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L9.46967 7.46967C9.76256 7.17678 10.2374 7.17678 10.5303 7.46967C10.8232 7.76256 10.8232 8.23744 10.5303 8.53033L7.02925 11.9975L10.5303 15.4697C10.8232 15.7626 10.8232 16.2374 10.5303 16.5303C10.2374 16.8232 9.76256 16.8232 9.46967 16.5303L5.46967 12.5303Z"
      fill={fill}
    />
  </svg>
);

export default ArrowLeft;
