import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Test() {
  const [date, setDate] = useState(moment(new Date()).format("DD-MM-YY"));
  const [date2, setDate2] = useState(moment(new Date()).format("DD-MM-YY"));
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [datecalculate, setDatecalculate] = useState();

  useEffect(() => {
    setDatecalculate(moment(data2).diff(data, "days"));
    console.log(datecalculate);
  }, [data, date2]);

  const datehandle = (x) => {
    setDate(moment(x).format("DD-MM-YY"));
    setData(x);
  };
  const datehandle2 = (x) => {
    setDate2(moment(x).format("DD-MM-YY"));
    setData2(x);
  };
  const onChange = (e, x) => {
    setDate(moment(x).format("DD-MM-YY"));
    setData(x);
  };
  const onChange2 = (x) => {
    setDate2(moment(x).format("DD-MM-YY"));
    setData2(x);
  };
  return (
    <>
      <View>
        <Text style={styles.input}>Test</Text>
        <Text style={styles.input}>{date}</Text>
        <Text style={styles.input}>{date2}</Text>
        <Text style={styles.input}>{datecalculate}</Text>
        <TextInput style={styles.input} onChangeText={datehandle}></TextInput>
        <TextInput style={styles.input} onChangeText={datehandle2}></TextInput>
      </View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
        <Button onPress={showTimepicker} title="Show time picker!" />
        <Text>selected: {date.toLocaleString()}</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 30,
    backgroundColor: "pink",
    marginTop: 5,
    textAlign: "center",
  },
});
