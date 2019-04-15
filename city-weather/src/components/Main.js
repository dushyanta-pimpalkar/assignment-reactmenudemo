import React from "react";
import { Content_One } from "./Content_One";
import { Content_Two } from "./Content_Two";


export class Main extends React.Component{
  constructor(props){
    super(props);

  this.state = {
    showContent: false,
  }

  }


  menuOneClicked(){
    console.log(" in one clicked")
    this.setState({
       showContent: false
    })
  }

  meunTwoClicked(){
    console.log(" in two clicked")
    this.setState({
       showContent: true
    })
  }




  render(){


    var content ;
    if(this.state.showContent == false){
      content = <div>
                    <h1> Content 1 </h1>
                </div>
    }

    if(this.state.showContent == true) {
      content = <div>
                    <h2> Content 2 </h2>
                </div>

    }

    return(

      // <div className="main-div">
      //    {/* <h1>Content</h1> */}
      //    {/* <div className="search-container">
      //      <input type="text" className="search-input" placeholder="Victoria, CA" />
      //
      //    </div> */}
      //    {/* <div>
      //        <div className="btn btn-disable"
      //          onClick={ ()=> this.props.buttonClicked() }>Get Weather
      //
      //        </div>
      //    </div> */}
      // </div>

      <div>
          <div className="width-100">
              <div className="width-20">
                <div className="">
                   <h1>Menu</h1>
                   <div>
                     <div className="btn btn-disable"
                       // onClick={ ()=> this.props.menuOneClicked() }>Menu 1
                        onClick={ this.menuOneClicked.bind(this) }>Menu 1

                     </div>

                   </div>
                   <div>
                       <div className="btn btn-disable"

                         onClick={ this.meunTwoClicked.bind(this) }>Menu 2

                       </div>
                   </div>
                </div>

              </div>
              <div className="main-div">

                   { content }

              </div>
          </div>

      </div>

    );

  }
}
