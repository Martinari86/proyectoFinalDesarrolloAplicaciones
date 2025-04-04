import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'

const CustomModal = ({handleCancelModal, handleDeleteModal, modalVisible, itemSelected}) => {
  return (
   <Modal visible={modalVisible} animationType='slide' transparent={true}>
           <View style={styles.modalContainer}>
           <View style={styles.textContainer}>
               <Text>Estas seguro que queres borrar?</Text>
             </View>
             <View style={styles.textContainer}>
               <Text style={styles.textModal}>{itemSelected.value}</Text>
             </View>
             <View style={styles.textContainer}>
               <Button style={styles.btnContainer} title="Borrar" onPress={handleDeleteModal} color="red"></Button>
               <Button style={styles.btnContainer} title="Cancelar" onPress={handleCancelModal} color="blue"></Button>
             </View>
           </View>
    </Modal>
  )
}

export default CustomModal

const styles = StyleSheet.create({
    
    modalContainer:{
      backgroundColor:"white",
      width:"80%",
      alignContent:"center",
      gap: 20,
      paddingVertical: 20,
      borderRadius: 8
    },
    textContainer:{
    },
    btnContainer:{
      flexDirection: 'row',
      gap:20
    },
    textModal:{
      fontWeight: "bold"
    }
  
  });
  