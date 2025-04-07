import { StyleSheet, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Card from '../Card/Card';
import { colors } from '../../global/color'
import { useDispatch } from 'react-redux';
import { setIdSelected } from '../../features/shop/ShopSlice';

const ProductItem = ({
  product,
  navigation
}) => {
  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setIdSelected(product.id))
    navigation.navigate("Detail", { productId: product.id });
  }

  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable
        style={styles.pressable}
        onPress={handleNavigate}
      >
        <Text style={styles.textCategory}>{product.nombre}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.imagen }}
        />
      </Pressable>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 50,
    borderRadius: 8,
  },
  additionalStylesCard: {
    height: 120,
    width: 300,
    margin: 10,
  },
  textCategory: {
    color: "blue",
    fontWeight: "bold",
    width: "70%",
  },
  pressable: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
  },
});