import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    // Provider can only have one child
    <Provider store={createStore(reducers)}>
      <View style={styles.viewStyle}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

const styles = {
  viewStyle: {
    flex: 1
  }
};

export default App;
