import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type HistoryItem = {
  id: string;
  name: string;
  specialty: string;
  image: any;
  type: "Video Call" | "Chat";
};

const historyData: HistoryItem[] = [
  {
    id: "1",
    name: "Dr. Dimas Hakim, M.Psi., Psikolog",
    specialty: "Manajemen Emosi & Kontrol Diri",
    image: require("../../../assets/images/sleep.png"),
    type: "Video Call",
  },
  {
    id: "2",
    name: "Dr. Dimas Hakim, M.Psi., Psikolog",
    specialty: "Manajemen Emosi & Kontrol Diri",
    image: require("../../../assets/images/sleep.png"),
    type: "Chat",
  },
  {
    id: "3",
    name: "Dr. Dimas Hakim, M.Psi., Psikolog",
    specialty: "Manajemen Emosi & Kontrol Diri",
    image: require("../../../assets/images/sleep.png"),
    type: "Video Call",
  },
  {
    id: "4",
    name: "Dr. Dimas Hakim, M.Psi., Psikolog",
    specialty: "Manajemen Emosi & Kontrol Diri",
    image: require("../../../assets/images/sleep.png"),
    type: "Chat",
  },
  {
    id: "5",
    name: "Dr. Dimas Hakim, M.Psi., Psikolog",
    specialty: "Manajemen Emosi & Kontrol Diri",
    image: require("../../../assets/images/sleep.png"),
    type: "Video Call",
  },
  {
    id: "6",
    name: "Dr. Dimas Hakim, M.Psi., Psikolog",
    specialty: "Manajemen Emosi & Kontrol Diri",
    image: require("../../../assets/images/sleep.png"),
    type: "Chat",
  },
  {
    id: "7",
    name: "Dr. Dimas Hakim, M.Psi., Psikolog",
    specialty: "Manajemen Emosi & Kontrol Diri",
    image: require("../../../assets/images/sleep.png"),
    type: "Video Call",
  },
  {
    id: "8",
    name: "Dr. Dimas Hakim, M.Psi., Psikolog",
    specialty: "Manajemen Emosi & Kontrol Diri",
    image: require("../../../assets/images/sleep.png"),
    type: "Chat",
  },
];

const HistoryScreen = () => {
  const [activeTab, setActiveTab] = useState<"Video Call" | "Chat">("Video Call");
  const filteredHistory = historyData.filter((item) => item.type === activeTab);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Riwayat Counseling</Text>
      </View>

      {/* Tab Buttons */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "Video Call" && styles.activeTab]}
          onPress={() => setActiveTab("Video Call")}
        >
          <Text style={[styles.tabText, activeTab === "Video Call" && styles.activeTabText]}>
            Video Call
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "Chat" && styles.activeTab]}
          onPress={() => setActiveTab("Chat")}
        >
          <Text style={[styles.tabText, activeTab === "Chat" && styles.activeTabText]}>Chat</Text>
        </TouchableOpacity>
      </View>

      {/* History List */}
      <FlatList
        data={filteredHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HistoryCard item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const HistoryCard = ({ item }: { item: HistoryItem }) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatarContainer}>
        <Image source={item.image} style={styles.avatar} />
        <View style={styles.onlineIndicator} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.specialty}>{item.specialty}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>{item.type === "Chat" ? "Lihat Chat" : "Rejoin Call"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8", // Beda warna agar shadow lebih terlihat
        paddingHorizontal: 20,
      },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingTop: 10,
  },
  backButton: {
    padding: 10,
    paddingTop: 70,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    flex: 1,
    textAlign: "center",
    marginRight: 35, // Menyesuaikan agar tetap di tengah
    paddingTop: 65,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,

    alignItems: "center",
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#0085FF",
  },
  tabText: {
    fontSize: 16,
    color: "#0085FF",
  },
  activeTabText: {
    color: "#FFF",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height:3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    position: "relative",
    marginRight: 12,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },
  onlineIndicator: {
    position: "absolute",
    top: 3,
    right: 3,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
    borderWidth: 2,
    borderColor: "#FFF",
  },
  cardContent: {
    flex: 1,
    paddingRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  specialty: {
    fontSize: 14,
    color: "#666",
  },
  chatButton: {
    backgroundColor: "#0085FF",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  chatButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginVertical: 8,
  },
});

export default HistoryScreen;
