import { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ViewToken } from "react-native";

const { width } = Dimensions.get("window");

// Tipe data untuk item jurnal
type JournalItem = {
  id: string;
  title: string;
  description?: string;
  pages: number;
};

// Data dummy jurnal utama
const journalSlider: JournalItem[] = [
  { id: "1", title: "Ketika Aku Sedih", description: "Apa yang biasanya kamu lakukan saat sedih?", pages: 6 },
  { id: "2", title: "Mengenali Emosi", description: "Bagaimana cara mengelola emosi dengan lebih baik?", pages: 5 },
  { id: "3", title: "Mencari Kebahagiaan", description: "Apa yang membuatmu bahagia?", pages: 7 },
];

// Data dummy jurnal detail topik
const journalTopics: JournalItem[] = [
  { id: "1", title: "Temukan Ketenangan", pages: 11 },
  { id: "2", title: "Atasi Kecemasan", pages: 9 },
  { id: "3", title: "Kelola Stres", pages: 10 },
  { id: "4", title: "Jaga Keseimbangan", pages: 8 },
];

const ListJournal = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList<JournalItem>>(null);

  // Handle perubahan halaman slider
  const onViewRef = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index ?? 0);
    }
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Refleksi Diri</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Slider Journal */}
      <FlatList
        ref={flatListRef}
        data={journalSlider}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: JournalItem }) => (
          <TouchableOpacity 
            style={styles.journalCard} 
            onPress={() => router.push(`./journal/${item.id}`)}
          >
            <View style={styles.journalImagePlaceholder} />
            <View style={styles.journalTextContainer}>
              <Text style={styles.journalTitle}>{item.title}</Text>
              <Text style={styles.journalDesc}>{item.description}</Text>
              <Text style={styles.journalPages}>{item.pages} Halaman</Text>
            </View>
          </TouchableOpacity>
        )}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Indikator Slider */}
      <View style={styles.pagination}>
        {journalSlider.map((_, index) => (
          <View 
            key={index} 
            style={[styles.dot, activeIndex === index ? styles.dotActive : styles.dotInactive]} 
          />
        ))}
      </View>

      {/* Detail Topik */}
      <Text style={styles.sectionTitle}>Detail Topik</Text>
      <Text style={styles.sectionDesc}>Kumpulan topik untuk journal pilihanmu!</Text>

      {/* List Jurnal */}
      <FlatList
        data={journalTopics}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }: { item: JournalItem }) => (
          <TouchableOpacity 
            style={styles.topicCard} 
            onPress={() => router.push(`./fill-journal?id=${item.id}`)}
          >
            <Image source={require('../../../assets/images/meditation.png')} style={styles.cardImage} />
            <Text style={styles.topicTitle}>{item.title}</Text>
            <Text style={styles.topicDesc}>Journal · {item.pages} Halaman</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingTop: 60,
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  journalCard: {
    width: width * 0.9,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  journalImagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    marginRight: 15,
  },
  journalTextContainer: {
    flex: 1,
  },
  journalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  journalDesc: {
    fontSize: 14,
    color: "#666",
    marginVertical: 5,
  },
  journalPages: {
    fontSize: 14,
    color: "#0085FF",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  dot: {
    width: 30,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: "#5DB9F8",
    width: 20,
  },
  dotInactive: {
    backgroundColor: "#AEDCFB",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginTop: 20,
  },
  sectionDesc: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
  },
  row: {
    justifyContent: "space-between",
  },
  topicCard: {
    flex: 1,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 5,
  },
  topicImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  topicTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  },
  topicDesc: {
    fontSize: 12,
    color: "#666",
  },
  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1, // Tambahkan border
    borderColor: "#E5E5E5", // Tambahkan warna border
    width: 150,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default ListJournal;
