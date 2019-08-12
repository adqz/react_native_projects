/* eslint-disable max-len */
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux'; //importing connect helper which forges connection between redux state and out component
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    // console.log(library.item);
    return <ListItem library={library.item} />;
  }

  render() {
    // console.log(this.props.libraries);
    return (
      <FlatList 
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id.toString()}
      />
    );
  }
  /*
  NOTES on render()
  1. data is a prop which takes in the list with all data in it.
  2. renderItem is a prop which accepts some amount of jsx for one of the items to render it. To break it down,
  we give it a function which takes in the single list item as input and returns some jsx for it to display
  3. keyExtractor
  */
}

// THe below function will map data from state and pass it as props to our component LibraryList
const mapStateToProps = (state) => {
  // console.log(state);
  return { libraries: state.libraries };
};


export default connect(mapStateToProps)(LibraryList);


/* Explanation of above line
1. "connect()" calls the function connect, which returns another function.
2. Then we immediately call that returned function with LibraryList
*/

/*
NOTES
1. This component has a very important requirement -it has to communicate with the
redux state and pull out the list of libraries
2. There is ONLY ONE WAY for a component to access the redux state
3. We need to forge a connection between the state and LibraryList componnet
4. To do this, we use a "connect()" which is provided by react-redux library. This is 
the connection between redux and react
*/
