import React from 'react';

const Link = ({ fill = '#D7DBDF', width = 24, className = '', viewBox = '0 0 49 48' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill="#3E63DD"
      d="M40.974 7.915a4.1 4.1 0 00-5.799 0L33.341 9.75a2.357 2.357 0 11-3.333-3.333l1.834-1.834a8.814 8.814 0 1112.465 12.465l-1.834 1.834a2.357 2.357 0 11-3.334-3.334l1.835-1.834a4.1 4.1 0 000-5.798z"
    ></path>
    <path
      fill="#3E63DD"
      d="M36.782 12.107c.92.92.92 2.413 0 3.333l-4.857 4.857a2.357 2.357 0 01-3.334-3.333l4.858-4.857c.92-.92 2.413-.92 3.333 0z"
    ></path>
    <path
      fill="#3E63DD"
      d="M26.352 16.738a2.357 2.357 0 00-3.333-3.333l-1.834 1.834A8.814 8.814 0 1033.65 27.704l1.834-1.834a2.357 2.357 0 00-3.334-3.333l-1.833 1.834a4.1 4.1 0 11-5.799-5.799l1.834-1.834z"
    ></path>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M18.407 30.482c4.976 4.976 13.044 4.976 18.02 0l1.033-1.032v11.836A4.714 4.714 0 0132.746 46H7.603a4.714 4.714 0 01-4.714-4.714V16.143a4.714 4.714 0 014.714-4.715h11.836l-1.032 1.033c-4.977 4.976-4.977 13.045 0 18.02z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Link;
