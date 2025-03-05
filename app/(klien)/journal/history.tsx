import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function JournalPage() {
  const [selectedMonth, setSelectedMonth] = useState("Februari 2025");
  const [filter, setFilter] = useState("Tanggal");
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header dengan background biru */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Catatan Journalmu</Text>
        </View>
        
        {/* Pilih Bulan */}
        <View style={styles.monthSelector}>
          <View>
            <Text style={styles.label}>Pilih bulan</Text>
            <Text style={styles.monthText}>{selectedMonth}</Text>
          </View>
          <View style={styles.navigationButtons}>
            <TouchableOpacity style={styles.navButton}>
              <Ionicons name="chevron-back" size={18} color="#0284C7" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Filter Dropdown */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Tampilkan Berdasarkan</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={filter}
            onValueChange={(itemValue) => setFilter(itemValue)}
            style={styles.picker}
            mode="dropdown"
            dropdownIconColor="#000" // Tambahkan ini
          >
            <Picker.Item label="Tanggal" value="Tanggal" />
            <Picker.Item label="Kategori" value="Kategori" />
          </Picker>
        </View>
      </View>

      {/* Placeholder Journal */}
      <View style={styles.journalPlaceholder}>
        <Image
          source={require("../../../assets/images/journal-placeholder.png")}
          style={styles.journalImage}
          resizeMode="contain"
        />
        <Text style={styles.journalText}>
          Belum ada journal yang selesai. Semua journalmu yang telah selesai
          akan tertampil disini. Yuk segera isi journalmu sekarang!
        </Text>
        <TouchableOpacity style={styles.startButton} onPress={() => router.push("./list-journal")}>
          <Text style={styles.startButtonText}>Mulai Journal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    backgroundColor: "#E0F2FE",
    paddingBottom: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 67,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  monthSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  label: {
    fontSize: 12,
    color: "#6B7280",
  },
  monthText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0284C7",
  },
  navigationButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  navButton: {
    backgroundColor: "#F1F5F9",
    padding: 6,
    borderRadius: 50,
    marginHorizontal: 4,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
  },
  picker: {
    height: 40,
    width: 120,
  },
  journalPlaceholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  journalImage: {
    width: 120,
    height: 160,
  },
  journalText: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 12,
  },
  startButton: {
    backgroundColor: "#3B82F6",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  startButtonText: {
    color: "#ffffff",
    fontWeight: "600",
  },
});
