import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const KeyPad = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "#162679",
        }}
      >
        <View
          style={{
            marginVertical: 15,
            width: "95%",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontWeight: "900",
              fontSize: 20,
            }}
          >
            Pick 7 Numbers
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity style={{ marginHorizontal: 10 }}>
              <FontAwesome name="random" color={"#162679"} size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="delete" color={"red"} size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ ...styles.keyContainer, width: "100%" }}>
          {Array(7)
            .fill("")
            .map((d, index) => {
              return (
                <TouchableOpacity key={index} style={styles.key2}>
                  <FontAwesome name="question" size={20} />
                </TouchableOpacity>
              );
            })}
        </View>
        <View style={styles.keyContainer}>
          {["1", "2", "3"].map((d) => {
            return (
              <TouchableOpacity key={d} style={styles.key}>
                <Text style={styles.keyText}>{d}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.keyContainer}>
          {["4", "5", "6"].map((d) => {
            return (
              <TouchableOpacity key={d} style={styles.key}>
                <Text style={styles.keyText}>{d}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.keyContainer}>
          {["7", "8", "9"].map((d) => {
            return (
              <TouchableOpacity key={d} style={styles.key}>
                <Text style={styles.keyText}>{d}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.keyContainer}>
          {["", "0", "Clear"].map((d) => {
            return (
              <TouchableOpacity
                key={d}
                style={{
                  ...styles.key,
                  backgroundColor: d ? "#162679" : "transparent",
                }}
              >
                {d === "Clear" ? (
                  <Feather name="delete" color={"white"} size={20} />
                ) : (
                  <Text style={styles.keyText}>{d}</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#FBE200",
            paddingHorizontal: 50,
            paddingVertical: 10,
            borderRadius: 10,
            marginVertical: 15,
          }}
        >
          <Text style={{ fontWeight: "900", fontSize: 20 }}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 25,
    width: "100%",
  },
  keyContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },

  key: {
    width: 65,
    height: 65,
    marginHorizontal: 1,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#162679",
    borderRadius: 1000,
  },
  key2: {
    flexDirection: "row",
    width: 40,
    height: 40,
    marginHorizontal: 1,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 1000,
    borderColor: "#162679",
    borderWidth: 1,
  },
  keyText: {
    fontSize: 24,
    color: "#fff",
  },
});

export default KeyPad;
