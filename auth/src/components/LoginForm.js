/* eslint-disable max-len */
import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, GetInput, Spinner } from './common';


class LoginForm extends Component {

    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        
        //this line returns a promise, which is asynchronous, just like http request
        firebase.auth().signInWithEmailAndPassword(email, password) //to authenticate user. In next line, we're handling the promise which this statement returns
        .then(this.onLoginSuccess.bind(this))
        .catch(() => { //in this fat arrow function. the sign in failed so now we'll make an account for the user
            firebase.auth().createUserWithEmailAndPassword(email, password) // to register new used
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        }); 

        /* NOTES
        1. firebase.auth()... returns a promise, that is is returns true or false based 
        on whether the method was carried out successfully or not
        2. The ".then() is executed when a promise returns true" and ".catch()" when false
        3. The "this" keyword refers to the object in which it is
        4. When we call a method within a class which will be executed in the future, we need to
        bind it with itself, thats why we do "onLoginSuccess.bind(this)" instead of "onLoginSuccess()"
        5. 
        */
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed!',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }
        // We bind the "onButtonPress" method to "this" because it is a callback function
        // ie, a function that will be called sometime in the future so we need to give it context
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }


    render() {
        /* 
        NOTES
        1. Creating inputs like the "GetInput" component is referred to as creating 
        controlled components in react
        */
        return (
            <Card>
                {/* Email section */}
                <CardSection>
                    <GetInput
                        secure={false}
                        placeholder='user@abcd.com'
                        label='Email'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                
                {/* Password section */}
                <CardSection>
                    <GetInput
                        secure
                        placeholder='*****'
                        label='Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                {/* Button section */}
                {/* The "this.renderButton() is a helper function which will return some jsx" */}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
};

export default LoginForm;


/*
NOTES

1. 
*/
