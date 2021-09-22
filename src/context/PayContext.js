import React, { createContext, useState } from 'react'

const PayContext = createContext();

export const PayProvider = ({ children }) => {
    const [childs, setChilds] = useState(0);
    const [adults, setAdults] = useState(1);
    const [rooms, setRooms] = useState(1);
    const [total, setTotal] = useState(0);
    const [tour, setTour] = useState([]);
    const [payerId, setPayerId] = useState(0)
    return (
        <PayContext.Provider value={{
            childs, adults, rooms, total, tour, payerId,
            setChilds, setAdults, setRooms, setTotal, setTour, setPayerId
        }}>
            {children}
        </PayContext.Provider>
    )
}

export default PayContext;