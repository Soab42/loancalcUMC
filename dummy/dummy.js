// import React, { useEffect, useState } from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableHighlight,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function App() {
//   const [loandisbursedate, setLoandisbursedate] = useState(0);
//   const [interestrate, setInterestrate] = useState(0);
//   const [openingoutstanding, setopeningOutstanding] = useState(0);
//   const [recdate, setRecdate] = useState(0);
//   const [cdate, setCdate] = useState(0);
//   const [recoverable, setRecoverable] = useState(0);
//   const [principle, setPrinciple] = useState(0);
//   const [servicecharge, setServicecharge] = useState(0);
//   const [outstanding, setOutstanding] = useState(0);
//   const [all, setAll] = useState([]);
//   useEffect(() => {
//     setRecdate(loandisbursedate);
//     const day = cdate - recdate + 30;

//     setServicecharge(openingoutstanding * day * (interestrate / 36000));
//     setPrinciple(recoverable - servicecharge);
//     setOutstanding(openingoutstanding - principle);
//     console.log(outstanding);
//   }, [
//     loandisbursedate,
//     cdate,
//     recdate,
//     interestrate,
//     recoverable,
//     servicecharge,
//     openingoutstanding,
//     principle,
//   ]);
//   const genehandle = () => {
//     return setAll([
//       {
//         loandisbursedate,
//         cdate,
//         recdate,
//         interestrate,
//         recoverable,
//         servicecharge,
//         openingoutstanding,
//         principle,
//       },
//       console.log(all),
//     ]);
//   };
//   return (
//     <SafeAreaView style={styles.main}>
//       <View style={styles.header}>
//         <Text>PassBook</Text>
//       </View>
//       <View style={styles.table}>
//         <View style={styles.tableheader}>
//           <Text>table header</Text>
//         </View>
//         <View style={styles.tableheader}>
//           <Text>table content</Text>
//           <View style={styles.tablerow}>
//             <TextInput
//               style={styles.date}
//               value={loandisbursedate}
//               onChangeText={setLoandisbursedate}
//             />
//             <TextInput style={styles.date} />
//             <TextInput style={styles.input} />
//             <TextInput style={styles.input} />
//             <TextInput
//               style={styles.input}
//               value={interestrate}
//               onChangeText={(text) => setInterestrate(text)}
//             />
//             <TextInput
//               style={styles.input}
//               value={openingoutstanding}
//               onChangeText={setopeningOutstanding}
//             />
//           </View>
//           <View style={styles.tablerow}>
//             <TextInput style={styles.date} value={recdate} />
//             <TextInput style={styles.date} onChangeText={setCdate} />
//             <TextInput
//               style={styles.input}
//               value={recoverable}
//               onChangeText={setRecoverable}
//             />
//             <Text style={styles.value}>{principle} </Text>
//             <Text style={styles.value}>{servicecharge} </Text>
//             <Text style={styles.value}>{outstanding} </Text>
//           </View>

//           <TouchableHighlight onPress={genehandle}>
//             <Text style={styles.generate}>generate</Text>
//           </TouchableHighlight>
//         </View>
//       </View>
//       <View>
//         <Text>generate</Text>
//       </View>
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   main: {
//     backgroundColor: "rgba(0,255,0,0.15)",
//   },
//   generate: {
//     height: 50,
//     textAlign: "center",
//     textAlignVertical: "center",
//     backgroundColor: "lightblue",
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   header: {
//     height: 40,
//     backgroundColor: "lightgreen",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   tablerow: {
//     flexDirection: "row",
//     paddingHorizontal: 4,
//     justifyContent: "flex-start",
//   },
//   date: { borderWidth: 0.3, width: 60, height: 40, paddingHorizontal: 4 },
//   input: { width: 65, height: 40, borderWidth: 0.3, paddingHorizontal: 10 },
//   value: {
//     width: 65,
//     height: 40,
//     borderWidth: 0.3,
//     paddingHorizontal: 10,
//     paddingTop: 13,
//   },
// });
