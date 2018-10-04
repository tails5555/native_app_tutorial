import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

  
class Hello extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Hello, React Native!</Text>
            </View>
        );
    } 
}
export default Hello;