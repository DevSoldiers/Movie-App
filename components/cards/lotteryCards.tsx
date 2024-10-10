import { Colors } from "@/constants/Colors";
import { movie } from "@/types/movieType";
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

const MovieCard = ({ item }: { item: movie }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({ pathname: "/(stack)/detail" });
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image.original }}
          style={styles.lotteryImage}
        />
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
    width: Dimensions.get("screen").width / 2.5,
    height: 220,
    marginRight: 10,
    backgroundColor: "gray",
    borderRadius: 10,
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
    width: Dimensions.get("screen").width / 2,
  },
});

export default MovieCard;
