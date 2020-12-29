import React, {useEffect, useState} from 'react';

export const AnalyticIcon = (props) => {
    const [logoDimention, setLogoDimention] = useState({width: '16', height: '16'});
 
    useEffect(() => {
       window.addEventListener('load', () => {
           if(window.innerWidth >= 1024){
               let width = window.innerWidth * (10/100);
               let height = window.innerHeight * (10/100);
   
               setLogoDimention({width, height});
           }
       });

       return () => window.removeEventListener('load', () => {
           if(window.innerWidth >= 768){
               let width = window.innerWidth * (10/100);
               let height = window.innerHeight * (10/100);
   
               setLogoDimention({width, height});
           }
       });
   }, []) 

   
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 11H2V14H4V11ZM9 7H7V14H9V7ZM14 2L12 2V14H14V2ZM12 1C11.4477 1 11 1.44772 11 2V14C11 14.5523 11.4477 15 12 15H14C14.5523 15 15 14.5523 15 14V2C15 1.44772 14.5523 1 14 1H12ZM6 7C6 6.44772 6.44772 6 7 6H9C9.55228 6 10 6.44772 10 7V14C10 14.5523 9.55228 15 9 15H7C6.44772 15 6 14.5523 6 14V7ZM1 11C1 10.4477 1.44772 10 2 10H4C4.55228 10 5 10.4477 5 11V14C5 14.5523 4.55228 15 4 15H2C1.44772 15 1 14.5523 1 14V11Z" fill="black"/>
        </mask>
        <g mask="url(#mask0)">
        <rect width="16" height="16" fill="#A0AEC0"/>
        </g>
        </svg>
    );
};