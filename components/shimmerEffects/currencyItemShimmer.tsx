import React from "react";
import { View, StyleSheet } from "react-native";

const CurrencyItemShimmer = () => {
  return (
    <View style={styles.listItem}>
      <View style={styles.row}>
        <View style={styles.textPlaceholder} />
      </View>
      <View style={styles.row}>
        <View style={styles.textPlaceholder} />
        <View style={styles.iconPlaceholder} />
        <View style={styles.textPlaceholder} />
      </View>
      <View style={styles.updatedAtPlaceholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 10,
  },
  textPlaceholder: {
    height: 16,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    flex: 1,
    marginVertical: 5,
  },
  iconPlaceholder: {
    height: 25,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    width: 30,
    marginHorizontal: 5,
  },
  updatedAtPlaceholder: {
    height: 12,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    marginTop: 5,
    width: "50%",
  },
});

export default CurrencyItemShimmer;
