import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Home from './Screens/Home';
import Post from './Screens/Post';
import Profile from './Screens/Profile';









const Tab = createBottomTabNavigator();





const TabScreen = () => {



  return (
    
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#645795",
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#ffffff",
            paddingBottom:5,
          },

          tabBarStyle: {
            backgroundColor: "#322962",
            height: "7.5%",
            width: "100%",
            borderRadius: 12,
            marginBottom: 12,
            paddingHorizontal:"5%"
            
          }
        }}>
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (<AntDesign name="home" size={24} color="white" />),

          }} />
        <Tab.Screen name="Post" component={Post}
          options={{
            tabBarIcon: ({ color, size }) => (<AntDesign name="pluscircleo" size={24} color="white" />),

          }} />
        <Tab.Screen name="Profile" component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (<MaterialIcons name="account-circle" size={24} color="white" />),

          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabScreen;

const styles = StyleSheet.create({
  TextProp: {
    color: 'blue',
  },
  bg: {
    backgroundColor: "grey"
  }
});
