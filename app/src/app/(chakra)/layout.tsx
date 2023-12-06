"use client"
import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
function GrouplayoutProvider({children}:{children : React.ReactNode}){
    return <ChakraProvider>
        {children}
    </ChakraProvider>
}

export default function GroupLayout({children}:{children : React.ReactNode}){
    return (
        <GrouplayoutProvider>
            {children}
        </GrouplayoutProvider>
    )
    
}