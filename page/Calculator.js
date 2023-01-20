import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default function Calculator() {
  const [data, setdata] = useState();
  const [result, setResult] = useState();
  const calculate = () => {
    setResult(eval(data));
  };
  const Reset = () => {
    setdata();
    setResult();
  };
  return (
    <View style={{ height: 240, width: 300, alignSelf: "center" }}>
      <View>
        <Text
          style={{
            backgroundColor: "lightgreen",
            textAlign: "center",
            height: 40,
            textAlignVertical: "center",
            padding: 5,
            borderRadius: 15,
          }}
        >
          Calculator
        </Text>
        <TextInput
          style={{
            height: 40,
            borderRadius: 25,
            backgroundColor: "white",
            width: 300,
            textAlign: "center",
            marginBottom: 10,
            marginTop: 10,
          }}
          placeholder={"9500*3+245-10/2"}
          onChangeText={setdata}
          cursorColor="black"
          keyboardType="numeric"
        >
          {data}
        </TextInput>
        <Text
          style={{
            height: 40,
            borderRadius: 25,
            fontSize: 30,
            backgroundColor: "lightblue",
            width: 300,
            marginBottom: 10,
            textAlignVertical: "center",
            textAlign: "center",
          }}
        >
          {result}
        </Text>
        <View
          style={{
            height: 40,
            paddingVertical: 5,
            borderRadius: 25,
            backgroundColor: "lightblue",
            width: 300,
            marginBottom: 10,

            display: "flex",
            textAlign: "center",
            flexDirection: "row",
            paddingHorizontal: 5,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              width: 70,
              backgroundColor: "rgba(50,50,50,.2)",
              borderRadius: 50,
            }}
            onPress={() => setdata(data + "+")}
          >
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              width: 70,
              backgroundColor: "rgba(50,50,50,.2)",
              borderRadius: 50,
            }}
            onPress={() => setdata(data + "-")}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              width: 70,
              backgroundColor: "rgba(50,50,50,.2)",
              borderRadius: 50,
            }}
            onPress={() => setdata(data + "*")}
          >
            <Text>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              width: 70,
              backgroundColor: "rgba(50,50,50,.2)",
              borderRadius: 50,
            }}
            onPress={() => setdata(data + "/")}
          >
            <Text>/</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <TouchableOpacity style={{ width: 150 }} onPress={calculate}>
            <Text
              style={{
                height: 40,
                borderRadius: 25,
                width: 100,
                backgroundColor: "lightgreen",
                width: 140,
                textAlign: "center",
                textAlignVertical: "center",
              }}
            >
              Calculate
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 150 }} onPress={Reset}>
            <Text
              style={{
                height: 40,
                borderRadius: 25,
                backgroundColor: "tomato",
                width: 140,
                textAlign: "center",
                textAlignVertical: "center",
              }}
            >
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
