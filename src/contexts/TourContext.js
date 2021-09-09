import React, { createContext, useState } from "react"

const TourContext = createContext()

export const TourProvider = ({children}) => {
    const [thisTour, setThisTour] = useState(null)

    return (
        <TourContext.Provider value={{ thisTour, setThisTour }}>
            {children}
        </TourContext.Provider>
    )
}

export default TourContext