import React from "react";
import { View, Image, ScrollView, StyleSheet, Pressable } from "react-native";
import { Appbar, Text, Card, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const ArticleScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Appbar.Header style={styles.header}>
        <Image source={{ uri: "https://via.placeholder.com/100x30" }} style={styles.logo} />
        <View style={styles.headerActions}>
          <Appbar.Action icon="magnify" onPress={() => {}} />
          <Appbar.Action icon="menu" onPress={() => {}} />
        </View>
      </Appbar.Header>

      {/* Navigation */}
      <View style={styles.navContainer}>
        {['MENTAL HEALTH', 'STORY', 'EVENT', 'FEATURED'].map((item, index) => (
          <Pressable key={index} style={styles.navItem}>
            <Text style={styles.navText}>{item}</Text>
          </Pressable>
        ))}
      </View>

      {/* Article */}
      <View style={styles.articleContainer}>
        <Text variant="headlineMedium" style={styles.title}>
          Manfaat Konseling Karyawan, Tingkatkan Produktivitas Kerja
        </Text>
        <Text style={styles.date}>10 May 2021</Text>
        <Image source={{ uri: "https://via.placeholder.com/300" }} style={styles.articleImage} />
        <Text style={styles.photoCredit}>Photo by Christina Morillo from Pexels</Text>
      </View>

      {/* Banner */}
      <Card style={styles.banner}>
        <Card.Content>
          <Image source={{ uri: "https://via.placeholder.com/100x40" }} style={styles.bannerLogo} />
          <Text variant="titleMedium" style={styles.bannerTitle}>
            Kesehatan Mental Karyawan <Text style={styles.highlight}>Adalah Prioritas</Text>
          </Text>
          <Text style={styles.bannerText}>Ajak Perusahaanmu Gunakan Riliv for Company</Text>
          <Button mode="contained" style={styles.button}>
            Kontak Kami
          </Button>
        </Card.Content>
      </Card>

      {/* Article Content */}
      <View style={styles.articleContent}>
        <Text style={styles.content}><Text style={styles.bold}>Manfaat konseling karyawan</Text> – Jika Anda menganggap bahwa
          masalah kesehatan mental karyawan di luar tanggung jawab Anda, mungkin Anda benar.
        </Text>
        <Text style={styles.content}>
          Namun bagaimana jika masalah karyawan tersebut merambat ke kinerja dan produktivitas
          karyawan? Tentunya hal ini tidak dapat dibiarkan, bukan?
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    backgroundColor: "#FFF",
    elevation: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: "contain",
  },
  headerActions: {
    flexDirection: "row",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#F5F5F5",
  },
  navItem: {
    paddingVertical: 5,
  },
  navText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  articleContainer: {
    padding: 15,
  },
  title: {
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  articleImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 5,
  },
  photoCredit: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  banner: {
    backgroundColor: "#007bff",
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 20,
  },
  bannerLogo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  bannerTitle: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  highlight: {
    color: "#00FFAA",
  },
  bannerText: {
    fontSize: 14,
    color: "#FFF",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#FF6600",
  },
  articleContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  content: {
    fontSize: 14,
    color: "#000",
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default ArticleScreen;
