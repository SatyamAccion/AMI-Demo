import React, { Component } from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class MeterDetail extends Component {
    render(){
        return (
            <Card>
                <CardSection>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>Meter Overview</Text>
                        <Text>Meter Usage:{this.props.meter.usage}</Text>
                        <Text>Meter ID:{this.props.meter.ID}</Text>
                        <Text>Meter Cost:{this.props.meter.cost}</Text>
                        <Text>Meter Patch:{this.props.meter.usage}</Text>
                    </View>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    }
});

export default MeterDetail;
