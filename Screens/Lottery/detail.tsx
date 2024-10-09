import KeyPad from "@/components/keyPad";
import CountdownTimer from "@/components/timer";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function LotteryDetail() {
  const item = useLocalSearchParams();

  return (
    <ScrollView>
      {/* <Text style={styles.textStyle}>Gena Lottery</Text> */}
      <CountdownTimer targetDate="2024-12-31T23:59:59" />
      <KeyPad />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },

  textStyle: {
    fontWeight: "900",
    letterSpacing: 2,
    fontSize: 28,
    textAlign: "center",
    marginVertical: 5,
  },
});
