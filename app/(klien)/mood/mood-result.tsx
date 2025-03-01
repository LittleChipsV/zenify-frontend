import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar } from "react-native"
import { Feather } from "@expo/vector-icons"
import { useRouter } from "expo-router"

export default function MoodTracker() {
  const router = useRouter();
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.push("../home")}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Mood Tracker</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Mood History Section */}
        <View style={styles.section}>
          {/* Mood History Card */}
          <View style={styles.moodHistoryCard}>
            {/* Section Header - Now inside the card */}
            <View style={styles.sectionHeaderContainer}>
              <View>
                <Text style={styles.sectionTitle}>Mood History</Text>
                <Text style={styles.sectionSubtitle}>Kenali Dan Pahami Emosimu Setiap Hari</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.seeAllLink}>Lihat Semua</Text>
              </TouchableOpacity>
            </View>

            {/* Mood Icons */}
            <View style={styles.moodIconsContainer}>
              {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map((day, index) => (
                <View key={day} style={styles.moodIconWrapper}>
                  <Image
                    source={
                      index < 3
                        ? require("../../../assets/images/senang.png")
                        : require("../../../assets/images/mood-empty.png")
                    }
                    style={[styles.moodIcon, { borderColor: index < 3 ? "black" : "#E5E5E5" }]}
                  />
                  <Text style={[styles.dayLabel, index < 2 ? { color: "#2F80ED" } : {}]}>{day}</Text>
                  {index < 6 && (
                    <View style={[styles.connectorLine, { backgroundColor: index < 3 ? "#000" : "#E5E5E5" }]} />
                  )}
                </View>
              ))}
            </View>

            <View style={styles.divider} />

            {/* Mood Entry */}
            <View style={styles.moodEntry}>
              <View style={styles.moodEntryLeft}>
                <Image
                  source={require("../../../assets/images/senang.png")}
                  style={[styles.moodEntryIcon, { backgroundColor: "#E0E0FF" }]}
                />
                <View style={styles.moodEntryInfo}>
                  <Text style={styles.moodEntryDate}>Rabu, 24 Jan 2024</Text>
                  <Text style={styles.moodEntryMood}>Senang</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.editButton}>
                <Feather name="edit-2" size={16} color="#2F80ED" />
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>

            {/* Mood Tags */}
            <View style={styles.moodTagsContainer}>
              <Text style={styles.moodTagLabel}>Emosi:</Text>
              <View style={styles.moodTags}>
                <View style={styles.moodTag}>
                  <Text style={styles.moodTagText}>Senang</Text>
                </View>
                <View style={styles.moodTag}>
                  <Text style={styles.moodTagText}>Antusias</Text>
                </View>
                <View style={styles.moodTag}>
                  <Text style={styles.moodTagText}>Gelisah</Text>
                </View>
              </View>
            </View>

            <View style={styles.moodTagsContainer}>
              <Text style={styles.moodTagLabel}>Faktor:</Text>
              <View style={styles.moodTags}>
                <View style={styles.moodTag}>
                  <Text style={styles.moodTagText}>Pekerjaan</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Recommendations Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Rekomendasi Untukmu</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllLink}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          {/* Changed to horizontal ScrollView */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.recommendationsScrollContainer}
          >
            <TouchableOpacity style={styles.recommendationCard}>
              <Image source={require("../../../assets/images/meditation.png")} style={styles.recommendationImage} />
              <Text style={styles.recommendationTitle}>Temukan Ketenangan</Text>
              <Text style={styles.recommendationSubtitle}>Meditasi • 7-10 min</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recommendationCard}>
              <Image source={require("../../../assets/images/meditation.png")} style={styles.recommendationImage} />
              <Text style={styles.recommendationTitle}>Temukan Ketenangan</Text>
              <Text style={styles.recommendationSubtitle}>Meditasi • 7-10 min</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recommendationCard}>
              <Image source={require("../../../assets/images/meditation.png")} style={styles.recommendationImage} />
              <Text style={styles.recommendationTitle}>Temukan Ketenangan</Text>
              <Text style={styles.recommendationSubtitle}>Journal • 11 Halaman</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Journal Recommendations Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Rekomendasi Journal</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllLink}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          {/* Changed to horizontal ScrollView */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.recommendationsScrollContainer}
          >
            <TouchableOpacity style={styles.recommendationCard}>
              <Image source={require("../../../assets/images/meditation.png")} style={styles.recommendationImage} />
              <Text style={styles.recommendationTitle}>Temukan Ketenangan</Text>
              <Text style={styles.recommendationSubtitle}>Journal • 11 Halaman</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recommendationCard}>
              <Image source={require("../../../assets/images/meditation.png")} style={styles.recommendationImage} />
              <Text style={styles.recommendationTitle}>Temukan Ketenangan</Text>
              <Text style={styles.recommendationSubtitle}>Journal • 11 Halaman</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recommendationCard}>
              <Image source={require("../../../assets/images/meditation.png")} style={styles.recommendationImage} />
              <Text style={styles.recommendationTitle}>Temukan Ketenangan</Text>
              <Text style={styles.recommendationSubtitle}>Journal • 11 Halaman</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 30,
  },
  backButton: {
    padding: 4,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    paddingBottom: 20,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  sectionSubtitle: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  seeAllLink: {
    fontSize: 12,
    color: "#2F80ED",
    fontWeight: "500",
  },
  moodHistoryCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  moodIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  moodIconWrapper: {
    alignItems: "center",
    position: "relative",
    width: 40,
  },
  moodIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginBottom: 4,
    borderWidth: 3,
  },
  connectorLine: {
    position: "absolute",
    top: 18,
    right: -24,
    width: 24,
    height: 3,
    backgroundColor: "#E5E5E5",
  },
  dayLabel: {
    fontSize: 12,
    color: "#666",
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginVertical: 16,
  },
  moodEntry: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  moodEntryLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  moodEntryIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    borderColor: "black",
    borderWidth: 3,
  },
  moodEntryInfo: {
    marginLeft: 12,
  },
  moodEntryDate: {
    fontSize: 12,
    color: "#666",
  },
  moodEntryMood: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    marginTop: 2,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  editButtonText: {
    fontSize: 12,
    color: "#2F80ED",
    marginLeft: 4,
    fontWeight: "500",
  },
  moodTagsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 5,
  },
  moodTagLabel: {
    fontSize: 14,
    color: "#000",
    marginRight: 8,
    width: 50,
  },
  moodTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  moodTag: {
    backgroundColor: "#F0F7FF",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#149FFF",
  },
  moodTagText: {
    fontSize: 12,
    color: "#2F80ED",
    fontWeight: "500",
  },
  // Removed the recommendationsContainer style since we're using ScrollView now
  recommendationsScrollContainer: {
    paddingRight: 16, // Add some padding at the end for better UX
  },
  recommendationCard: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    width: 150,
  },
  recommendationImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },
  recommendationSubtitle: {
    fontSize: 14,
    color: "#555",
  },
})