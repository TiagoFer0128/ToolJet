import React from 'react';

const Remove = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25', style }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.29289 6.29289C5.68342 5.90237 6.31658 5.90237 6.70711 6.29289L12 11.5858L17.2929 6.29289C17.6834 5.90237 18.3166 5.90237 18.7071 6.29289C19.0976 6.68342 19.0976 7.31658 18.7071 7.70711L13.4142 13L18.7071 18.2929C19.0976 18.6834 19.0976 19.3166 18.7071 19.7071C18.3166 20.0976 17.6834 20.0976 17.2929 19.7071L12 14.4142L6.70711 19.7071C6.31658 20.0976 5.68342 20.0976 5.29289 19.7071C4.90237 19.3166 4.90237 18.6834 5.29289 18.2929L10.5858 13L5.29289 7.70711C4.90237 7.31658 4.90237 6.68342 5.29289 6.29289Z"
      fill={fill}
    />
  </svg>
);

export default Remove;
