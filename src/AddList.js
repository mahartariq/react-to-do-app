import React,{useState,useContext} from 'react';
import {Context} from './GlobalState';
//import GlobalProvider from './GlobalState';
import './App.css';

export const AddList = () => {
    
    const [p1,setp1] = useState("");
   // const[p2,setp2] = useState("");

    const {EddList} = useContext(Context);
  //  console.log(Context);
    console.log("addList function ",EddList);

    const onSubmit = (e) => {
        e.preventDefault();

        const infoo = {
            id: new Date().getTime(),
            p1
        }
        EddList(infoo)
        setp1("")
    }

    return (
        <div>
            <h2>simple-todo-app</h2>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="put your task" value={p1} onChange={(e)=>setp1(e.target.value)} required="required"></input>
              <span></span><button>Submit</button>
            </form>
        </div>
    )
}
