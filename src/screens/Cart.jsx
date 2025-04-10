import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CartData from "../data/cart.json"
import CartItem from "../Componentes/CartItem/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";


const Cart = () => {
  const {items: CartData, total} = useSelector((state)=> state.cart.value)
  const [triggerPostOrder, result] = usePostOrderMutation()
  const {localId} = useSelector((state) => state.auth.value)

    onConfirmOrder = () => {
      triggerPostOrder({items: CartData, user: localId, total})
  
    }
    
    return (
      <View style={styles.container}>
        <FlatList
          data={CartData}
          keyExtractor={(product) => product.id}
          renderItem={({ item }) => {
            return <CartItem cartItem={item} />;
          }}
        />
        <View style={styles.totalContainer}>
          <Pressable onPress={onConfirmOrder}>
            <Text>Confirm</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  
  export default Cart;
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: "space-between",
      flex: 1,
      marginBottom: 120,
    },
    totalContainer: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  });