import React from 'react';
import {TextInput} from 'react-native';

const HelloUI = ({changeValue,inputValue}) => (
    <TextInput
    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    onChangeText={changeValue}
    value={inputValue}
    />
);

module.exports = HelloUI;