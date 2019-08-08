/*
1. Whenever we want to place some content on the screen, we build a component.
2. A component is a widget of sorts which can show some text or shape
3. Our job in this file is to 
*/

// Import a library to help create a component
import React from 'react';
// import ReactNative from 'react-native';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header'; //need to provide relative path
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} /> 
        <AlbumList />
    </View>
    );

// Render it to the device (must register at least one component!!)
AppRegistry.registerComponent('albums', () => App); // an implicit return happens in App
// Only the root componnet uses AppRegistry. It is the root and we want it to show first

// Component nesting and exporting components go hand in hand
