import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Video, ResizeMode } from "expo-av";
const ProgressBar = require("react-native-progress/Bar").default;


const moods = [
  { id: 1, image: require("../../assets/images/buruk.png") },
  { id: 2, image: require("../../assets/images/sangatburuk.png") },
  { id: 3, image: require("../../assets/images/flat.png") },
  { id: 4, image: require("../../assets/images/senang.png") },
  { id: 5, image: require("../../assets/images/sangatsenang.png") },
];

const activities = [
  { id: 1, title: "Continue Journal", subtitle: "Grow in sadness", progress: 0.2 },
  { id: 2, title: "Continue Journal", subtitle: "Find happiness", progress: 0.5 },
];

const recommendations = [
  { id: 1, title: "Find Your Calm", subtitle: "Meditation • 7-10 mins", image: require("../../assets/images/meditation.png") },
  { id: 2, title: "Find Your Peace", subtitle: "Relaxation • 5-8 mins", image: require("../../assets/images/meditation.png") },
];

const articles = [
  { id: 1, title: "How Sleep Affects Mental Health", image: require("../../assets/images/sleep.png") },
  { id: 2, title: "The Power of Mindfulness", image: require("../../assets/images/sleep.png") },
];

const HomeScreen = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image source={require("../../assets/images/profile.jpg")} style={styles.profileImage} />
          <View>
            <Text style={styles.welcomeText}>Pacar Aghnie</Text>
            <Text style={styles.greetingText}>Welcome back! 👋</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* MOOD SECTION */}
      <View style={styles.moodSection}>
  <Text style={styles.greetingTextLarge}>Good Morning,</Text>
  <Text style={styles.moodText}>How Are You Feeling Today?</Text>

  <View style={styles.moodContainer}>
    {moods.map((mood) => (
      <TouchableOpacity key={mood.id} style={styles.moodButton}>
        <Image source={mood.image} style={styles.moodImage} />
      </TouchableOpacity>
    ))}
  </View>

  <TouchableOpacity
          style={styles.moodButtonMain}
          onPress={() => router.push("/dashboard/mood/MoodStep1")}
        >
          <Text style={styles.moodButtonText}>All Mood Analysis</Text>
        </TouchableOpacity>
</View>

      {/* ACTIVITIES */}
      <View style={styles.section}>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Your Activities Today</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={activities}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.activityCard}>
              <View>
                <Text style={styles.activityTitle}>{item.title}</Text>
                <Text style={styles.activitySubtitle}>{item.subtitle}</Text>
                <ProgressBar progress={item.progress} width={150} color="#3D7FFB" />
                <Text style={styles.progressText}>{Math.floor(item.progress * 10)}/10</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="arrow-forward-circle" size={32} color="#3D7FFB" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* INSTANT COUNSELING */}
      <View style={styles.counselingCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.counselingTitle}>Instant Counseling</Text>
          <Text style={styles.counselingText}>Counselors are always ready to listen to you</Text>
          <TouchableOpacity style={styles.chatButton}>
            <Text style={styles.chatButtonText}>Chat Now</Text>
          </TouchableOpacity>
        </View>
        <Image source={require("../../assets/images/counseling.png")} style={styles.counselingImage} />
      </View>

      {/* RECOMMENDATIONS */}
      <View style={styles.section}>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Recommendation For You</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={recommendations}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            </View>
          )}
        />
      </View>

      {/* VIDEO SECTION */}
      <View style={styles.videoSection}>
        <Video source={require("../../assets/videos/sample.mp4")} style={styles.video} useNativeControls resizeMode={ResizeMode.COVER}
 />
        <Text style={styles.videoCategory}>Anxiety Reduction</Text>
        <Text style={styles.videoTitle}>Try Our Mindful Breathing Technique!</Text>
        <Text style={styles.videoText}>Use mindful breathing techniques to slow down the mind and quiet the constant stream of thoughts.</Text>
      </View>

      {/* ARTICLES */}
      <View style={styles.section}>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Our Articles</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={articles}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5F2FF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: "600",
  },
  greetingText: {
    fontSize: 14,
    color: "#555",
  },
  moodSection: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#E5F2FF",
    borderRadius: 10,
    alignItems: "center",
  },
  greetingTextLarge: {
    fontSize: 24, // Lebih besar
    fontWeight: "700", // Tebal (bold)
    alignSelf: "flex-start", // Ke kiri
  },
  moodText: {
    fontSize: 18,
    fontWeight: "500",
    alignSelf: "flex-start",
  },
  moodContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Meratakan ikon
    alignItems: "center",
    width: "100%", // Memanfaatkan lebar penuh
    marginVertical: 15,
  },
  
  moodButton: {
    flex: 1, // Supaya ikon sejajar dengan jarak merata
    alignItems: "center",
  },
  moodImage: {
    width: 50,
    height: 50,
  },
  moodButtonMain: {
    backgroundColor: "#3D7FFB",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: "100%", // Lebarkan button hingga memenuhi container
    alignItems: "center",
    marginTop: 10,
  },
  moodButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15, // Tambahkan jarak antara teks dan card
  },
  linkText: {
    color: "#3D7FFB",
    fontSize: 14,
  },
  activityCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 10,
    width: 200,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  activitySubtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  progressText: {
    fontSize: 12,
    color: "#555",
    textAlign: "right",
    marginTop: 5,
  },
  counselingCard: {
    flexDirection: "row",
    backgroundColor: "#F0F8FF",
    padding: 20,
    borderRadius: 10,
    margin: 20,
    alignItems: "center",
  },
  counselingTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  counselingText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  chatButton: {
    backgroundColor: "#3D7FFB",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: "40%",
  },
  chatButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  counselingImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginLeft: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    width: 150,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#555",
  },
  videoSection: {
    padding: 20,
  },
  video: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  videoCategory: {
    color: "#FF6600",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 5,
  },
  videoText: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
});

export default HomeScreen;
