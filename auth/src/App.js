import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection, Card } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    /*
    NOTES
    We need 3 values for the loggedIn state, heres why
    1. state = null means we dont know whether user is logged in or not
    2. state = true means logged in
    3. state = false means logged out
    */
    state = { loggedIn: null };

    componentDidMount() {
        const { loggedIn } = this.state;

        firebase.initializeApp({
            apiKey: 'AIzaSyCljN0kJCxqr7xZNIOTdGO1FGvkROoRKv0',
            authDomain: 'auth-dc937.firebaseapp.com',
            databaseURL: 'https://auth-dc937.firebaseio.com',
            projectId: 'auth-dc937',
            storageBucket: 'auth-dc937.appspot.com',
            messagingSenderId: '36682649813',
            appId: '1:36682649813:web:47f8dda78b3d5608'
          });
        /*
        NOTES
        1. firebase.auth().onAuthStateChanged is a method which returns an object (in our
        case we call it user) if login was successful
        2. If login was not successful, it will return a boolean false
        */
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }
    renderContent() {
        const { loggedIn } = this.state;

        switch (loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Header headerText={'Logged in!'} />
                        </CardSection>

                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}
export default App;
