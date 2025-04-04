import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../global/color";
import { Entypo } from "@expo/vector-icons";

const CartItem = ({ cartItem }) => {
  return (
    <View style={styles.card} onPress={() => {}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {cartItem.nombre} ({cartItem.quantity})
        </Text>
        <Text style={styles.text2}>{cartItem.nombre}</Text>
        <Text style={styles.text2}>${cartItem.precio}</Text>
      </View>
      <Entypo name="trash" size={30} color="black" />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: colors.platinum,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontFamily: "Josefin",
    fontSize: 19,
    color: colors.base,
  },
  text2: {
    fontFamily: "Josefin",
    fontSize: 14,
    color: colors.base,
  },
});