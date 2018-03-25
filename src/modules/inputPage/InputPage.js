// @flow
import React from "react"
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Keyboard,
  TouchableHighlight,
  ScrollView,
  WebView
} from "react-native"
import { DEFAULT_INPUT_TEXT } from "./constants"
import { global } from "utils/global"
import { runSeoAnalysis } from "api/advegoApi"
import { START_QUERY_SELECTOR, END_QUERY_SELECTOR } from "./constants";

class InputPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: "", content: null }
  }

  getParsedData = (res) => {
    const startPosition = res.indexOf(START_QUERY_SELECTOR)
    const endPosition = res.indexOf(END_QUERY_SELECTOR)
    return res.substring(startPosition, endPosition)
  }

  handleChange = (text) =>
    this.setState({ text })

  handleSeoAnalysis = () =>
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
    return (
      <View style={styles.container}>
        {
          !this.state.content &&
          <View>
            <Text onPress={Keyboard.dismiss} style={styles.label}>
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
          style={styles.button}
          disabled={!!this.state.content}
          onPress={this.handleSeoAnalysis}
        >
          <Text style={styles.buttonText}>Seo analysis</Text>
        </TouchableHighlight>
        {
          !!this.state.content &&
          <View style={styles.resultView}>
            <WebView
              style={styles.result}
              contentInset={{ top: 0, left: 500, bottom: 0, right: 0 }}
              source={{ html: this.state.content }}
              onError={this.handleWebViewError}
            />
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: "90%",
    justifyContent: "flex-start",
  },
  label: {
    fontFamily: "Lato-Bold",
    fontSize: 28,
    paddingTop: 20,
    paddingBottom: 20
  },
  input: {
    width: "100%",
    height: "70%",
    borderBottomColor: '#000000',
    borderBottomWidth: 1
  },
  resultView: {
    height: "100%",
  },
  result: {
    width: 1350
  },
  button: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 28,
    backgroundColor: "#ff5000"
  },
  buttonText: {
    fontSize: 24,
    fontFamily: "Lato-Bold",
    color: "#fff"
  }
})

export default InputPage