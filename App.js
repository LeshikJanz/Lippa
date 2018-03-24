// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Footer from "components/footer/Footer"
import InputPage from "modules/inputPage/InputPage"
import { Font } from 'expo'

type State = {
  fontLoaded: boolean,
}

export default class App extends React.Component<{}, State> {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Lato-Bold': require('./src/assets/fonts/Lato/Lato-Bold.ttf'),
      'Lato-Italic': require('./src/assets/fonts/Lato/Lato-Italic.ttf'),
      'Lato': require('./src/assets/fonts/Lato/Lato-Regular.ttf'),
    })

    this.setState({ fontLoaded: true })
    global.locale = "ru"
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.fontLoaded &&
          <View>
            <InputPage />
          </View>
        }
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%'
  },
  lato: {
    fontFamily: 'Lato-Bold'
  }
});
