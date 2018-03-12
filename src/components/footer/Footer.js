// @flow
import React from "react"
import { TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export const Footer = () =>
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.button}
      onPress={this.onPress}
    >1</TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={this.onPress}
    >1</TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={this.onPress}
    >1</TouchableOpacity>
  </View>
