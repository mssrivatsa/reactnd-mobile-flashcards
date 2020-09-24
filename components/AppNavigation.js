import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import DeckList from "./DeckList";
import AddDeck from "./AddDeck";
import DeckDetails from "./DeckDetails";
import AddCard from "./AddCard";
import QuizWrapper from "./QuizWrapper";

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Deck List") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "Add Deck") {
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Deck List" component={DeckList} />
      <Tab.Screen name="Add Deck" component={AddDeck} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Deck Details" component={DeckDetails} />
        <Stack.Screen name="Add Card" component={AddCard} />
        <Stack.Screen name="Quiz" component={QuizWrapper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
