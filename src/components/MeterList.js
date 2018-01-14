import React, { Component } from 'react';
import { ScrollView, Text, View, Dimensions, StyleSheet } from 'react-native';
import MeterDetail from './MeterDetail';

const SCREEN_WIDTH = Dimensions.get('window').width;

class MeterList extends Component {
    constructor(){
        super();
        this.state = {
            "meters":[
                {
                    usage:"100 galon",
                    ID:"101",
                    cost:"78$",
                    patch:"11ss11"
                },
                {
                    usage:"101 galon",
                    ID:"102",
                    cost:"178$",
                    patch:"11ss11oo"
                },
                {
                    usage:"102 galon",
                    ID:"103",
                    cost:"2378$",
                    patch:"22ss1133"
                }
            ]};
    }
    renderMeters(){
        return (
            this.state.meters.map((meter) => {
                return (
                    <View key={meter.ID} style={styles.slide}>
                        <MeterDetail meter={meter}/>
                    </View>
                );
            })
        );
    }
    render(){
        return (
            <ScrollView horizontal pagingEnabled>
                {this.renderMeters()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    slide:{
        flex:1,
        width:SCREEN_WIDTH
    }
});

export default MeterList;