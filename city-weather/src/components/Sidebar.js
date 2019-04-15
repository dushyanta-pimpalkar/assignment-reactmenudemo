import React from "react";
import {connect} from "react-redux";


export class Sidebar extends React.Component{

  constructor(props){
    super(props);

  //  this.menuOneClicked = this.menuOneClicked.bind(this);
  //  this.menuTwoClicked = this.menuTwoClicked.bind(this);

  }


  menuOneClicked=() =>{
    console.log(" menu 1 clicked");

  }

  menuTwoClicked=() =>{
    console.log(" menu 2 clicked");
  }


  render(){
    return(

      <div className="">
         <h1>Menu</h1>
         <div>
           <div className="btn btn-disable"
             // onClick={ ()=> this.props.menuOneClicked() }>Menu 1
              onClick={ ()=> this.menuOneClicked.bind(this) }>Menu 1

           </div>

         </div>
         <div>
             <div className="btn btn-disable"
               // onClick={ ()=> this.props.meunTwoClicked() }>Menu 2
               onClick={ ()=> this.meunTwoClicked.bind(this) }>Menu 2

             </div>
         </div>
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
     menuOneClicked : ()=>{
       dispatch({
         type: "menu_one",

       })},

    menuTwoClicked : ()=>{
       dispatch({
         type: "menu_two",
       })}



  }

  }
