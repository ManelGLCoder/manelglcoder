import { createContext, useState } from 'react';

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
    const [visible, setVisible] = useState(false)
    const [content, setContent] = useState(null)

    return (
        <GalleryContext.Provider value={{
            visible, setVisible,
            content, setContent,
        }}>
            {children}
        </GalleryContext.Provider>
    );
};
