// @flow
import React from "react"
import { TouchableHighlight, View, StyleSheet, Image } from "react-native"
import { penIcon, cameraIcon, galleryIcon, settingsIcon } from "assets"

class Footer extends React.Component<{}, {}> {
  onPress = (e: Event) => {
    console.log('onPress')
    console.log(e)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          name="take photo"
          style={styles.menuItem}
          onPress={this.onPress}
        >
          <Image
            style={styles.image}
            source={penIcon}
          />
        </TouchableHighlight>
        <TouchableHighlight
          name="open from library"
          style={styles.menuItem}
          onPress={this.onPress}
        >
          <Image
            style={styles.image}
            source={cameraIcon}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.menuItem}
          onPress={this.onPress}
        >
          <Image
            style={styles.image}
            source={galleryIcon}
          />
        </TouchableHighlight>
        <TouchableHighlight
          name="settings"
          style={styles.menuItem}
          onPress={this.onPress}
        >
          <Image
            style={styles.image}
            source={settingsIcon}
          />
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#3b4142",
    height: '7%',
    width: '100%',
    minHeight: 60
  },
  menuItem: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#d6d7da'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold'
  },
  image: {
    width: 40,
    maxHeight: 35
  }
})


export default Footer