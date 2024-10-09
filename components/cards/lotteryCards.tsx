import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const LotteryCard = ({ item }: any) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({ pathname: "/(stack)/detail", params: item });
      }}
    >
      <View style={styles.imageContainer}>
        <Text style={styles.headerText}>Gena</Text>
        <Image source={item} style={styles.lotteryImage} />
        <Text style={styles.priceText}>10Birr</Text>
        <Text style={styles.winText}>Win 100,000 birr</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  lotteryImage: {
    width: Dimensions.get("screen").width - 50,
    height: 220,
    marginRight: 10,
    resizeMode: "contain",
  },
  headerText: {
    position: "absolute",
    zIndex: 10,
    color: "white",
    fontWeight: "900",
    fontSize: 24,
    left: 20,
    top: 10,
  },
  priceText: {
    position: "absolute",
    zIndex: 10,
    color: "white",
    fontWeight: "900",
    fontSize: 24,
    right: 30,
    top: 10,
  },
  winText: {
    position: "absolute",
    zIndex: 10,
    color: Colors.light.text,
    fontWeight: "900",
    fontSize: 24,
    bottom: 15,
    textAlign: "center",
    width: Dimensions.get("screen").width - 50,
  },
});

export default LotteryCard;
