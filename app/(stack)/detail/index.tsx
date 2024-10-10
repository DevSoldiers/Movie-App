import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LotteryDetail from "@/Screens/Lottery/detail";
import useMoviesStore from "@/store/movieStore";
const Index = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LotteryDetail />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
});

export default Index;
