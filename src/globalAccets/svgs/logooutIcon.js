import React, {useEffect, useState} from 'react';

export const LogOutIcon = (props) => {
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
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 13C6 13.2761 6.22386 13.5 6.5 13.5L14.5 13.5C14.7761 13.5 15 13.2761 15 13L15 4C15 3.72386 14.7761 3.5 14.5 3.5L6.5 3.5C6.22386 3.5 6 3.72386 6 4L6 6C6 6.27614 5.77614 6.5 5.5 6.5C5.22386 6.5 5 6.27614 5 6L5 4C5 3.17157 5.67157 2.5 6.5 2.5L14.5 2.5C15.3284 2.5 16 3.17157 16 4L16 13C16 13.8284 15.3284 14.5 14.5 14.5L6.5 14.5C5.67157 14.5 5 13.8284 5 13L5 11C5 10.7239 5.22386 10.5 5.5 10.5C5.77614 10.5 6 10.7239 6 11L6 13Z" fill="#2D3743"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.146446 8.85355C-0.0488157 8.65829 -0.0488157 8.34171 0.146446 8.14645L3.14645 5.14645C3.34171 4.95118 3.65829 4.95118 3.85355 5.14645C4.04882 5.34171 4.04882 5.65829 3.85355 5.85355L1.70711 8L10.5 8C10.7761 8 11 8.22386 11 8.5C11 8.77614 10.7761 9 10.5 9L1.70711 9L3.85355 11.1464C4.04882 11.3417 4.04882 11.6583 3.85355 11.8536C3.65829 12.0488 3.34171 12.0488 3.14645 11.8536L0.146446 8.85355Z" fill="#2D3743"/>
            </mask>
            <g mask="url(#mask0)">
                <rect y="0.5" width="16" height="16" fill="#2D3743"/>
            </g>
        </svg>
    );
};