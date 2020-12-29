import React, {useEffect, useState} from 'react';

export const ScheduleIcon = (props) => {
    const [logoDimention, setLogoDimention] = useState({width: '16', height: '17'});
 
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
        <svg width={logoDimention.width} height={logoDimention.height} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="17">
            <g clip-path="url(#clip0)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 3.39543 2.89543 2.5 4 2.5H10C11.1046 2.5 12 3.39543 12 4.5V16C12 16.1844 11.8985 16.3538 11.7359 16.4408C11.5733 16.5278 11.3761 16.5183 11.2226 16.416L7 13.6009L2.77735 16.416C2.62392 16.5183 2.42665 16.5278 2.26407 16.4408C2.10149 16.3538 2 16.1844 2 16V4.5ZM4 3.5C3.44772 3.5 3 3.94772 3 4.5V15.0657L6.72265 12.584C6.8906 12.472 7.1094 12.472 7.27735 12.584L11 15.0657V4.5C11 3.94772 10.5523 3.5 10 3.5H4Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.26758 1.5H12C12.069 1.5 12.1365 1.507 12.2015 1.52032C12.6572 1.61356 13 2.01675 13 2.5V14.2676L13.2227 14.416C13.3761 14.5183 13.5734 14.5278 13.7359 14.4408C13.8985 14.3538 14 14.1844 14 14V2.5C14 1.39543 13.1046 0.5 12 0.5H6.00001C5.25973 0.5 4.61339 0.902199 4.26758 1.5Z" fill="black"/>
            </g>
            </mask>
            <g mask="url(#mask0)">
            <rect y="0.5" width="16" height="16" fill="#A0AEC0"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
            </defs>
        </svg>
    );
};