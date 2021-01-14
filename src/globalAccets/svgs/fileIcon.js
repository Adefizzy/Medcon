import React, {useEffect, useState} from 'react';

export const FileIcon = (props) => {
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
        <svg width="39" height="31" viewBox="0 0 39 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.124023" y="4.01562" width="34.7774" height="26.1787" rx="5.13308" fill="#F6933E" fill-opacity="0.18"/>
        <rect x="3.70435" y="0.935547" width="34.7774" height="26.1787" rx="5.13308" fill="#F6933E"/>
        <rect x="11.3757" y="7.6084" width="19.9458" height="2.05323" rx="1.02662" fill="white"/>
        <rect x="11.3757" y="13.2549" width="19.9458" height="2.05323" rx="1.02662" fill="white" fill-opacity="0.7"/>
        <rect x="11.3757" y="18.3877" width="19.9458" height="2.05323" rx="1.02662" fill="white" fill-opacity="0.5"/>
        </svg>

    );
};