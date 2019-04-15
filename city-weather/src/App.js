import React, { Component } from 'react';
import {connect} from "react-redux";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar"

import './App.css';

class App extends Component {


  getWeather(){
    console.log("get weather clicked");

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
           <div className="row">
              <div className="col-4">
                 <h1>Menu Driven Content </h1>
              </div>
           </div>
        </header>
        <div className="width-100">

            {/* <div className="width-20">
              <Sidebar>  </Sidebar>

            </div> */}
            <div className="width-80">
                <Main></Main>

            </div>


        </div>
           {/* <Main buttonClicked={ this.props.buttonClicked }></Main> */}

      </div>
    );
  }
}
const mapStateToProps = (state) =>{

  return {
     climate: state.mathReducer
  }
}

const mapDispatchToProps = (dispatch) =>{

  return {
     //climate: state.mathReducer
     // clickedMethod
     buttonClicked : ()=>{
       dispatch({
         type: "CLICK",

       })
     }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
//export default App;
