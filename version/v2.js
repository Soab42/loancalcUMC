import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from "react-native";

export default function App() {
  const [loandisbursedate, setLoandisbursedate] = useState(0);
  const [interestrate, setInterestrate] = useState(0);
  const [openingoutstanding, setopeningOutstanding] = useState(0);
  const [recoverable, setRecoverable] = useState(0);
  const [recdate, setRecdate] = useState(0);

  const [cdate1, setCdate1] = useState(0);
  const [principle1, setPrinciple1] = useState(0);
  const [servicecharge1, setServicecharge1] = useState(0);
  const [outstanding1, setOutstanding1] = useState(0);
  const [recoverable1, setRecoverable1] = useState(0);

  const [cdate2, setCdate2] = useState(0);
  const [principle2, setPrinciple2] = useState(0);
  const [servicecharge2, setServicecharge2] = useState(0);
  const [outstanding2, setOutstanding2] = useState(0);
  const [recoverable2, setRecoverable2] = useState(0);

  const [cdate3, setCdate3] = useState(0);
  const [principle3, setPrinciple3] = useState(0);
  const [servicecharge3, setServicecharge3] = useState(0);
  const [outstanding3, setOutstanding3] = useState(0);
  const [recoverable3, setRecoverable3] = useState(0);

  const [cdate4, setCdate4] = useState(0);
  const [principle4, setPrinciple4] = useState(0);
  const [servicecharge4, setServicecharge4] = useState(0);
  const [outstanding4, setOutstanding4] = useState(0);
  const [recoverable4, setRecoverable4] = useState(0);

  const [cdate5, setCdate5] = useState(0);
  const [principle5, setPrinciple5] = useState(0);
  const [servicecharge5, setServicecharge5] = useState(0);
  const [outstanding5, setOutstanding5] = useState(0);
  const [recoverable5, setRecoverable5] = useState(0);

  const [cdate6, setCdate6] = useState(0);
  const [principle6, setPrinciple6] = useState(0);
  const [servicecharge6, setServicecharge6] = useState(0);
  const [outstanding6, setOutstanding6] = useState(0);
  const [recoverable6, setRecoverable6] = useState(0);

  const [cdate7, setCdate7] = useState(0);
  const [principle7, setPrinciple7] = useState(0);
  const [servicecharge7, setServicecharge7] = useState(0);
  const [outstanding7, setOutstanding7] = useState(0);
  const [recoverable7, setRecoverable7] = useState(0);

  const [cdate8, setCdate8] = useState(0);
  const [principle8, setPrinciple8] = useState(0);
  const [servicecharge8, setServicecharge8] = useState(0);
  const [outstanding8, setOutstanding8] = useState(0);
  const [recoverable8, setRecoverable8] = useState(0);

  const [cdate9, setCdate9] = useState(0);
  const [principle9, setPrinciple9] = useState(0);
  const [servicecharge9, setServicecharge9] = useState(0);
  const [outstanding9, setOutstanding9] = useState(0);
  const [recoverable9, setRecoverable9] = useState(0);

  const [cdate10, setCdate10] = useState(0);
  const [principle10, setPrinciple10] = useState(0);
  const [servicecharge10, setServicecharge10] = useState(0);
  const [outstanding10, setOutstanding10] = useState(0);
  const [recoverable10, setRecoverable10] = useState(0);

  const [cdate11, setCdate11] = useState(0);
  const [principle11, setPrinciple11] = useState(0);
  const [servicecharge11, setServicecharge11] = useState(0);
  const [outstanding11, setOutstanding11] = useState(0);
  const [recoverable11, setRecoverable11] = useState(0);

  const [cdate12, setCdate12] = useState(0);
  const [principle12, setPrinciple12] = useState(0);
  const [servicecharge12, setServicecharge12] = useState(0);
  const [recoverable12, setRecoverable12] = useState(0);
  const [outstanding12, setOutstanding12] = useState(0);
  useEffect(() => {
    setRecdate(loandisbursedate);
    const day = cdate1 - recdate + 30;
    setServicecharge1(openingoutstanding * day * (interestrate / 36000));
    recoverable < openingoutstanding
      ? setRecoverable1(recoverable)
      : setRecoverable1(openingoutstanding + servicecharge1);

    setPrinciple1(recoverable1 - servicecharge1);
    setOutstanding1(openingoutstanding - principle1);
  }, [
    cdate1,
    recdate,
    openingoutstanding,
    interestrate,
    recoverable,
    recoverable1,
    servicecharge1,
    principle1,
    loandisbursedate,
  ]);

  useEffect(() => {
    const day = cdate2 - recdate + 30;
    setServicecharge2(outstanding1 * day * (interestrate / 36000));
    recoverable < outstanding1
      ? setRecoverable2(recoverable)
      : setRecoverable2(outstanding1 + servicecharge2);

    setPrinciple2(recoverable2 - servicecharge2);
    setOutstanding2(outstanding1 - principle2);
  }, [
    cdate2,
    recdate,
    outstanding1,
    interestrate,
    recoverable,
    recoverable2,
    servicecharge2,
    principle2,
  ]);

  useEffect(() => {
    const day = cdate3 - recdate + 30;
    setServicecharge3(outstanding2 * day * (interestrate / 36000));
    recoverable < outstanding2
      ? setRecoverable3(recoverable)
      : setRecoverable3(outstanding2 + servicecharge3);

    setPrinciple3(recoverable3 - servicecharge3);
    setOutstanding3(outstanding2 - principle3);
  }, [
    cdate3,
    recdate,
    outstanding2,
    interestrate,
    recoverable,
    servicecharge3,
    principle3,
    recoverable3,
  ]);
  useEffect(() => {
    const day = cdate4 - recdate + 30;
    setServicecharge4(outstanding3 * day * (interestrate / 36000));
    recoverable < outstanding3
      ? setRecoverable4(recoverable)
      : setRecoverable4(outstanding3 + servicecharge4);

    setPrinciple4(recoverable4 - servicecharge4);
    setOutstanding4(outstanding3 - principle4);
  }, [
    cdate4,
    recdate,
    outstanding3,
    interestrate,
    recoverable,
    servicecharge4,
    principle4,
    recoverable4,
  ]);
  useEffect(() => {
    const day = cdate5 - recdate + 30;
    setServicecharge5(outstanding4 * day * (interestrate / 36000));
    recoverable < outstanding4
      ? setRecoverable5(recoverable)
      : setRecoverable5(outstanding4 + servicecharge5);
    setPrinciple5(recoverable5 - servicecharge5);
    setOutstanding5(outstanding4 - principle5);
  }, [
    cdate5,
    recdate,
    outstanding4,
    interestrate,
    recoverable,
    servicecharge5,
    principle5,
    recoverable4,
  ]);
  useEffect(() => {
    const day = cdate6 - recdate + 30;
    setServicecharge6(outstanding5 * day * (interestrate / 36000));
    recoverable < outstanding5
      ? setRecoverable6(recoverable)
      : setRecoverable6(outstanding5 + servicecharge6);
    setPrinciple6(recoverable6 - servicecharge6);
    setOutstanding6(outstanding5 - principle6);
  }, [
    cdate6,
    recdate,
    outstanding5,
    interestrate,
    recoverable,
    servicecharge6,
    principle6,
    recoverable6,
  ]);

  useEffect(() => {
    const day = cdate7 - recdate + 30;
    setServicecharge7(outstanding6 * day * (interestrate / 36000));
    recoverable < outstanding6
      ? setRecoverable7(recoverable)
      : setRecoverable7(outstanding6 + servicecharge7);
    setPrinciple7(recoverable7 - servicecharge7);
    setOutstanding7(outstanding6 - principle7);
  }, [
    cdate7,
    recdate,
    outstanding6,
    interestrate,
    recoverable,
    servicecharge7,
    principle7,
    recoverable7,
  ]);
  useEffect(() => {
    const day = cdate8 - recdate + 30;
    setServicecharge8(outstanding7 * day * (interestrate / 36000));
    recoverable < outstanding7
      ? setRecoverable8(recoverable)
      : setRecoverable8(outstanding7 + servicecharge8);
    setPrinciple8(recoverable8 - servicecharge8);
    setOutstanding8(outstanding7 - principle8);
  }, [
    cdate8,
    recdate,
    outstanding7,
    interestrate,
    recoverable,
    servicecharge8,
    principle8,
    recoverable8,
  ]);
  useEffect(() => {
    const day = cdate9 - recdate + 30;
    setServicecharge9(outstanding8 * day * (interestrate / 36000));
    recoverable < outstanding8
      ? setRecoverable9(recoverable)
      : setRecoverable9(outstanding8 + servicecharge9);
    setPrinciple9(recoverable9 - servicecharge9);
    setOutstanding9(outstanding8 - principle9);
  }, [
    cdate9,
    recdate,
    outstanding8,
    interestrate,
    recoverable,
    servicecharge9,
    principle9,
    recoverable9,
  ]);
  useEffect(() => {
    const day = cdate10 - recdate + 30;
    setServicecharge10(outstanding9 * day * (interestrate / 36000));
    recoverable < outstanding9
      ? setRecoverable10(recoverable)
      : setRecoverable10(outstanding9 + servicecharge10);
    setPrinciple10(recoverable10 - servicecharge10);
    setOutstanding10(outstanding9 - principle10);
  }, [
    cdate10,
    recdate,
    outstanding9,
    interestrate,
    recoverable,
    servicecharge10,
    principle10,
    recoverable10,
  ]);
  useEffect(() => {
    const day = cdate11 - recdate + 30;
    setServicecharge11(outstanding10 * day * (interestrate / 36000));
    recoverable < outstanding10
      ? setRecoverable11(recoverable)
      : setRecoverable11(outstanding10 + servicecharge11);
    setPrinciple11(recoverable11 - servicecharge11);
    setOutstanding11(outstanding10 - principle11);
  }, [
    cdate11,
    recdate,
    outstanding10,
    interestrate,
    recoverable,
    servicecharge11,
    principle11,
    recoverable11,
  ]);
  useEffect(() => {
    const day = cdate12 - recdate + 30;
    setServicecharge12(outstanding11 * day * (interestrate / 36000));
    recoverable < outstanding11
      ? setRecoverable12(recoverable)
      : setRecoverable12(outstanding11 + servicecharge12);
    setPrinciple12(recoverable12 - servicecharge12);
    setOutstanding12(outstanding11 - principle12);
  }, [
    cdate12,
    recdate,
    outstanding11,
    interestrate,
    recoverable,
    servicecharge12,
    principle12,
    recoverable12,
  ]);
  const genehandle = () => {
    setLoandisbursedate(1);
    setCdate1(loandisbursedate);
    setCdate2(loandisbursedate);
    setCdate3(loandisbursedate);
    setCdate4(loandisbursedate);
    setCdate5(loandisbursedate);
    setCdate6(loandisbursedate);
    setCdate7(loandisbursedate);
    setCdate8(loandisbursedate);
    setCdate9(loandisbursedate);
    setCdate10(loandisbursedate);
    setCdate11(loandisbursedate);
    setCdate12(loandisbursedate);
    setInterestrate(24);
    setRecoverable(9500);
    setopeningOutstanding(100000);
    genehandle;
  };
  const resethandle = () => {
    setLoandisbursedate(0);
    setInterestrate(0);
    setRecoverable(0);
    setopeningOutstanding(0);
    setCdate1(0);
    setCdate2(0);
    setCdate3(0);
    setCdate4(0);
    setCdate5(0);
    setCdate6(0);
    setCdate7(0);
    setCdate8(0);
    setCdate9(0);
    setCdate10(0);
    setCdate11(0);
    setCdate12(0);
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.htext}>PassBook</Text>
      </View>
      <View>
        <View style={styles.tableheader}>
          <Text style={styles.inputheadertop}>Disburse Date</Text>
          <Text style={styles.inputheadertop}>interest Rate</Text>
          <Text style={styles.inputheadertop}>recoverable amount</Text>
          <Text style={styles.inputheadertop}>Opening Outstanding</Text>
        </View>
        <View style={styles.tableheader}>
          <TextInput
            style={styles.inputheader}
            onChangeText={(number) => setLoandisbursedate(Number(number))}
          >
            {loandisbursedate}
          </TextInput>
          <TextInput
            style={styles.inputheader}
            onChangeText={(number) => setInterestrate(Number(number))}
          >
            {interestrate}
          </TextInput>

          <TextInput
            style={styles.inputheader}
            onChangeText={(number) => setRecoverable(Number(number))}
          >
            {recoverable}
          </TextInput>

          <TextInput
            style={styles.inputheader}
            onChangeText={(number) => setopeningOutstanding(Number(number))}
          >
            {openingoutstanding}
          </TextInput>
        </View>
      </View>
      <View>
        <View style={styles.contenttableheader}>
          <Text style={{ ...styles.tableheadertext, flex: 2.1 }}>#</Text>
          <Text style={styles.tableheadertext}>recoverable date</Text>
          <Text style={styles.tableheadertext}>collection date</Text>
          <Text style={styles.tableheadertext}>recoverable amount</Text>
          <Text style={styles.tableheadertext}>principle</Text>
          <Text style={styles.tableheadertext}>service charge</Text>
          <Text style={styles.tableheadertext}>Outstanding</Text>
        </View>

        <View style={styles.contenttableheader}>
          <Text style={{ ...styles.tablecontenttext, flex: 2 }}>{1}</Text>
          <Text style={styles.tablecontenttext}>{loandisbursedate}</Text>
          <TextInput style={styles.tablecontentinput} onChangeText={setCdate1}>
            {cdate1}
          </TextInput>

          <Text style={styles.tablecontenttext}>
            {Math.round(recoverable1)}
          </Text>
          <Text style={styles.tablecontenttext}>{Math.round(principle1)}</Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(servicecharge1)}
          </Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(outstanding1)}
          </Text>
        </View>

        <View style={styles.contenttableheader}>
          <Text style={{ ...styles.tablecontenttext, flex: 2 }}>{2}</Text>
          <Text style={styles.tablecontenttext}>{loandisbursedate}</Text>
          <TextInput style={styles.tablecontentinput} onChangeText={setCdate2}>
            {cdate2}
          </TextInput>

          <Text style={styles.tablecontenttext}>
            {Math.round(recoverable2)}
          </Text>
          <Text style={styles.tablecontenttext}>{Math.round(principle2)}</Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(servicecharge2)}
          </Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(outstanding2)}
          </Text>
        </View>

        <View style={styles.contenttableheader}>
          <Text style={{ ...styles.tablecontenttext, flex: 2 }}>{3}</Text>
          <Text style={styles.tablecontenttext}>{loandisbursedate}</Text>
          <TextInput style={styles.tablecontentinput} onChangeText={setCdate3}>
            {cdate3}
          </TextInput>

          <Text style={styles.tablecontenttext}>
            {Math.round(recoverable3)}
          </Text>
          <Text style={styles.tablecontenttext}>{Math.round(principle3)}</Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(servicecharge3)}
          </Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(outstanding3)}
          </Text>
        </View>

        <View style={styles.contenttableheader}>
          <Text style={{ ...styles.tablecontenttext, flex: 2 }}>{4}</Text>
          <Text style={styles.tablecontenttext}>{loandisbursedate}</Text>
          <TextInput style={styles.tablecontentinput} onChangeText={setCdate4}>
            {cdate4}
          </TextInput>

          <Text style={styles.tablecontenttext}>
            {Math.round(recoverable4)}
          </Text>
          <Text style={styles.tablecontenttext}>{Math.round(principle4)}</Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(servicecharge4)}
          </Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(outstanding4)}
          </Text>
        </View>

        <View style={styles.contenttableheader}>
          <Text style={{ ...styles.tablecontenttext, flex: 2 }}>{5}</Text>
          <Text style={styles.tablecontenttext}>{loandisbursedate}</Text>
          <TextInput style={styles.tablecontentinput} onChangeText={setCdate5}>
            {cdate5}
          </TextInput>

          <Text style={styles.tablecontenttext}>
            {Math.round(recoverable5)}
          </Text>
          <Text style={styles.tablecontenttext}>{Math.round(principle5)}</Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(servicecharge5)}
          </Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(outstanding5)}
          </Text>
        </View>

        <View style={styles.contenttableheader}>
          <Text style={{ ...styles.tablecontenttext, flex: 2 }}>{6}</Text>
          <Text style={styles.tablecontenttext}>{loandisbursedate}</Text>
          <TextInput style={styles.tablecontentinput} onChangeText={setCdate6}>
            {cdate6}
          </TextInput>

          <Text style={styles.tablecontenttext}>
            {Math.round(recoverable6)}
          </Text>
          <Text style={styles.tablecontenttext}>{Math.round(principle6)}</Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(servicecharge6)}
          </Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(outstanding6)}
          </Text>
        </View>

        <View style={styles.contenttableheader}>
          <Text style={{ ...styles.tablecontenttext, flex: 2 }}>{7}</Text>
          <Text style={styles.tablecontenttext}>{loandisbursedate}</Text>
          <TextInput style={styles.tablecontentinput} onChangeText={setCdate7}>
            {cdate7}
          </TextInput>

          <Text style={styles.tablecontenttext}>
            {Math.round(recoverable7)}
          </Text>
          <Text style={styles.tablecontenttext}>{Math.round(principle7)}</Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(servicecharge7)}
          </Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(outstanding7)}
          </Text>
        </View>
        <View style={styles.contenttableheader}>
          <Text style={{ ...styles.tablecontenttext, flex: 2 }}>{8}</Text>
          <Text style={styles.tablecontenttext}>{loandisbursedate}</Text>
          <TextInput style={styles.tablecontentinput} onChangeText={setCdate8}>
            {cdate8}
          </TextInput>

          <Text style={styles.tablecontenttext}>
            {Math.round(recoverable8)}
          </Text>
          <Text style={styles.tablecontenttext}>{Math.round(principle8)}</Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(servicecharge8)}
          </Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(outstanding8)}
          </Text>
        </View>
        <View style={styles.contenttableheader}>
          <Text style={{ ...styles.tablecontenttext, flex: 2 }}>{9}</Text>
          <Text style={styles.tablecontenttext}>{loandisbursedate}</Text>
          <TextInput style={styles.tablecontentinput} onChangeText={setCdate9}>
            {cdate9}
          </TextInput>

          <Text style={styles.tablecontenttext}>
            {Math.round(recoverable9)}
          </Text>
          <Text style={styles.tablecontenttext}>{Math.round(principle9)}</Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(servicecharge9)}
          </Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(outstanding9)}
          </Text>
        </View>

        <View style={styles.contenttableheader}>
          <Text style={{ ...styles.tablecontenttext, flex: 2 }}>{10}</Text>
          <Text style={styles.tablecontenttext}>{loandisbursedate}</Text>
          <TextInput style={styles.tablecontentinput} onChangeText={setCdate10}>
            {cdate10}
          </TextInput>

          <Text style={styles.tablecontenttext}>
            {Math.round(recoverable10)}
          </Text>
          <Text style={styles.tablecontenttext}>{Math.round(principle10)}</Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(servicecharge10)}
          </Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(outstanding10)}
          </Text>
        </View>

        <View style={styles.contenttableheader}>
          <Text style={{ ...styles.tablecontenttext, flex: 2 }}>{11}</Text>
          <Text style={styles.tablecontenttext}>{loandisbursedate}</Text>
          <TextInput style={styles.tablecontentinput} onChangeText={setCdate11}>
            {cdate11}
          </TextInput>

          <Text style={styles.tablecontenttext}>
            {Math.round(recoverable11)}
          </Text>
          <Text style={styles.tablecontenttext}>{Math.round(principle11)}</Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(servicecharge11)}
          </Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(outstanding11)}
          </Text>
        </View>
        <View style={styles.contenttableheader}>
          <Text style={{ ...styles.tablecontenttext, flex: 2 }}>{12}</Text>
          <Text style={styles.tablecontenttext}>{loandisbursedate}</Text>
          <TextInput style={styles.tablecontentinput} onChangeText={setCdate12}>
            {cdate12}
          </TextInput>

          <Text style={styles.tablecontenttext}>
            {Math.ceil(recoverable12)}
          </Text>
          <Text style={styles.tablecontenttext}>{Math.round(principle12)}</Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(servicecharge12)}
          </Text>
          <Text style={styles.tablecontenttext}>
            {Math.round(outstanding12)}
          </Text>
        </View>

        <View>
          <View style={styles.contenttableheader}>
            <Text style={{ ...styles.tablecontenttext, flex: 23.5 }}>
              Total
            </Text>
            <Text style={styles.tablecontenttext}>
              {Math.round(
                principle1 +
                  principle2 +
                  principle3 +
                  principle4 +
                  principle5 +
                  principle6 +
                  principle7 +
                  principle8 +
                  principle9 +
                  principle10 +
                  principle11 +
                  principle12
              ) +
                Math.ceil(
                  servicecharge1 +
                    servicecharge2 +
                    servicecharge3 +
                    servicecharge4 +
                    servicecharge5 +
                    servicecharge6 +
                    servicecharge7 +
                    servicecharge8 +
                    servicecharge9 +
                    servicecharge10 +
                    servicecharge11 +
                    servicecharge12
                )}
            </Text>
            <Text style={styles.tablecontenttext}>
              {Math.ceil(
                principle1 +
                  principle2 +
                  principle3 +
                  principle4 +
                  principle5 +
                  principle6 +
                  principle7 +
                  principle8 +
                  principle9 +
                  principle10 +
                  principle11 +
                  principle12
              )}
            </Text>
            <Text style={styles.tablecontenttext}>
              {Math.ceil(
                servicecharge1 +
                  servicecharge2 +
                  servicecharge3 +
                  servicecharge4 +
                  servicecharge5 +
                  servicecharge6 +
                  servicecharge7 +
                  servicecharge8 +
                  servicecharge9 +
                  servicecharge10 +
                  servicecharge11 +
                  servicecharge12
              )}
            </Text>
            <Text style={styles.tablecontenttext}>{0}</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableHighlight onPress={genehandle}>
          <Text style={styles.generate}>generate</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={resethandle}>
          <Text style={{ ...styles.generate, backgroundColor: "tomato" }}>
            Reset
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: "rgba(0,255,0,0.15)",
    paddingHorizontal: 5,
  },
  generate: {
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "lightblue",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    height: 40,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
  },
  contenttableheader: {
    flexDirection: "row",
  },
  tableheadertext: {
    height: 30,
    flex: 4,
    textTransform: "capitalize",
    textAlign: "center",
    borderWidth: 0.3,
    fontSize: 12,
    textAlignVertical: "center",
  },
  tablecontenttext: {
    height: 20,
    flex: 7,
    textTransform: "capitalize",
    textAlign: "center",
    borderWidth: 0.3,
    fontSize: 12,
    paddingHorizontal: 10,
    textAlignVertical: "center",
  },
  tablecontentinput: {
    height: 20,
    flex: 7,
    textTransform: "capitalize",
    textAlign: "center",
    borderWidth: 0.3,
    fontSize: 12,
    paddingHorizontal: 10,
    textAlignVertical: "center",
    backgroundColor: "white",
    color: "black",
  },
  tableheader: {
    display: "flex",
    flexDirection: "row",
  },
  tablerow: {
    flexDirection: "row",
    paddingHorizontal: 4,
    justifyContent: "flex-start",
  },
  inputheader: {
    flex: 4,
    textAlign: "center",
    textAlignVertical: "center",
    height: 30,
    borderWidth: 0.3,
    paddingHorizontal: 10,
    textTransform: "capitalize",
    backgroundColor: "white",
  },
  inputheadertop: {
    flex: 4,
    textAlign: "center",
    textAlignVertical: "center",
    height: 30,
    borderWidth: 0.3,
    paddingHorizontal: 10,
    textTransform: "capitalize",
  },

  date: { borderWidth: 0.3, width: 60, height: 40, paddingHorizontal: 4 },
  input: { width: 65, height: 40, borderWidth: 0.3, paddingHorizontal: 10 },
  value: {
    width: 65,
    height: 40,
    borderWidth: 0.3,
    paddingHorizontal: 10,
    paddingTop: 13,
  },
});
