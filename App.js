// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Footer from "components/footer/Footer"

export default class App extends React.Component<null, null> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Привет Настя!!!</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%'
  }
});
