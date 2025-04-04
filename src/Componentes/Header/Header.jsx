import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../global/color'

const Header = ({title="HOLA"}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secundary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
  }
})