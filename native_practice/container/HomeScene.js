import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AvatarInfo from '../component/AvatarInfo';
import MessageView from '../component/MessageView';
import ButtonElement from '../component/ButtonElement';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    verticalButtons: {
        marginTop : 5,
        marginBottom : 5
    }
});

const HomeScene = () => (
    <View style={styles.container}>
        <AvatarInfo />
        <MessageView size="2" message="Hello, React Native!" />
        <MessageView size="4" message="Welcome To The First Application!" />
        <View style={styles.verticalButtons}>
            <ButtonElement color="blue" name="카운터 App" />
            <ButtonElement color="red" name="ToDo App" />
            <ButtonElement color="green" name="REST API App" />
        </View>
    </View>
);

export default HomeScene;