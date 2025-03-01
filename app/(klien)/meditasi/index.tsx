import React from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Gunakan router dari expo-router

const data = [
  { id: "1", title: "Meditasi Pernapasan", desc: "Teknik pernapasan untuk menenangkan pikiran.", color: "#90D7C2", icon: require("../../../assets/images/leaf.png") },
  { id: "2", title: "Meditasi Tidur", desc: "Relaksasi dengan suara alam untuk meningkatkan kualitas tidur.", color: "#C49DBE", icon: require("../../../assets/images/moon.png") },
  { id: "3", title: "Meditasi Pagi", desc: "Latihan kesadaran dan afirmasi untuk semangat di pagi hari.", color: "#8ED4E2", icon: require("../../../assets/images/sun.png") },
  { id: "4", title: "Meditasi Self-Love", desc: "Afirmasi positif untuk meningkatkan self-esteem.", color: "#F5AFC3", icon: require("../../../assets/images/heart.png") },
];

const MeditationScreen = () => {
  const router = useRouter(); // Inisialisasi router

  const handleBack = () => {
    router.back(); // Menggunakan router.back() untuk kembali ke halaman sebelumnya
  };

  const handleReload = () => {
    console.log("Reload data...");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Meditasi</Text>

        <TouchableOpacity onPress={handleReload} style={styles.iconButton}>
          <Ionicons name="reload-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="gray" style={styles.searchIcon} />
        <TextInput placeholder="Cari Journal..." style={styles.searchInput} placeholderTextColor="#999" />
      </View>

      {/* Meditation List */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {data.map((item) => (
          <TouchableOpacity key={item.id} style={[styles.card, { backgroundColor: item.color }]} onPress={() => router.push("../meditasi/meditation")}>
            <View style={styles.iconContainer}>
              <Image source={item.icon} style={styles.iconImage} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 15,
  },
  iconButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#555",
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    borderRadius: 15,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  iconContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 50,
    padding: 10,
    marginRight: 15,
  },
  iconImage: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  cardDesc: {
    fontSize: 14,
    color: "white",
    flexShrink: 1,
  },
});

export default MeditationScreen;
