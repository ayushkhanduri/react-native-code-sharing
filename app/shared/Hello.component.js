import React from 'react';

//import HelloUI from '../web/components/HelloUI.component';


let HelloUI = require(`../native/components/HelloUI.component`);

console.log(HelloUI);

export default class HelloComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            someVar: "Hello World !"
        };
    }
    render(){
        return (
            <HelloUI changeValue={this.changeState.bind(this)} inputValue = {this.state.someVar}/>
        );
    }

    changeState(e){
        this.setState({
            someVar:e.target.value 
        })
    }
}