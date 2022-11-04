import React, { useEffect, useState } from "react";

import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Daily from "./page/DailyCalc/Daily";
import Newcalc from "./page/NewCalc/Newcalc";
import Oldcalc from "./page/OldCalc/v3/Oldcalc";
import Calculator from "./page/Calculator";
function MyTabBar({ state, descriptors, navigation }) {
  const [calcstatus, setCalcstatus] = useState(false);
  const calchandle = () => {
    !calcstatus ? setCalcstatus(true) : setCalcstatus(false);
  };

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
          <Text
            style={{
              height: 50,
              width: 50,
              padding: 10,
              backgroundColor: "Tomato",
              textAlignVertical: "center",
              backgroundColor: "rgba(155,165,185,.7)",
              textAlign: "center",
              borderRadius: 40,
              fontSize: 20,
              borderWidth: 1,
            }}
          >
            +
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
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              height: 40,
              margin: 5,
              marginBottom: 30,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: isFocused ? "lightgreen" : "white",
            }}
          >
            <Text style={{ fontSize: 12 }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={{ backgroundColor: "lightgreen" }}>
      <Tab.Navigator
        tabBar={(props) => <MyTabBar {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: "lightgreen",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Tab.Screen
          name="daily"
          component={Daily}
          options={{ title: "Daily Calculation" }}
        />
        <Tab.Screen
          name="new"
          component={Newcalc}
          options={{ title: "New Calculation" }}
        />

        <Tab.Screen
          name="Old"
          component={Oldcalc}
          options={{ title: "Old Calculation" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
