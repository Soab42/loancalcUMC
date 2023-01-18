import { View, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const Web = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <WebView source={{ uri: "https://loancalcall.web.app/old" }} />
    </View>
  );
};

export default Web;
