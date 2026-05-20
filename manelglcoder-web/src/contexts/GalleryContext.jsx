import { createContext, useState } from 'react';

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
    const [visible, setVisible] = useState(false)
    const [content, setContent] = useState(null)
    const [index, setIndex] = useState(0)

    return (
        <GalleryContext.Provider value={{
            visible, setVisible,
            content, setContent,
            index, setIndex
        }}>
            {children}
        </GalleryContext.Provider>
    );
};
