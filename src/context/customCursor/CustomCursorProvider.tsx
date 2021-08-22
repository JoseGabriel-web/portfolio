import React, { createContext, useContext, FC, useState } from 'react'

interface defaultValueInterface {
    isHovered: boolean;
    setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue = {
    isHovered: false,
    setIsHovered: () => null
}
const CustomCursorContext = createContext<defaultValueInterface>(defaultValue)

export function useCustomCursor() {
    return useContext(CustomCursorContext)
}

export function useHandleMouseOver() {
    const { setIsHovered } = useContext(CustomCursorContext)
    const handler = () => setIsHovered(true)
    return handler
}
export function useHandleMouseLeave() {
    const { setIsHovered } = useContext(CustomCursorContext)
    const handler = () => setIsHovered(false)
    return handler
}

const CustomCursorProvider: FC = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <CustomCursorContext.Provider value={{ isHovered, setIsHovered }}>
            {children}
        </CustomCursorContext.Provider>
    )
}
export default CustomCursorProvider
