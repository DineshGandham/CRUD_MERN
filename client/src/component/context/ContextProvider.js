import React, { createContext, useState } from 'react'

export const adddata = createContext("");

export const upddata = createContext("");

export const deldata = createContext("");


const ContextProvider = ({ children }) => {

    const [udata,setUdata] = useState("");
    const [updata,setUpdata] = useState("");
    const [dltdata,setDltdata] = useState("");

  return (
    <adddata.Provider value={{udata,setUdata}}>
    <upddata.Provider value={{updata,setUpdata}}>
    <deldata.Provider value={{dltdata,setDltdata}}>
        {children}
    </deldata.Provider>
    </upddata.Provider>
    </adddata.Provider>
  )
}

export default ContextProvider