// @flow
import React from "react"
import { TextInput, Text, View, StyleSheet, Button, TouchableHighlight, ScrollView, WebView } from "react-native"
import { DEFAULT_INPUT_TEXT } from "./constants"
import { global } from "utils/global"
import { runSeoAnalysis } from "api/advegoApi"
import { START_QUERY_SELECTOR, END_QUERY_SELECTOR } from "./constants";
const querySelectorAll = require('query-selector');

class InputPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: "", content: null }
  }

  getParsedData = (res) => {
    const startPosition = res.indexOf(START_QUERY_SELECTOR)
    const endPosition = res.indexOf(END_QUERY_SELECTOR)
    const html = res.substring(startPosition, endPosition)

    return html
  }

  handleChange = (text) =>
    this.setState({ text })

  handleSeoAnalys = () =>
    runSeoAnalysis("ru", this.state.text)
      .then(res => res.text())
      .then(result =>
        this.setState({ content: this.getParsedData(result) })
      )

  handleWebViewError = (error) => {
    console.log("error")
    console.log(error)
  }

  render() {
    console.log("querySelectorAll")
    console.log(querySelectorAll)
    return (
      <View style={styles.container}>
        {
          !this.state.content &&
          <View>
            <Text style={styles.label}>
              Enter your text right here
            </Text>
            <TextInput
              style={styles.input}
              placeholder={DEFAULT_INPUT_TEXT}
              autoFocus={true}
              multiline={true}
              value={this.state.text}
              onChangeText={this.handleChange}
            />
          </View>
        }
        <TouchableHighlight
          name="seo analysis"
          style={styles.menuItem}
          onPress={this.handleSeoAnalys}
        >
          <Text>Seo analysis</Text>
        </TouchableHighlight>
        {
          this.state.content &&
          <WebView
            style={styles.result}
            contentInset={{ top: 0, left: 400, bottom: 0, right: 0 }}
            source={{ html: this.state.content }}
            onError={this.handleWebViewError}
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: "90%",
    justifyContent: "space-between",
  },
  label: {
    fontFamily: "Lato-Bold",
    fontSize: 28,
    paddingTop: 20,
    paddingBottom: 20
  },
  input: {
    width: "100%",
    height: "80%",
    borderBottomColor: '#000000',
    borderBottomWidth: 1
  },
  result: {
    width: 1100,
    height: 1100
  },
  contentInset: {
    top: 0,
    left: 100,
    bottom: 0,
    right: 0
  }
})

export default InputPage