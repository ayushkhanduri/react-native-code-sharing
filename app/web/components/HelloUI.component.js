import React from 'react';

const HelloUI = ({changeValue,inputValue}) => (

    <div>
        <input type="text" value= {inputValue} onChange={changeValue}/>
        {inputValue}
    </div>
);

module.exports=  HelloUI;