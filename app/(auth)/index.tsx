import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";

const AUTO_PLAY_INTERVAL = 3000;
const BUTTON_BG_COLOR = "#00AEEF";
const TEXT_COLOR = "#fff";

const slides = [
  {
    id: 1,
    title: "Layanan Terlengkap",
    description:
      "Jaga kesehatan mentalmu dengan Mood Tracker, Journey, dan Artikel Ruliv Story. Yuk, coba beragam layanannya sekarang!",
    image: require("../../assets/images/slide1.png"),
  },
  {
    id: 2,
    title: "Konseling Lebih Praktis",
    description:
      "Konseling online melalui ponsel tanpa repot berangkat dan menunggu lama. Cukup pesan, atur jadwal, dan pilih metode komunikasi.",
    image: require("../../assets/images/slide2.png"),
  },
  {
    id: 3,
    title: "Buat Dirimu Lebih Tenang",
    description:
      "Jalani hari lebih mindful, tenang, dan tidur lebih berkualitas dengan bantuan Self Care Meditasi, Lelap, dan Journal dari Ruliv.",
    image: require("../../assets/images/slide3.png"),
  },
];

const OnboardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();
  const { width } = useWindowDimensions();

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
      flatListRef.current?.scrollToOffset({
        offset: nextIndex * width,
        animated: true,
      });
      setActiveIndex(nextIndex);
    }, AUTO_PLAY_INTERVAL);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setActiveIndex(index);
        }}
      />

      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeIndex === index && styles.activeDot]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => router.push("/(auth)/signup")}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => router.push("/(auth)/signin")}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
    color: "gray",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: BUTTON_BG_COLOR,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 20,
    backgroundColor: BUTTON_BG_COLOR,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  signUpButton: {
    borderWidth: 1,
    borderColor: TEXT_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  signUpText: {
    color: TEXT_COLOR,
    fontWeight: "bold",
  },
  signInButton: {
    backgroundColor: TEXT_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  signInText: {
    color: BUTTON_BG_COLOR,
    fontWeight: "bold",
  },
});
