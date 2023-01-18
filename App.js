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
import Web from "./page/Web";

const Tab = createBottomTabNavigator();

export default function App() {
  const [calcstatus, setCalcstatus] = useState(false);
  const calchandle = () => {
    !calcstatus ? setCalcstatus(true) : setCalcstatus(false);
  };
  return (
    <NavigationContainer style={{ backgroundColor: "lightgreen" }}>
      <StatusBar
        barStyle={"dark-content"}
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
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "black",
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
            title: "PassBook",
            tabBarIcon: ({ color }) => (
              <>
                <Icon name="alpha-p" size={40} color={color} />
              </>
            ),
          }}
        />

        <Tab.Screen
          name="Old"
          component={Web}
          options={{
            title: "Web",
            tabBarIcon: ({ color }) => (
              <Icon name="alpha-w" color={color} size={40} />
            ),
          }}
        />
      </Tab.Navigator>
      <Text
        style={{
          height: 50,
          width: 50,
          position: "absolute",
          bottom: 50,
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
          bottom: 100,
          left: !calcstatus ? -500 : 35,
        }}
      >
        <Calculator />
      </Text>
    </NavigationContainer>
  );
}
