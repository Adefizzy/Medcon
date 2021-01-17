import {useContext, createContext} from 'react';

export const ScreenNameContext = createContext({});

export const useScreenNameContext = () => useContext(ScreenNameContext)