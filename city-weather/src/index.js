import React from 'react';
import { createStore , combineReducers } from "redux";
//import logger from "redux-logger";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //defau export
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';


const mathReducer  = (state ={
  result :1,
  lastValues : []
}, action) =>{
  switch (action.type){

    case "CLICK":
     console.log("button is clicked ")
     state.result = 2;
     state.lastValues = 10;
     console.log("  " + state.result );
     console.log("  " + state.lastValues );
    break;
    case "":
    break;
  }
  return state;
}


const menuReducer = (state ={

}, action)=>{
  switch (action.type){
    case "menu_one":
       console.log("button menu one clicked ")

       break;

    case "menu_two":
       console.log("button menu two clicked ")

       break;
  }

    return state;
}



const store =  createStore(combineReducers({ climate : mathReducer} , { menu : menuReducer}),
                {}
)

store.subscribe( ()=> {
  //to check if state has changed
  //
})
ReactDOM.render(
   <Provider store={store} ><App />
 </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
