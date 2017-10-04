import React from 'react';

let RequireWrapper = require('./wrappers/RequireWrapper').default;

let HelloUI = RequireWrapper('HelloUI');
//let HelloUI = require(Re);

export default class HelloComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            someVar: "Hello dsdrld!"
        };
    }
    render(){
        return (
            <HelloUI inputValue = {this.state.someVar} changeValue = {this.valueChange.bind(this)}/>
        );
    }

    valueChange(e){
        console.log(global.mode);
        this.setState({
            someVar: e
        })

    }
}