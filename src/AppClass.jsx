import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{



  render(){
    const images = this.props.ImgData;

    return(
      <div>
    
        <h1>Kalvium Gallery</h1>

        <div id='grid'> 
            {images.map((element) => (
            <img src={element.img} id={element.id}/>
          
            ))};
        </div>
     
      </div>
   )
  }


}