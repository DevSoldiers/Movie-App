import React from "react";
import { View, StyleSheet } from "react-native";

const ShimmerPlaceholder = () => (
  <View style={styles.card}>
    <View style={styles.cardHeaderPlaceholder} />
    <View style={styles.cardContentPlaceholder}>
      <View style={styles.cardRowPlaceholder}>
        <View style={styles.textPlaceholder} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    height: 100,
    flex: 1,
  },
  cardHeaderPlaceholder: {
    height: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    marginBottom: 10,
    width: "40%",
    alignSelf: "center",
  },
  cardContentPlaceholder: {
    flexDirection: "column",
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: "center",
  },
  cardRowPlaceholder: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "center",
  },
  textPlaceholder: {
    height: 16,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    width: "80%",
  },
});

export default ShimmerPlaceholder;
