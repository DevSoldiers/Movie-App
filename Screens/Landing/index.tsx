import InstantGamesCard from "@/components/cards/instantGamesCard";
import MovieCard from "@/components/cards/lotteryCards";
import LotteryCard from "@/components/cards/lotteryCards";
import useMoviesStore from "@/store/movieStore";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";

const LandingScreen = () => {
  const { data, error, fetchData, loading } = useMoviesStore();
  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }: any) => <MovieCard item={item} />;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.subTextStyle}>Popular Movies</Text>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={{ marginVertical: 10 }}></View>
        <Text style={styles.subTextStyle}>Shows You Might Like</Text>
        <FlatList
          data={data?.slice(30, 40)}
          renderItem={renderItem}
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
    fontWeight: "900",
    marginVertical: 5,
    letterSpacing: 2,
    fontSize: 20,
  },
});

export default LandingScreen;
