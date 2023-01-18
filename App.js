import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Daily from "./page/DailyCalc/Daily";
import Newcalc from "./page/NewCalc/Newcalc";
import Oldcalc from "./page/OldCalc/v3/Oldcalc";
import Calculator from "./page/Calculator";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
function MyTabBar({ state, descriptors, navigation }) {
  const [calcstatus, setCalcstatus] = useState(false);
  const calchandle = () => {
    !calcstatus ? setCalcstatus(true) : setCalcstatus(false);
  };
  console.log(descriptors);
  return (
    <View style={{ flexDirection: "row", backgroundColor: "white" }}>
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />
      <Text
        style={{
          height: 50,
          width: 50,
          position: "absolute",
          top: -60,
          left: 10,
        }}
      >
        <TouchableOpacity onPress={calchandle}>
          <Text style={{}}>
            <Icon name="calculator-variant-outline" size={45} />
          </Text>
        </TouchableOpacity>
      </Text>
      <Text
        style={{
          position: "absolute",
          backgroundColor: "rgba(155,165,185,.7)",
          padding: 10,
          borderRadius: 25,
          top: -350,
          left: !calcstatus ? -500 : 35,
        }}
      >
        <Calculator />
      </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={{ backgroundColor: "lightgreen" }}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="lightgreen"
        // translucent
      />
      <Tab.Navigator
        // tabBar={() => <MyTabBar />}

        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          headerStyle: {
            backgroundColor: "lightgreen",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarStyle: { height: 50 },
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "pink",
          tabBarInactiveBackgroundColor: "lightgreen",
          tabBarItemStyle: { backgroundColor: "lightgreen" },
        }}
      >
        <Tab.Screen
          name="daily"
          component={Daily}
          options={{
            tabBarLabel: "Daily",

            tabBarIcon: ({ color, size }) => (
              <Icon name="alpha-d" size={40} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="new"
          component={Newcalc}
          options={{
            title: "New",
            tabBarIcon: ({ color }) => (
              <Icon name="alpha-n" size={40} color={color} />
            ),
          }}
        />

        {/* <Tab.Screen
          name="Old"
          component={Oldcalc}
          options={{
            title: "Old",
            tabBarIcon: ({ color }) => (
              <Icon name="alpha-o" color={color} size={40} />
            ),
          }}
        /> */}
      </Tab.Navigator>
      <TouchableOpacity style={{ position: "absolute", bottom: 100 }}>
        <Icon name="calculator" size={40} />
      </TouchableOpacity>
    </NavigationContainer>
  );
}
