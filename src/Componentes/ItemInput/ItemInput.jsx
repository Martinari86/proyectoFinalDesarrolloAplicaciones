import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'

const ItemInput = ({textItem, addItems, handleChangeText}) => {
  return (
    <View style={styles.inputContainer}>
        <TextInput 
           style={styles.input}
           value={textItem}
           onChangeText={handleChangeText}
         />
        <Button title="Agregar" onPress= {addItems} color="red"/>
    </View>
  )
}

export default ItemInput

const styles = StyleSheet.create({
    inputContainer: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "20",
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: "black",
      fontSize: 16,
      width: "250",
    },
  });