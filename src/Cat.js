import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';


class Cat extends Component {

    constructor(props){
        super(props);
        this.state = {
            cats : []
        }
    }

    componentDidMount(){
        Axios.get('https://aws.random.cat/meow')
        .then(res => {
            const catData = res.data;
            // console.log(catData);
            // console.log(catData.file);
            this.setState({cats:catData});
            // console.log(this.state);
        });
    }
 

    render(){
        return (

<div> 


<img id = "image" src = {this.state.cats.file} alt="description"/>
<br/>
<input type="button" value = "Generate Cat" onClick = {handleClick}/>

</div>

    
        )
    }
}

export default Cat;

function handleClick(e) {
    
    // window.location.reload();
    window.location.reload();
  }