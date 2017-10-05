import React from 'react';

import HelloUI from '../native/components/HelloUI.component.js'


export default class HelloComponent extends React.Component{
    constructor(){
        super();
        console.log(global);
        this.state = {
            someVar: "Hello dsasdasddrld!"
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