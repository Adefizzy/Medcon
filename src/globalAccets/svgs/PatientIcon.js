import React, {useEffect, useState} from 'react';

export const PatientIcon = (props) => {
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
        <svg width='16' height='16' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 14C15 14 16 14 16 13C16 12 15 9 11 9C7 9 6 12 6 13C6 14 7 14 7 14H15ZM7.02235 13H14.9777C14.9811 12.9996 14.986 12.999 14.9919 12.998C14.9946 12.9975 14.9973 12.997 15 12.9965C14.9985 12.7325 14.8331 11.9669 14.2407 11.2758C13.6867 10.6294 12.7173 10 11 10C9.28269 10 8.31334 10.6294 7.75926 11.2758C7.16687 11.9669 7.00146 12.7325 7.00001 12.9965C7.00266 12.997 7.00538 12.9975 7.00815 12.998C7.01403 12.999 7.01888 12.9996 7.02235 13Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 7C12.1046 7 13 6.10457 13 5C13 3.89543 12.1046 3 11 3C9.89543 3 9 3.89543 9 5C9 6.10457 9.89543 7 11 7ZM14 5C14 6.65685 12.6569 8 11 8C9.34315 8 8 6.65685 8 5C8 3.34315 9.34315 2 11 2C12.6569 2 14 3.34315 14 5Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.93593 9.27996C6.56813 9.16232 6.15954 9.07679 5.70628 9.03306C5.48195 9.01141 5.24668 9 5 9C1 9 0 12 0 13C0 13.6667 0.333333 14 1 14H5.21636C5.07556 13.7159 5 13.3791 5 13C5 11.9897 5.37724 10.958 6.08982 10.0962C6.33327 9.80174 6.61587 9.52713 6.93593 9.27996ZM4.92004 10.0005C3.25249 10.0197 2.30468 10.6395 1.75926 11.2758C1.16424 11.97 1 12.7393 1 13H4C4 11.9547 4.32256 10.9136 4.92004 10.0005Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 5.5C1.5 3.84315 2.84315 2.5 4.5 2.5C6.15685 2.5 7.5 3.84315 7.5 5.5C7.5 7.15685 6.15685 8.5 4.5 8.5C2.84315 8.5 1.5 7.15685 1.5 5.5ZM4.5 3.5C3.39543 3.5 2.5 4.39543 2.5 5.5C2.5 6.60457 3.39543 7.5 4.5 7.5C5.60457 7.5 6.5 6.60457 6.5 5.5C6.5 4.39543 5.60457 3.5 4.5 3.5Z" fill="black"/>
        </mask>
        <g mask="url(#mask0)">
            <rect width="16" height="16" fill="#A0AEC0"/>
        </g>
        </svg>

    );
};