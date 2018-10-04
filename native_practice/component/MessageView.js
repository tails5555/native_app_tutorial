import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const textStyle = StyleSheet.create({
    textView : {
        alignItems: 'center',
        justifyContent: 'center'
    },
});

const MessageView = (props) => {
    const { message, size } = props;
    let text;
    switch(size){
        case "1" : 
            text = <Text h1>{message}</Text>;
            break;
        case "2" :
            text = <Text h2>{message}</Text>;
            break;
        case "3" :
            text = <Text h3>{message}</Text>;
            break;
        default :
            text = <Text h4>{message}</Text>;
            break;
    }
    return (
        <View style={textStyle.textView}>
            {text}
        </View>
    );
}

export default MessageView;