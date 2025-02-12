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
  const flatListRef = useRef<FlatList<any> | null>(null);
  const router = useRouter();
  const { width, height } = useWindowDimensions();

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
      {/* Layer Putih Menutupi 80% Layar */}
      <View style={styles.whiteLayer}>
        {/* FlatList untuk Slider */}
        <FlatList
          ref={flatListRef}
          data={slides}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.slide, { width }]}>
              <Image
                source={item.image}
                style={[styles.image, { width: width * 0.8, height: height * 0.35 }]}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
          onMomentumScrollEnd={(event) => {
            const index = Math.round(event.nativeEvent.contentOffset.x / width);
            setActiveIndex(index);
          }}
        />

        {/* Indikator Slider */}
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                activeIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>
      </View>

      {/* Background Biru */}
      <View style={styles.blueBackground}>
        {/* Tombol di Background Biru (DIPOSISIKAN DI BAGIAN PALING BAWAH) */}
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
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BUTTON_BG_COLOR, // Background biru di belakang
  },
  whiteLayer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "80%", // Hanya menutupi 80% layar, sisanya biru
    backgroundColor: "#fff",
    borderBottomLeftRadius: 30, // Membentuk lengkungan di bagian bawah
    borderBottomRightRadius: 30,
    alignItems: "center",
    paddingVertical: 20,
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    color: "#333",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    color: "#666",
    paddingHorizontal: 40,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#BFE6FF",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#008DD5",
    width: 20,
    height: 8,
    borderRadius: 5,
  },
  blueBackground: {
    flex: 1, // Sisa layar 20% tetap biru
    justifyContent: "flex-end", // Memastikan tombol tetap di bawah
    alignItems: "center",
    paddingBottom: 30, // Biar tombolnya nggak terlalu mepet ke bawah
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    position: "absolute",
    bottom: 80, // Naik sedikit dari bawah
    gap: 40, // Jarak antar tombol lebih rapat
  },
  signUpButton: {
    borderWidth: 1,
    borderColor: TEXT_COLOR,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  signUpText: {
    color: TEXT_COLOR,
    fontWeight: "bold",
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: TEXT_COLOR,
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 8,
  },
  signInText: {
    color: BUTTON_BG_COLOR,
    fontWeight: "bold",
    fontSize: 16,
  },
});
