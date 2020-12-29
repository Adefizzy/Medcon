import React, {useEffect, useState} from 'react';

export const HomeIcon = (props) => {
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

   /* #2D3743 */
    return (
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.5V5.99999H3V12.5C3 12.7761 3.22386 13 3.5 13H12.5C12.7761 13 13 12.7761 13 12.5V5.99999H14V12.5C14 13.3284 13.3284 14 12.5 14H3.5C2.67157 14 2 13.3284 2 12.5Z" fill="#2D3743"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 1.49999V4.99999L11 2.99999V1.49999C11 1.22384 11.2239 0.999986 11.5 0.999986H12.5C12.7761 0.999986 13 1.22384 13 1.49999Z" fill="#2D3743"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 0.499986C7.68342 0.10946 8.31658 0.109462 8.70711 0.499986L15.3536 7.14643C15.5488 7.34169 15.5488 7.65828 15.3536 7.85354C15.1583 8.0488 14.8417 8.0488 14.6464 7.85354L8 1.20709L1.35355 7.85354C1.15829 8.0488 0.841709 8.0488 0.646447 7.85354C0.451184 7.65828 0.451184 7.34169 0.646447 7.14643L7.29289 0.499986Z" fill="#2D3743"/>
        </svg>

    );
};