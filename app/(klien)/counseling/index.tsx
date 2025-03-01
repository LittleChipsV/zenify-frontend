import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router"; 

const steps = [
  { id: 1, title: "Pilih Jenis Konseling", description: "Tentukan apakah kamu ingin Counseling Instan untuk konsultasi cepat atau Counseling Premium untuk sesi yang lebih mendalam." },
  { id: 2, title: "Isi Informasi Diri", description: "Berikan informasi singkat mengenai perasaan atau masalah yang ingin dibahas agar konselor dapat memahami kebutuhanmu." },
  { id: 3, title: "Hubungi Konselor", description: "• Instan: Langsung terhubung dengan konselor dalam beberapa menit.\n• Premium: Pilih jadwal yang sesuai dan konselor yang kamu inginkan." },
  { id: 4, title: "Mulai Sesi Konseling", description: "Berbincang dengan konselor melalui chat, telepon, atau video call sesuai preferensimu." },
  { id: 5, title: "Dapatkan Panduan & Rekomendasi", description: "Setelah sesi, kamu akan mendapatkan insight, langkah-langkah praktis, atau latihan yang bisa membantu meningkatkan kesejahteraan mentalmu." },
  { id: 6, title: "Pantau Perkembanganmu", description: "Simpan catatan sesi, lakukan refleksi dengan Mood Tracker, dan lanjutkan sesi lanjutan jika diperlukan." },
];

const KonselingScreen = () => {
  const router = useRouter(); // ✅ Define router

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Konseling</Text>
      </View>

      {/* Pilihan Konseling */}
      <View style={styles.optionContainer}>
      <TouchableOpacity
          style={[styles.optionBox, styles.activeOption]}
          onPress={() => router.push("./counseling/instan/")}>
          <Text style={styles.optionTitleI}>⚡ Instan</Text>
          <Text style={styles.optionDescI}>Butuh bantuan segera? Temukan solusi instan untuk emosimu.</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.optionBox}>
          <Text style={styles.optionTitle}>🔵 Premium</Text>
          <Text style={styles.optionDesc}>Akses layanan premium untuk perjalanan mental yang lebih baik.</Text>
        </TouchableOpacity>
      </View>

      {/* Alur Konseling */}
      <View style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <View key={step.id} style={styles.stepWrapper}>
            {/* Garis vertikal */}            
            {/* Lingkaran Nomor */}
            <View style={styles.circle}>
              <Text style={styles.circleText}>{step.id}</Text>
            </View>

            {/* Kotak Teks */}
            <View style={styles.stepBox}>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepDesc}>{step.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default KonselingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  stepContent: {
    flex: 1,
    marginLeft: 5, // Geser teks sedikit ke kanan agar tidak mepet garis
  },
  header: {
    alignItems: "center",
    paddingVertical: 10,
    paddingTop: 60, // Tambahkan padding atas agar tidak terpotong
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  optionBox: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderColor: "#BFE6FF",
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: "#fff",
  },
  activeOption: {
    backgroundColor: "#00AEEF",
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#008DD5",
  },
  optionDesc: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  optionTitleI: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  optionDescI: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
  },
  stepsContainer: {
    marginTop: 10,
  },
  stepWrapper: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    marginBottom: 20,
  },

  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#F9FCFF",
    borderWidth: 1,
    borderColor: "#BFE6FF",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 6, // Menempel ke kiri
    zIndex: 1,
  },
  circleText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#008DD5",
  },
  stepBox: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#BFE6FF",
    borderRadius: 10,
    padding: 15,
    marginLeft: 20, // Menjaga jarak agar lingkaran masuk ke dalam border teks
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    paddingLeft: 10,
  },
  stepDesc: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    paddingLeft: 10,
  },
});
