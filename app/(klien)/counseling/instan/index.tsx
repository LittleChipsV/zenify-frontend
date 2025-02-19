import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const doctors = [
  {
    id: 1,
    name: "Dr. Dimas Hakim, M.Psi., Psikolog",
    specialty: "Manajemen Emosi & Kontrol Diri",
    rating: 4.8,
    time: "10.00 - 21.00 WIB",
    isOnline: true,
  },
  {
    id: 2,
    name: "Dr. Irfan Hakim, M.Psi., Psikolog",
    specialty: "Manajemen Emosi & Kontrol Diri",
    rating: 4.8,
    time: "10.00 - 22.00 WIB",
    isOnline: true,
  },
  {
    id: 3,
    name: "Dr. Dimas Hakim, M.Psi., Psikolog",
    specialty: "Manajemen Emosi & Kontrol Diri",
    rating: 4.8,
    time: "10.00 - 22.00 WIB",
    isOnline: true,
  },
  {
    id: 4,
    name: "Dr. Dimas Hakim, M.Psi., Psikolog",
    specialty: "Manajemen Emosi & Kontrol Diri",
    rating: 4.8,
    time: "10.00 - 22.00 WIB",
    isOnline: true,
  },
  {
    id: 5,
    name: "Dr. Dimas Hakim, M.Psi., Psikolog",
    specialty: "Manajemen Emosi & Kontrol Diri",
    rating: 4.8,
    time: "10.00 - 22.00 WIB",
    isOnline: true,
  },
  {
    id: 6,
    name: "Dr. Dimas Hakim, M.Psi., Psikolog",
    specialty: "Manajemen Emosi & Kontrol Diri",
    rating: 4.8,
    time: "10.00 - 22.00 WIB",
    isOnline: true,
  },
  {
    id: 7,
    name: "Dr. Dimas Hakim, M.Psi., Psikolog",
    specialty: "Manajemen Emosi & Kontrol Diri",
    rating: 4.8,
    time: "10.00 - 22.00 WIB",
    isOnline: true,
  },
  {
    id: 8,
    name: "Dr. Dimas Hakim, M.Psi., Psikolog",
    specialty: "Manajemen Emosi & Kontrol Diri",
    rating: 4.8,
    time: "10.00 - 22.00 WIB",
    isOnline: true,
  },
];

const CounselingScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Konseling</Text>
        {/* <TouchableOpacity onPress={() => router.push("/counseling/chat")}>
        <Ionicons name="chatbubble-ellipses" size={24} color="black" />
        </TouchableOpacity> */}
      </View>

      {/* List Dokter */}
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[styles.card, index !== doctors.length - 1 && styles.cardBorder]}
            onPress={() => router.push(`/?${item.id}`)} // 🔥 Navigasi ke halaman detail
          >
            <Image source={require("../../../../assets/images/Dokter.png")} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.specialty}>{item.specialty}</Text>
              <View style={styles.statusRow}>
                {/* Indikator Online */}
                {item.isOnline && <View style={styles.onlineIndicator} />}
                <Text style={styles.rating}>⭐ {item.rating}</Text>
                <Text style={styles.divider}>|</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// ✅ Perbaiki styles agar tidak ada shadow dan ada garis pemisah antar card
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingTop: 70, // Tambahkan padding atas agar tidak terpotong
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
  },
  cardBorder: {
    borderBottomWidth: 1,  // ✅ Tambahkan garis bawah
    borderBottomColor: "#ddd",  // Warna abu-abu muda untuk pemisah
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  specialty: {
    fontSize: 14,
    color: "gray",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  onlineIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "green",
    marginRight: 6,
  },
  rating: {
    fontSize: 14,
    color: "#FFA500",
  },
  divider: {
    marginHorizontal: 8,
    fontSize: 14,
    color: "gray",
  },
  time: {
    fontSize: 14,
    color: "#1E90FF",
    fontWeight: "bold",
  },
});

export default CounselingScreen;
