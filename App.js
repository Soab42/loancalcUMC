import * as React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Daily from "./page/DailyCalc/Daily";
import Newcalc from "./page/NewCalc/Newcalc";
import Oldcalc from "./page/OldCalc/v3/Oldcalc";
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row", backgroundColor: "white" }}>
      <StatusBar backgroundColor="lightgreen" />
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
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="Daily Calculation" component={Daily} />
        <Tab.Screen name="New Calculation" component={Newcalc} />
        <Tab.Screen name="Old Calculation" component={Oldcalc} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
