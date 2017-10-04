import React from 'react';
import {View,Button,Text, TextInput} from 'react-native';

const HelloUI = ({inputValue,changeValue}) => (
    <View>
        <Button title="Learn More" color="#841584"></Button>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={inputValue} placeholder="hello" onChangeText = {changeValue}
        />
        <Text>{inputValue}</Text>
    </View>
);

export default HelloUI;