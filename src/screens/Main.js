import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MeterList from '../components/MeterList';

class Main extends Component {
    static navigationOptions = {
        title: 'American Waters!',
      };
    render(){
        return (
            <View style={styles.container}>
                <View>
                    <MeterList />
                </View>
                <View>
                    <Text>Icons</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#3498db'
    }
});

export default Main;