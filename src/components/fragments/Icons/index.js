import React from "react";

export const SearchIcon = ({ color }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      className="icon"
      cx="11.1364"
      cy="11.1364"
      r="10.1364"
      stroke="#1F2933"
      strokeWidth="2"
    />
    <path
      className="icon"
      d="M18.5606 18.5606L24.5 24.5"
      stroke="#1F2933"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeartIcon = ({ color }) => (
  <svg
    width="26"
    height="24"
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="icon"
      d="M23.1083 12.7572L23.1082 12.7574L13.8756 22.6067C13.384 23.1311 12.6154 23.1311 12.1238 22.6067L2.89124 12.7574C0.369587 10.0673 0.369587 5.68068 2.89124 2.9906C5.37837 0.337332 9.38237 0.337332 11.8695 2.9906L12.2701 3.41796L12.9997 4.19628L13.7293 3.41796L14.1297 2.9908L14.1299 2.99063C15.332 1.70763 16.9483 1 18.619 1C20.2896 1 21.9059 1.70756 23.108 2.99045L23.1083 2.99074C24.3129 4.27529 25 6.03089 25 7.874C25 9.71721 24.3128 11.4729 23.1083 12.7572Z"
      stroke="#1F2933"
      strokeWidth="2"
    />
  </svg>
);

export const HomeIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"
    />
  </svg>
);
