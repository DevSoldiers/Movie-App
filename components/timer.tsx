import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <View style={styles.container}>
      <View style={styles.timeBox}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{timeLeft.days}</Text>
        </View>
        <Text style={styles.label}>Days</Text>
      </View>
      <View style={styles.timeBox}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{timeLeft.hours}</Text>
        </View>
        <Text style={styles.label}>Hours</Text>
      </View>
      <View style={styles.timeBox}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{timeLeft.minutes}</Text>
        </View>
        <Text style={styles.label}>Minutes</Text>
      </View>
      <View style={styles.timeBox}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{timeLeft.seconds}</Text>
        </View>
        <Text style={styles.label}>Seconds</Text>
      </View>
    </View>
  );
};

export default CountdownTimer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  timeBox: {
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#162679",
    flex: 1,
  },
  timeContainer: {
    borderBottomEndRadius: 10,
    width: "100%",
    borderWidth: 1,
    backgroundColor: "white",
    borderBottomStartRadius: 10,
  },
  timeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#162679",

    textAlign: "center",
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    color: "white",
    paddingVertical: 2,
    fontWeight: "800",
  },
});
