import { Colors } from "@/constants/Colors";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const InstantGamesCard = ({ item }: any) => (
  <View style={styles.container}>
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image source={item.image} style={styles.lotteryImage} />
      <Text style={styles.textStyle}>{item.game}</Text>
      <TouchableOpacity>
        <View style={styles.buttonStyle}>
          <Text
            style={{
              color: Colors.light.text,
              fontWeight: "900",
              fontSize: 22,
            }}
          >
            Play Now
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#172C7B",
    paddingVertical: 20,
    marginRight: 10,
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    width: Dimensions.get("screen").width / 1.3,
    borderRadius: 10,
  },
  lotteryImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    resizeMode: "contain",
  },
  textStyle: {
    color: "white",
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  buttonStyle: {
    backgroundColor: "#FBE200",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default InstantGamesCard;
