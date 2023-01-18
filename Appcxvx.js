import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Daily from "./page/DailyCalc/Daily";
import Newcalc from "./page/NewCalc/Newcalc";

import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import Calc from "./calc";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="New"
      tabBar={(props) => <Calc />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Daily"
        component={Daily}
        options={{
          tabBarLabel: "Daily",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="alpha-d" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={Newcalc}
        options={{
          tabBarLabel: "New",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="alpha-n" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Old Calculation"
        component={Oldcalc}
        options={{
          tabBarLabel: "Old",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="alpha-o" color={color} size={40} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
