import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const buttonStyle = StyleSheet.create({
    marginButton : {
        marginTop: 5,
        marginBottom: 5
    }
});

const ButtonElement = (props) => {
    const { color, name } = props;
    return (
        <View style={ buttonStyle.marginButton }>
            <Button raised backgroundColor={color} color="#fff" title={name} />
        </View>
    );
}

export default ButtonElement;