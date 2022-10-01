import React, { useContext, useEffect, useReducer } from "react";

import ProductData from "./Products/Resourcess/ProductData";
import reducer from "./reducer"

const AppContext = React.createContext()
const inititalState = {
    loading: false,
    cart:ProductData,
    total:0,
    amount:0
}
const AppProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,inititalState)

   
    const increase = (id) => {
        dispatch({type: "INCREASE", payload:id})
    }
   
   
    return(
        <AppContext.Provider 
            value={
                {
                ...state,
                               increase,
                // decrease
                // functions,
                }
            }
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}