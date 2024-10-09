import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const TextFieldShimmer = () => {
  return (
    <View style={styles.shimmerContainer}>
      <View style={styles.textInputShimmer} />
    </View>
  );
};

const styles = StyleSheet.create({
  shimmerContainer: {
    paddingVertical: 10,
    marginBottom: 10,
  },
  textInputShimmer: {
    height: 40,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    width: "100%",
  },
});

export default TextFieldShimmer;
