import React, { useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { setupAutoRefetch } from "../../store/movieStore";
import LandingScreen from "@/Screens/Landing";
const Index = () => {
  // useEffect(() => {
  //   const clearRefetch = setupAutoRefetch();
  //   return () => clearRefetch();
  // }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <LandingScreen />
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
