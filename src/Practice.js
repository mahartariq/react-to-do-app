import React, { useContext } from 'react'
import {Context} from './GlobalState';
import './App.css';


export const Practice = () => {
    console.log("Hello");
    const {basic} = useContext(Context)
    console.log(typeof basic);
    console.log(basic);

    return(
        <>
           <ul>
               {basic.map(b =>(<li>
                   <span> </span> {b.p1} <br/></li>))}
           </ul>
        </>
    )
}

//const [state,dispatch] = useReducer(AppReducer,info);