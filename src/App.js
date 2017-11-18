import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAfuueuMcUQNfflwSDdCGLtcGosq8jvxaI',
            authDomain: 'auth-9d6b2.firebaseapp.com',
            databaseURL: 'https://auth-9d6b2.firebaseio.com',
            projectId: 'auth-9d6b2',
            storageBucket: 'auth-9d6b2.appspot.com',
            messagingSenderId: '1036259161089'
          });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An app</Text>
            </View>
        );
    }
}

export default App;
