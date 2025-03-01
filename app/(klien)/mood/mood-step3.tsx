import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const MoodStep3 = () => {
  const router = useRouter();
  const [selectedSources, setSelectedSources] = useState<number[]>([]);

  const sources = [
    { id: 1, label: "Pekerjaan" },
    { id: 2, label: "Keluarga" },
    { id: 3, label: "Teman" },
    { id: 4, label: "Diri Sendiri" },
    { id: 5, label: "Lingkungan" },
    { id: 6, label: "Keuangan" },
    { id: 7, label: "Kesehatan" },
    { id: 8, label: "Hubungan Sosial" },
  ];

  const toggleSource = (id: number) => {
    setSelectedSources((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
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
            <View key={i} style={[styles.progressBar, styles.activeProgress]} />
          ))}
        </View>
      </View>

      <Text style={styles.title}>Menurut kamu, emosi tersebut datang dari mana?</Text>

      <ScrollView contentContainerStyle={styles.grid}>
        {sources.map((source) => (
          <TouchableOpacity
            key={source.id}
            style={[
              styles.sourceItem,
              selectedSources.includes(source.id) && styles.selectedSource,
            ]}
            onPress={() => toggleSource(source.id)}
          >
            <Text style={styles.sourceText}>{source.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.nextButton} onPress={() => router.push("/mood/mood-result")}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "white", padding: 20 },
    header: { flexDirection: "row", alignItems: "center", marginBottom: 20, paddingTop: 70, // Tambahkan padding atas agar tidak terpotong
    }, // Jarak lebih jauh
    progressBarContainer: { flexDirection: "row", flex: 1, marginLeft: 10,},
    progressBar: { flex: 1, height: 10, borderRadius: 5, marginHorizontal: 2, },
    activeProgress: { backgroundColor: "#5DB9F8",  },

    title: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginBottom: 50, marginTop: 20 }, // Jarak lebih jauh dari progress bar
    grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
    
    sourceItem: { 
      paddingHorizontal: 15, 
      paddingVertical: 8, 
      borderWidth: 1, 
      borderColor: "gray", 
      borderRadius: 10, 
      marginBottom: 12 
    },
    selectedSource: { borderColor: "#5DB9F8", backgroundColor: "#E0F2FE" },
    sourceText: { fontSize: 14 },
  
    nextButton: { backgroundColor: "#5DB9F8", padding: 15, borderRadius: 10, marginTop: 30, bottom: 30 }, // Lebih luas
    nextText: { color: "white", textAlign: "center", fontSize: 16, fontWeight: "600" },
  });
  

export default MoodStep3;
