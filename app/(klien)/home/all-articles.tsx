import React, { useState } from "react";
import { 
  View, Text, Image, TextInput, FlatList, TouchableOpacity, StyleSheet 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Tipe data untuk artikel
type Article = {
  id: string;
  title: string;
  image: any;
  description: string;
  category: string;
};

// Data Artikel Dummy
const articles: Article[] = [
  { id: "1", title: "Sleep & Mental Health", image: require("../../../assets/images/sleep.png"), description: "Poor sleep can take a toll on your mental health...", category: "Mental Health" },
  { id: "2", title: "Mindfulness Practices", image: require("../../../assets/images/sleep.png"), description: "Learn the art of mindfulness.", category: "Mental Health" },
  { id: "3", title: "Best Mental Podcasts", image: require("../../../assets/images/sleep.png"), description: "Top mental health podcasts.", category: "Podcast" },
  { id: "4", title: "Famous Artists & Anxiety", image: require("../../../assets/images/sleep.png"), description: "How artists cope with anxiety.", category: "Artist" },
  { id: "5", title: "Upcoming Wellness Events", image: require("../../../assets/images/sleep.png"), description: "Stay updated on wellness events.", category: "Event" },
];

// Daftar Kategori
const categories = ["All", "Mental Health", "Podcast", "Artist", "Event"];

// Komponen Kartu Artikel
const ArticleCard: React.FC<{ item: Article }> = React.memo(({ item }) => {
  const router = useRouter();
  return (
    <TouchableOpacity 
      style={styles.articleCard} 
      onPress={() => router.push({ pathname: "../home/articles", params: { id: item.id, title: item.title, description: item.description } })}
    >
      <Image source={item.image} style={styles.articleImage} />
      <View style={styles.articleContent}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
});

const HomeScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const router = useRouter();

  // Filter Artikel Berdasarkan Kategori
  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/(klien)/home/") } style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Zenify Artikel</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>

      {/* Tab Filter */}
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContainer}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => setActiveCategory(item)} 
            style={styles.tabButton}
          >
            <Text style={[styles.tabText, activeCategory === item && styles.activeTabText]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Artikel List */}
      <FlatList
  data={filteredArticles}
  renderItem={({ item }) => <ArticleCard item={item} />}
  keyExtractor={(item) => item.id}
  numColumns={2}
  columnWrapperStyle={filteredArticles.length > 1 ? { justifyContent: "space-between", gap: 8 } : { justifyContent: "flex-start" }}
  contentContainerStyle={styles.articleList}
/>
    </View>
  );
};


// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingTop: 60,
  },
  searchBar: {
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    alignItems: "flex-start", // Memastikan item tetap di kiri atas
    flexGrow: 1,
    flexWrap: "wrap", // Mencegah elemen tunggal turun ke bawah
    height: 40,
  },
  tabButton: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  tabWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginBottom: 10,
  },
  tabText: {
    fontSize: 14,
    color: "gray",
  },
  activeTabText: {
    fontWeight: "bold",
    color: "black",
  },
  backButton: {
    position: "absolute",
    left: 0,
    padding: 10,
    top: 50
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1, 
  },
  activeTabUnderline: {
    width: "100%",
    height: 2,
    backgroundColor: "black",
    marginTop: 5,
  },
  articleList: {
    paddingBottom: 20,
  },
  articleCard: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    width: "48%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  articleImage: {
    width: "100%",
    height: 100,
  },
  articleContent: {
    padding: 10,
  },
  articleTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
  articleDescription: {
    color: "gray",
    fontSize: 12,
    marginTop: 5,
  },
});

export default HomeScreen;
