import React, { Component } from 'react';
import Dog from './Dog';
import Cat from './Cat';
import './App.css';



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}



class Random  extends Component {
  

  constructor(props){
    super(props);
    this.handleClick =  this.handleClick.bind(this);
    this.state = {
      random : 0 
  }
    }

   
      
  handleClick(e) {
    let randomNum = getRandomInt(2);
    console.log(randomNum)
    if(randomNum === 0){
      this.setState()
      console.log("0")
      return(
      this.CatApp()
      )
    } else if(randomNum === 1){
      console.log("1")
      this.setState()
      return(
      this.DogApp()
      )
    }
  }

CatApp() {
 
  return (
    <div className="App">
<input type="button" value = "Generate Pug" onClick = {this.handleClick}/>

      <Cat />
    </div>
  );
  
}

DogApp() {
  
  return (
    <div className="App">
<input type="button" value = "Generate Pug" onClick = {this.handleClick}/>
      <Dog />
    </div>
  
  );

}
render(){
  return (
    <div>
    <input type="button" value = "Randomize" onClick = {this.handleClick}/>
    <Dog />
    <Cat />
    </div>
  )
}
}

    

export default Random;



