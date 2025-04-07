import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from '../global/color';

import HomeStackNavigator from './HomeStackNavigator';
import CartStackNavigator from './CartStackNavigator'
import OrderStackNavigator from './OrderStackNavigator'
import MyProfileStackNavigator from './MyProfileStackNavigator';
import Header from '../Componentes/Header/Header';

//import CartTemp from '../screens/CartTemp'
//import OrderTemp from '../screens/OrdersTemp'

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route})=>({
        tabBar: ()=> {
          return <Header route={route} />
        }, 
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name="Ecomerce"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5
                  name="store"
                  size={24}
                  color={focused ? "black" : "blue"}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Cart2"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome6
                  name="cart-shopping"
                  size={24}
                  color={focused ? "black" : "blue"}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen 
      name="Orders" 
      component={OrderStackNavigator} 
              options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <FontAwesome5
                  name="receipt"
                  size={24}
                  color={focused ? "black" : "blue"}
                />
             
              </View>
            );
          }
        }}  
      />

<Tab.Screen 
      name="My Profile" 
      component={MyProfileStackNavigator} 
      options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Ionicons
                  name="person-circle"
                  size={24}
                  color={focused ? "black" : "blue"}
                />
              </View>
            );
          }
        }}  
      />

    </Tab.Navigator>
  );
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.secondary,
    boxShadow: "black",
    elevation: 4,
    borderRadius: 15,
    height: 60,
  },
});