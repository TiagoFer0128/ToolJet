import React from 'react';

const Home = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    data-cy="home-icon"
  >
    <path
      opacity="0.4"
      d="M21 17.9668V10.1503C21 8.93937 20.4604 7.7925 19.5301 7.02652L14.5301 2.90935C13.0577 1.69688 10.9423 1.69689 9.46986 2.90935L4.46986 7.02652C3.53964 7.7925 3 8.93937 3 10.1503V17.9668C3 20.1943 4.79086 22 7 22H17C19.2091 22 21 20.1943 21 17.9668Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.30951 15.7073C7.47128 15.326 7.91154 15.148 8.29286 15.3098C9.83541 15.9642 10.9622 16.2529 12.0385 16.2502C13.1142 16.2475 14.2138 15.9537 15.703 15.3115C16.0833 15.1475 16.5246 15.3229 16.6886 15.7032C16.8527 16.0836 16.6773 16.5249 16.2969 16.6889C14.7225 17.3678 13.4079 17.7468 12.0423 17.7502C10.6774 17.7536 9.33603 17.3817 7.70704 16.6906C7.32572 16.5289 7.14774 16.0886 7.30951 15.7073Z"
      fill={fill}
    />
  </svg>
);

export default Home;
