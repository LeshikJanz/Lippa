// @flow
import React from "react"
import { TextInput, Text, View, StyleSheet } from "react-native"

class InputPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
    return (
      <View>
        <Text style={styles.label}>
          Enter your text right here
        </Text>
        <TextInput
          style={styles.container}
          multiline={true}
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1
  },
  label: {
    fontFamily: "Lato-Bold",
    fontSize: 28,
    paddingTop: 20,
    paddingBottom: 20
  }
})

export default InputPage