import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';

class Login extends Component {
    static navigationOptions = {
        header:null
      };
    login = () => {
        this.props.navigation.navigate('Main');
    }
    render(){
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../image/aww-logo.gif')} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                    style={styles.input}
                    placeholderTextColor = 'rgba(255, 255, 255, 0.8)'
                    returnKeyType='next'
                    onSubmitEditing={()=> this.passwordInput.focus()}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    placeholder='Customer ID or email'/>
                    <TextInput 
                    style={styles.input}
                    placeholderTextColor = 'rgba(255, 255, 255, 0.8)'
                    returnKeyType='go'
                    secureTextEntry
                    ref={(input)=>this.passwordInput=input}
                    placeholder='Password'/>
                    <Button title="login" 
                        buttonStyle={styles.buttonStyle} 
                        rounded={true} 
                        onPress = {this.login}/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#3498db'
    },
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
        flexGrow:1
    },
    input:{
        height:40,
        backgroundColor:'rgba(255, 255, 255, 0.2)',
        color:'#FFF',
        marginBottom:20,
        borderRadius: 20
    },
    inputContainer:{
        padding:20
    },
    buttonStyle:{
        marginTop:15,
        backgroundColor:'#3CAEDF'
    }
});

export default Login;