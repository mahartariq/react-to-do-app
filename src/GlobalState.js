import React,{createContext, useReducer} from 'react'
import AppReducer from './AppReducer';

const info = {basic:[]}
 const Context = createContext(info);

const GlobalProvider = ({children}) =>{
    const[state,dispatch] = useReducer(AppReducer,info)
    
 function EddList (infoo) {
        dispatch({
            type: 'Add',
            payload: infoo
        });
    }
 //   console.log(addList);
    return(
        <Context.Provider value={{basic:state.basic,EddList}}>
            {children}
        </Context.Provider>
    )
}
export default GlobalProvider;
export {Context};
//export {addList};