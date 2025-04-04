import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../Card/Card';
import { colors } from '../../global/color';
import { useDispatch } from 'react-redux';
import { setCategorySelected } from '../../features/shop/ShopSlice';

const CategoryItems = ({ category, navigation}) => {
  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setCategorySelected(category));
    navigation.navigate("ItemListCategory", { category });
  }
  
  return (
    <Card style={{ marginVertical: 10, marginHorizontal: 10 }}>
      <Pressable onPress={handleNavigate}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItems

const styles = StyleSheet.create({
    text: {
        color: colors.tertiary,
        textAlign: 'center',
        fontSize: 20,
    }
})