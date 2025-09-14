import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import CounterScreen from "./screens/CounterScreen.tsx";  // your counter app
import ToDoScreen from "./screens/ToDoScreen.tsx";        // your to-do app

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Counter") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "To-Do") {
            iconName = focused ? "list" : "list-outline";
          }

          // Return the Ionicon
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}>
        <Tab.Screen name="Counter" component={CounterScreen} />
        <Tab.Screen name="To-Do" component={ToDoScreen} />
      </Tab.Navigator>
  );
}




