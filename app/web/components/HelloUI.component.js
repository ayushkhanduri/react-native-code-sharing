import React from 'react';

const HelloUI = ({changeValue,inputValue}) => (

    <div>
        <input type="text" value= {inputValue} onChange={(e)=>changeValue(e.target.value)}/>
        <button >Click here!</button>
        {inputValue}
    </div>
);

module.exports=  HelloUI;