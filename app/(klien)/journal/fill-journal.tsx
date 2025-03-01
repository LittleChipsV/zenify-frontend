import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const journalQuestions = [
  "Apa Tujuan Jurnal Ini?",
  "Apa Yang Membuatmu Merasa Sedih Hari Ini?",
  "Bagaimana Tubuhmu Merespons Kesedihan Ini?",
  "Apa Yang Biasanya Kulakukan Saat Sedih? Apakah Itu Membantuku Merasa Lebih Baik?",
  "Apa Yang Bisa Kulakukan Untuk Menenangkan Diri Dengan Cara Yang Lebih Sehat?",
  "Jika Temanmu Merasa Seperti Ini, Apa Yang Akan Kulakukan Padanya?",
];

const JournalScreen = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = journalQuestions.length;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      router.push("./finish-journal");
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/")} style={styles.closeButton}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Konten */}
      <View style={styles.content}>
        {/* Progress Bar */}
        <View style={styles.progressBar}>
          {Array.from({ length: totalSteps }, (_, index) => (
            <View
              key={index}
              style={[
                styles.progressDot,
                index < step ? styles.progressActive : styles.progressInactive,
              ]}
            />
          ))}
        </View>

        {/* Step Counter */}
        <Text style={styles.stepIndicator}>{step}/{totalSteps}</Text>

        {/* Tampilan untuk Slide 1/6 */}
        {step === 1 ? (
          <>
            <Text style={styles.title}>Ketika Aku Sedih</Text>
            <Text style={styles.subtitle}>Journal • 6 Halaman</Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Apa Tujuan Jurnal Ini?</Text>
              <Text style={styles.sectionText}>
                Jurnal ini membantuku memahami penyebab kesedihan, mengevaluasi kebiasaanku saat sedih,
                dan menemukan cara yang lebih sehat untuk mengelola emosi.
              </Text>
            </View>
            <View style={styles.separator} />

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Mengapa Perlu Menulis Jurnal Ini?</Text>
              <Text style={styles.sectionText}>
                Menulis membantuku mengenali dan melepaskan emosi, melihat situasi lebih jelas, serta mencari
                cara terbaik untuk menenangkan diri.
              </Text>
            </View>
            <View style={styles.separator} />

            {/* Tombol Lanjutkan */}
            <TouchableOpacity onPress={handleNext} style={styles.startButton}>
              <Text style={styles.startButtonText}>Lanjutkan Journal [1/6]</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            {/* Tampilan untuk Slide 2/6 sampai 6/6 */}
            <Text style={styles.question}>{journalQuestions[step - 1]}</Text>
            <Text style={styles.description}>
              (Tuliskan Perasaanmu, Apa Yang Terjadi, Dan Bagaimana Kamu Menghadapinya.)
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Tulis Sesuatu Disini..."
              multiline
            />

            {/* Tombol Navigasi */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={handlePrev}
                style={[styles.prevButton, step === 1 && styles.disabledButton]}
                disabled={step === 1}
              >
                <Text style={[styles.buttonTextWhite, step === 1 && styles.disabledText]}>
                  Sebelumnya
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
                <Text style={styles.buttonTextBlue}>{step === totalSteps ? "Selesai" : "Selanjutnya"}</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default JournalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FAFF",
  },
  header: {
    height: 120, // Tambah tinggi header
    backgroundColor: "#E3F2FF",
    justifyContent: "flex-end", // Pastikan elemen ada di bawah header
    paddingHorizontal: 15,
    paddingBottom: 20, // Tambah padding bawah untuk memberi jarak ke bawah
  },
  closeButton: {
    alignSelf: "flex-start",
  },
  content: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    
  },
  progressBar: {
    flexDirection: "row",
    marginVertical: 10,
  },
  progressDot: {
    flex: 1,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  progressActive: {
    backgroundColor: "#5DB9F8",
  },
  progressInactive: {
    backgroundColor: "#AEDCFB",
  },
  stepIndicator: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
    alignSelf: "flex-end",
  },
  disabledButton: {
    backgroundColor: "#D3D3D3", // Warna abu-abu terang untuk tombol disabled
  },
  disabledText: {
    color: "#A0A0A0", // Warna abu-abu gelap untuk teks disabled
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#183368",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  sectionText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#777",
    marginTop: 5,
  },
  question: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginTop: 7,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    color: "#777",
    marginTop: 5,
  },
  input: {
    height: 120,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    marginTop: 15,
    textAlignVertical: "top",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    marginBottom: 20,
  },
  startButton: {
    marginTop: "auto",
    backgroundColor: "#0085FF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  startButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  prevButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#0085FF",
    alignItems: "center",
  },
  nextButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0085FF",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  buttonTextWhite: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 8,
    marginBottom  : 20
  },
  buttonTextBlue: {
    color: "#0085FF",
    fontSize: 14,
    fontWeight: "600",
  },
});
