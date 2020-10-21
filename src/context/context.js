import React, { useState } from "react"
import sublinks from "../constants/links"

const GatsbyContext = React.createContext();

// Provider, Consumer

const GatsbyProvider = ({ children }) => {

    return <GatsbyContext.Provider value={"test gatsby provider"}>
        {children}
    </GatsbyContext.Provider>
}

export { GatsbyContext, GatsbyProvider }
