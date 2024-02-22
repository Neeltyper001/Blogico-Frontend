import { createContext,useReducer } from "react";
import { LoginReducer } from "./Reducers";

const INITIAL_STATE = {
    user:null,
    isFetching:false,
    error: false
};

export const LoginContext = createContext(INITIAL_STATE)

export const LoginContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(LoginReducer,INITIAL_STATE) 
    return(
        <LoginContext.Provider
            value={
                {
                    user:state.user,
                    isFetching: state.isFetching,
                    error: state.error,
                    dispatch
                }
            }
            >
                {children}
            </LoginContext.Provider>
    )
}