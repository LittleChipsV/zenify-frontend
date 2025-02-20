import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const MoodStep2 = () => {
  const router = useRouter();
  const [selectedEmotions, setSelectedEmotions] = useState<number[]>([]);

  const emotions = [
    { id: 1, label: "Antusias" },
    { id: 2, label: "Senang" },
    { id: 3, label: "Tenang" },
    { id: 4, label: "Percaya Diri" },
    { id: 5, label: "Bangga" },
    { id: 6, label: "Cemas" },
    { id: 7, label: "Sedih" },
    { id: 8, label: "Kesal" },
    { id: 9, label: "Takut" },
    { id: 10, label: "Frustrasi" },
  ];

  const toggleEmotion = (id: number) => {
    setSelectedEmotions((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header dengan Progress Bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/mood")}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.progressBarContainer}>
          {[...Array(3)].map((_, i) => (
            <View
              key={i}
              style={[styles.progressBar, i < 2 ? styles.activeProgress : styles.inactiveProgress]}
            />
          ))}
        </View>
      </View>

      <Text style={styles.title}>Apa saja emosi yang sedang kamu rasakan?</Text>

      <ScrollView>
        <Text style={styles.sectionTitle}>Emosi Positif</Text>
        <View style={styles.grid}>
          {emotions.slice(0, 5).map((emotion) => (
            <TouchableOpacity
              key={emotion.id}
              style={[
                styles.emotionItem,
                selectedEmotions.includes(emotion.id) && styles.selectedEmotion,
              ]}
              onPress={() => toggleEmotion(emotion.id)}
            >
              <Text style={styles.emotionText}>{emotion.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Emosi Negatif</Text>
        <View style={styles.grid}>
          {emotions.slice(5).map((emotion) => (
            <TouchableOpacity
              key={emotion.id}
              style={[
                styles.emotionItem,
                selectedEmotions.includes(emotion.id) && styles.selectedEmotion,
              ]}
              onPress={() => toggleEmotion(emotion.id)}
            >
              <Text style={styles.emotionText}>{emotion.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.nextButton} onPress={() => router.push("./mood-step3")}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "white", padding: 20 },
    header: { flexDirection: "row", alignItems: "center", marginBottom: 20, paddingTop: 70, // Tambahkan padding atas agar tidak terpotong
    }, // Lebih jauh ke bawah
    progressBarContainer: { flexDirection: "row", flex: 1, marginLeft: 10 },
    progressBar: { flex: 1, height: 10, borderRadius: 5, marginHorizontal: 2 },
    activeProgress: { backgroundColor: "#5DB9F8" },
    inactiveProgress: { backgroundColor: "#AEDCFB" },
  
    title: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginBottom: 50, marginTop: 20  }, // Lebih jauh dari progress bar
    sectionTitle: { fontSize: 16, fontWeight: "bold", marginTop: 15, marginBottom: 10 }, // Lebih jauh antar teks
  
    grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
    emotionItem: { 
      paddingHorizontal: 15, 
      paddingVertical: 8, 
      borderWidth: 1, 
      borderColor: "gray", 
      borderRadius: 10, 
      marginBottom: 12 
    },
    selectedEmotion: { borderColor: "#5DB9F8", backgroundColor: "#E0F2FE" },
    emotionText: { fontSize: 14 },
  
    nextButton: { backgroundColor: "#5DB9F8", padding: 15, borderRadius: 10, marginTop: 30, bottom: 30 }, // Jarak lebih luas
    nextText: { color: "white", textAlign: "center", fontSize: 16, fontWeight: "600" },
  });
  
export default MoodStep2;
