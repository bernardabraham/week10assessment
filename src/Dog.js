import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';


function handleClick(e) {
    
    window.location.reload();
    
  }

class Dog extends Component {

    constructor(props){
        super(props);
        this.state = {
            dogs : []
        }
    }

    componentDidMount(){
        Axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res => {
            const dogData = res.data;
            // console.log(dogData);
            // console.log(dogData.message);
            this.setState({dogs:dogData});
            // console.log(this.state);
        });
    }
 

    render(){
        return (

<div> 
<div>
    <h1>Doggo Roulette</h1>
</div>

<img id = "image" src = {this.state.dogs.message} alt="description" />
<br/>
<input type="button" value = "Generate Pug" onClick = {handleClick}/>

</div>

    
        )
    }
}

export default Dog;

