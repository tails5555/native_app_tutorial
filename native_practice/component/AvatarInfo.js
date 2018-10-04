import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, ButtonGroup } from 'react-native-elements';

const avatarStyle = StyleSheet.create({
    avatarView : {
        alignItems: 'center',
        justifyContent: 'center'
    },
});

class AvatarInfo extends Component {
    constructor(props){
        super(props);
        this.state = { selectIdx : 0 };
    }

    handlePressChange(value){
        this.setState({
            selectIdx : value
        });
    }
    
    render(){
        const buttons = ['Sonic', 'Tails', 'Knuckles'];
        const { selectIdx } = this.state;
        let imageSource;
        switch(selectIdx){
            case 0 :
                imageSource = require('../assets/sonic_profile.png');
                break;
            case 1 :
                imageSource = require('../assets/tails_profile.png');
                break;
            case 2 : 
                imageSource = require('../assets/knuckles_profile.png');
                break;
        }
        return(
            <View style={avatarStyle.avatarView}>
                <Avatar
                    xlarge
                    rounded
                    source={imageSource}
                    activeOpacity={0.7}
                />
                <ButtonGroup
                    onPress={this.handlePressChange.bind(this)}
                    selectedIndex={selectIdx}
                    buttons={buttons}
                    containerStyle={{ height : 30 }}
                    selectedButtonStyle={{ backgroundColor : 'yellow' }}
                />
            </View>
        );
    }
}

export default AvatarInfo;