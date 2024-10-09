import InstantGamesCard from "@/components/cards/instantGamesCard";
import LotteryCard from "@/components/cards/lotteryCards";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

const logo = require("../../assets/images/NLSforWhite.png");

const lotteries = [
  require("../../assets/images/lotto.png"),
  require("../../assets/images/lotto2.png"),
  require("../../assets/images/lotto3.png"),
  require("../../assets/images/lotto4.png"),
];
const instantGames = [
  {
    image: require("../../assets/images/instanticons/almazicon.png"),
    game: "አልማዝ",
  },
  {
    image: require("../../assets/images/instanticons/yegenzebkeretit.png"),
    game: "የገንዘብ ከረጢት",
  },
  {
    image: require("../../assets/images/instanticons/yekutrchewata.png"),
    game: "የቁጥር ጨዋታ",
  },
  {
    image: require("../../assets/images/instanticons/yemisilchewata.png"),
    game: "የምስል ጨዋታ",
  },
];

const LandingScreen = () => {
  const renderItem = ({ item }: any) => <LotteryCard item={item} />;
  const instantGamesItem = ({ item }: any) => <InstantGamesCard item={item} />;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={logo} style={styles.image} />
        <Text style={[styles.textStyle, { marginTop: 5 }]}>Lotteries</Text>
        <Text style={styles.subTextStyle}>
          Luck Favors the Bold! Are You Ready?
        </Text>

        <FlatList
          data={lotteries}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={{ marginVertical: 10 }}></View>
        <Text style={[styles.textStyle, { marginTop: 5 }]}>
          Play Instant Games
        </Text>
        <Text style={styles.subTextStyle}>
          You Can't Win if You Don't Play!
        </Text>
        <FlatList
          data={instantGames}
          renderItem={instantGamesItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  image: {
    width: 90,
    height: 50,
    resizeMode: "contain",
  },
  textStyle: {
    fontWeight: "900",
    letterSpacing: 2,
    fontSize: 28,
  },
  subTextStyle: {
    fontWeight: "400",
    marginVertical: 5,
    letterSpacing: 2,
    fontSize: 14,
  },
});

export default LandingScreen;
