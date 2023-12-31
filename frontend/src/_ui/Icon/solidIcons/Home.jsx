import React from 'react';

const Home = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    data-cy="home-page-icon"
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.5 10.9394V18.7559C21.5 20.9834 19.7091 22.7891 17.5 22.7891H7.5C5.29086 22.7891 3.5 20.9834 3.5 18.7559V10.9394C3.5 9.72843 4.03964 8.58156 4.96986 7.81559L9.96986 3.69841C11.4423 2.48595 13.5577 2.48595 15.0301 3.69841L20.0301 7.81559C20.9604 8.58156 21.5 9.72843 21.5 10.9394ZM8.79286 16.0986C8.41154 15.9368 7.97128 16.1148 7.80951 16.4961C7.64774 16.8774 7.82572 17.3177 8.20704 17.4794C9.83603 18.1705 11.1774 18.5424 12.5423 18.539C13.9079 18.5356 15.2225 18.1566 16.7969 17.4777C17.1773 17.3137 17.3527 16.8724 17.1886 16.492C17.0246 16.1117 16.5833 15.9363 16.203 16.1003C14.7138 16.7425 13.6142 17.0363 12.5385 17.039C11.4622 17.0417 10.3354 16.753 8.79286 16.0986Z"
      fill={fill}
    />
  </svg>
);

export default Home;
