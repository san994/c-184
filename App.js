import React from "react";
import Main from "./Screens/main";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import Home from "./Screens/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       initialRouteName="Home" 
       screenOptions={{
         headerShown:false
       }}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Main" component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


