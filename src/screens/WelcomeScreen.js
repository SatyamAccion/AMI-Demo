import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    {text: 'Welcome to AMI App'},
    {text: 'Welcome screen 1'},
    {text: 'Welcome screen 2'}
];

class WelcomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
      };

    onSlidesComplete = () => {
        console.log('Button Clicked!')
        this.props.navigation.navigate('Login');
    }

    render(){
        return (
            <View style = {{flex:1}}>
                <Slides data = {SLIDE_DATA} onComplete={this.onSlidesComplete}/>
            </View>
        );
    }
}

export default WelcomeScreen;