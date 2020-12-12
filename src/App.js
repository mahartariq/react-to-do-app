import React from 'react';
import { AddList } from './AddList';
import GlobalProvider from './GlobalState';
import { Practice } from './Practice';
import './App.css';

function App() {


  
  //const {state,set} = useState(pname);
  //console.log(state);
  return (
    <div className="container">

    <GlobalProvider>
      <AddList/>
      <Practice />
       
      </GlobalProvider>
      </div>
  );
}

export default App;
