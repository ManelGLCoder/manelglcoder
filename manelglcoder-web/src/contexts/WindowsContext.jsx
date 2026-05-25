import { createContext, useState } from 'react';

export const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
    const [currWindow, setCurrWindow] = useState('none')

    return (
        <WindowContext.Provider value={{
            currWindow, setCurrWindow,
        }}>
            {children}
        </WindowContext.Provider>
    );
};
