import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
// import console = require('console');

class AlbumList extends Component {

    state = { albums: [] }; //initial state is albums with an empty. This is a class level property

    // below method - componentDidMount(), is a LifeCycle method
    // this is the first thing that will run so put all data requests here
    // Remember: HTTP requests are asynchronous. They can take 5ms or 50 seconds

    componentDidMount() {
        // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        // .then(response => console.log(response));
        // Below line executes componenet level state rendering
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
        // console.log('componentDidMount() in AlbumList bitches');
        // debugger;
    }

    renderAlbums() {
        // return this.state.albums.map(album => 
        // <Text key={album.title}>{ album.title }</Text>); //map is a method for arrays
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} record={album} /> //passing object as prop to child
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        );
    }
}

export default AlbumList;

/*
The problem with http requests is that it is asynchronous.
This is the timeline of events when the app is started
1. React Native Boots up
2. RN decides to render 'app' to the screen
3. App decides to render itself, Header, Albumlist
4. Albumlist realizes its about to be rendered, calls componentDidMount
5. Albumlist makes http request via axios.get()
6. App, Albumlist, Header appear on screen
.
.
.
n. http request returns JSON data

We have an 'Order of Operations Problem'
The problem is step 6 uses data from step n. This doesn't make sense!!
So we need to be able to do step 6 again after the JSON data is receieved.

------>The solution in short is to re-render the component once the data is fetched<-----
*/

/*
1. setState is an existing function which is inherited from the Component class
2. The purpose of setState function is to update the component state with new data and re-render it
3. setState method is the only way to update the component state
4. The above rule is broken only for initilization, not modification
5. 
*/

/* UPDATED TIMELINE --> After using state

1. React Native Boots up
2. RN decides to render 'app' to the screen
3. App decides to render itself, Header, Albumlist
4. Albumlist gets initial state of { albums:[] }
5. Albumlist realizes its about to be rendered, calls componentDidMount
6. Albumlist makes http request via axios.get()
7. Albumlist's render method is called
8. App, Albumlist, Header appear on screen
.
.
.
n. http request returns JSON data
n+1. Request handler calls 'setState'
n+2. Albumlist's render mehtod is called
*/

/*
Difference between 'props' and 'state' systems
1. We use props to communicate between parent and child component
2. We use state for a componnets internal record keeping like update some data over time
3. states can only be used by class based component, not function based
*/

