    import React, { useState } from "react";
    import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
    import { useRouter } from "expo-router";
    import { Ionicons } from "@expo/vector-icons";

    const MoodStep1 = () => {
    const router = useRouter();
    const [selectedMood, setSelectedMood] = useState<number | null>(null);

    const moods = [
        { id: 1, image: require("../../../assets/images/senang.png"), label: "Sangat Buruk" },
        { id: 2, image: require("../../../assets/images/sangatsenang.png"), label: "Sangat Buruk" },
        { id: 3, image: require("../../../assets/images/flat.png"), label: "Sangat Buruk" },
        { id: 4, image: require("../../../assets/images/buruk.png"), label: "Sangat Buruk" },
        { id: 5, image: require("../../../assets/images/sangatburuk.png"), label: "Sangat Buruk" },
        { id: 6, image: require("../../../assets/images/biasaaja.png"), label: "Sangat Buruk" },
        { id: 7, image: require("../../../assets/images/marah.png"), label: "Sangat Buruk" },
        { id: 8, image: require("../../../assets/images/menghela.png"), label: "Sangat Buruk" },
        { id: 9, image: require("../../../assets/images/menghela.png"), label: "Sangat Buruk" },
    ];

    return (
        <View style={styles.container}>
        {/* Header dengan Progress Bar */}
        <View style={styles.header}>
            <TouchableOpacity onPress={() => router.push("/dashboard/home")}> 
            <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.progressBarContainer}>
            {[...Array(3)].map((_, i) => (
                <View
                key={i}
                style={[styles.progressBar, i === 0 ? styles.activeProgress : styles.inactiveProgress]}
                />
            ))}
            </View>
        </View>
        
        <Text style={styles.title}>Bagaimana perasaanmu saat ini?</Text>
        <Text style={styles.subtitle}>Jawabanmu akan membantu kami memberikan rekomendasi layanan sesuai kendalamu.</Text>

        <View style={styles.grid}>
            {moods.map((mood) => (
            <TouchableOpacity
                key={mood.id}
                style={[styles.moodItem, selectedMood === mood.id && styles.selectedMood]}
                onPress={() => setSelectedMood(mood.id)}
            >
                <Image source={mood.image} style={styles.moodImage} />
                <Text style={styles.moodText}>{mood.label}</Text>
            </TouchableOpacity>
            ))}
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={() => router.push("./MoodStep2")}> 
            <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
        </View>
    );
    };

    const styles = StyleSheet.create({
        container: { flex: 1, backgroundColor: "white", padding: 20 },
        header: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
        progressBarContainer: { flexDirection: "row", flex: 1, marginLeft: 10 },
        progressBar: { flex: 1, height: 10, borderRadius: 5, marginHorizontal: 2 },
        activeProgress: { backgroundColor: "#5DB9F8" },
        inactiveProgress: { backgroundColor: "#AEDCFB" },
        title: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
        subtitle: { textAlign: "center", color: "gray", marginBottom: 20 },
        
        grid: { 
          flexDirection: "row", 
          flexWrap: "wrap", 
          justifyContent: "space-between", 
          paddingHorizontal: 10
        },
      
        moodItem: { 
          alignItems: "center", 
          width: "30%", // Buat lebih lebar
          aspectRatio: 1, // Pastikan persegi panjang
          borderWidth: 1, 
          borderColor: "gray", 
          borderRadius: 15, // Membuatnya lebih membulat
          paddingVertical: 15, // Menambah tinggi sedikit
          backgroundColor: "white",
          marginBottom: 15, 
          justifyContent: "center",
          marginTop: 15,

        },
      
        selectedMood: { borderColor: "#5DB9F8", backgroundColor: "#E0F2FE" },
        
        moodImage: { 
          width: 40, // Ukuran lebih kecil
          height: 40, 
          marginBottom: 10
        },
      
        moodText: { fontSize: 12, fontWeight: "600", textAlign: "center" },
      
        nextButton: { 
            width: "100%", 
            padding: 15, 
            borderRadius: 10, 
            borderWidth: 2, 
            borderColor: "#5DB9F8", 
            backgroundColor: "transparent", 
            alignItems: "center",
            marginTop: 125,

          },
        nextText: 
        { color: "#5DB9F8", textAlign: "center", fontSize: 16, fontWeight: "600",}
      });

    export default MoodStep1;
