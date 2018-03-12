// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "rootSaga"
// import rootReducer from "./rootReducer"

// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// )
//
// sagaMiddleware.run(rootSaga)

export default class App extends React.Component<null, null> {
  render() {
    return (
        <View style={styles.container}>
          <Text>Привет Настя!!!</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
