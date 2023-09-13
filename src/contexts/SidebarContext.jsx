import React, {createContext, useState} from 'react'

export const SidebarContext = createContext()

export const SidebarProvider = ({children}) => {
    const [mobile, setMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const clickMobile = () =>{
        setMobile(!mobile)
    }

    const handleClose = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <SidebarContext.Provider value={{mobile, clickMobile, handleClose, isOpen}}>
        {children}
    </SidebarContext.Provider>
  )
}
