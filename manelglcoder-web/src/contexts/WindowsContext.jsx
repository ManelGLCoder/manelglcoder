import { createContext, useState, useCallback, useRef } from 'react';

export const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
    const [openWindows, setOpenWindows] = useState({});
    const [zIndices, setZIndices] = useState({});
    const zCounter = useRef(0);

    const bringToFront = useCallback((key) => {
        zCounter.current += 1;
        setZIndices(prevZ => ({ ...prevZ, [key]: zCounter.current }));
    }, []);

    const openWindow = useCallback((key) => {
        setOpenWindows(prev => ({ ...prev, [key]: true }));
        bringToFront(key);
    }, [bringToFront]);

    const closeWindow = useCallback((key) => {
        setOpenWindows(prev => ({ ...prev, [key]: false }));
    }, []);

    const isOpen = useCallback((key) => !!openWindows[key], [openWindows]);

    const getZIndex = useCallback((key) => zIndices[key] || 0, [zIndices]);

    return (
        <WindowContext.Provider value={{
            openWindows, zIndices,
            openWindow, closeWindow, bringToFront,
            isOpen, getZIndex,
        }}>
            {children}
        </WindowContext.Provider>
    );
};
