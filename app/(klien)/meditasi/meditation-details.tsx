"use client"

import { useState } from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons, Feather } from "@expo/vector-icons"
import { useRouter } from "expo-router"; // Gunakan router dari expo-router

const { width } = Dimensions.get("window")
const CARD_WIDTH = (width - 58) / 2;
const MeditationScreen = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedSession, setSelectedSession] = useState(1)
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {/* Main Illustration */}
        <View style={styles.illustrationContainer}>        
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
          <View style={styles.illustrationBackground}>
            <Image
              source={require("../../../assets/images/brain.png")}
              style={styles.mainIllustration}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.whiteLayer}>
            {/* Title Section */}
            <View style={styles.titleContainer}>
              <View>
                <Text style={styles.title}>Ketenangan Batin 1</Text>
                <View style={styles.sessionInfoContainer}>
                  <View style={styles.timeInfo}>
                    <Ionicons name="time-outline" size={14} color="#888" />
                    <Text style={styles.infoText}>5-10 Menit</Text>
                  </View>
                  <Text style={styles.dotSeparator}>•</Text>
                  <Text style={styles.infoText}>Seri 1</Text>
                </View>
                <Text style={styles.description}>Latihan Kesadaran Dan Afirmasi Untuk Semangat Di Pagi Hari</Text>
              </View>
              <TouchableOpacity style={styles.favoriteButton} onPress={() => setIsFavorite(!isFavorite)}>
                <Ionicons
                  name={isFavorite ? "heart" : "heart-outline"}
                  size={22}
                  color={isFavorite ? "#FF6B6B" : "#FF6B6B"}
                />
              </TouchableOpacity>
            </View>

            {/* Session Selection */}
            <View style={styles.sessionContainer}>
              <Text style={styles.sectionTitle}>Putar Sesi Meditasi</Text>
              <View style={styles.sessionButtonsContainer}>
                <TouchableOpacity onPress={() => setSelectedSession(1)}>
                  <LinearGradient
                    colors={selectedSession === 1 ? ["#7B68EE", "#6A5ACD"] : ["#E6E6FA", "#E6E6FA"]}
                    style={styles.sessionButton}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Ionicons name="play" size={24} color={selectedSession === 1 ? "#fff" : "#7B68EE"} />
                  </LinearGradient>
                </TouchableOpacity>

                {[2, 3, 4, 5, 6].map((num) => (
                  <TouchableOpacity key={num} onPress={() => setSelectedSession(num)}>
                    <LinearGradient
                      colors={selectedSession === num ? ["#7B68EE", "#6A5ACD"] : ["#E6E6FA", "#E6E6FA"]}
                      style={styles.sessionButton}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                      <Text style={[styles.sessionNumber, selectedSession === num && styles.activeSessionNumber]}>
                        {num}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Offline Notice */}
            <View style={styles.offlineCard}>
  <Text style={styles.offlineTitle}>Belum tersedia Offline</Text>
  <View style={styles.offlineContent}>
    <Text style={styles.offlineSubtitle}>6 Sesi • Belum Didownload</Text>
    <TouchableOpacity style={styles.downloadButton}>
      <Feather name="download" size={20} color="#4A90E2" />
    </TouchableOpacity>
  </View>
</View>

<View style={styles.divider} /> {/* Garis pemisah */}


            {/* Related Meditations */}
            <View style={styles.relatedContainer}>
              <Text style={styles.sectionTitle}>Meditasi Terkait</Text>
              <View style={styles.relatedCardsContainer}>
                <TouchableOpacity style={styles.relatedCard}>
                  <View style={styles.relatedCardContent}>
                  <Image source={require('../../../assets/images/meditation.png')} 
                  style={styles.cardImage} />
                    <View style={styles.relatedCardInfo}>
                      <Text style={styles.relatedTitle}>Ketenangan Batin 2</Text>
                      <View style={styles.relatedInfo}>
                        <Text style={styles.relatedInfoText}>Instan</Text>
                        <Text style={styles.dotSeparator}>•</Text>
                        <Ionicons name="headset-outline" size={14} color="#666" />
                        <Text style={styles.relatedInfoText}>5 Menit</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.relatedCard}>
                  <View style={styles.relatedCardContent}>
                  <Image source={require('../../../assets/images/meditation.png')} 
                  style={styles.cardImage} />
                    <View style={styles.relatedCardInfo}>
                      <Text style={styles.relatedTitle}>Ketenangan Batin 3</Text>
                      <View style={styles.relatedInfo}>
                        <Text style={styles.relatedInfoText}>Seri</Text>
                        <Text style={styles.dotSeparator}>•</Text>
                        <Ionicons name="headset-outline" size={14} color="#666" />
                        <Text style={styles.relatedInfoText}>4 Menit</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5F2FF",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#E5F2FF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 30, 
    paddingBottom: 5,
  },
  backButton: {
    paddingTop:6,
    padding: 8,
    right: 168,
  },
  illustrationContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 220,
    marginTop: 10,
    marginBottom: 20,
  },
  illustrationBackground: {
    width: width * 0.9,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  mainIllustration: {
    width: "100%",
    height: 200,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  whiteLayer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 20,
    paddingBottom: 30,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
    marginBottom: 5,
  },
  sessionInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  timeInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  infoText: {
    fontSize: 13,
    color: "#888",
  },
  dotSeparator: {
    marginHorizontal: 5,
    color: "#888",
  },
  offlineCard: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginVertical: 12,
    marginHorizontal: 16, // Beri jarak dari kiri & kanan
  },
  
  offlineTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  
  offlineContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Teks di kiri, ikon di kanan
    marginTop: 4,
  },
  cardImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 60,
    backgroundColor: '#FFB6C1',
    opacity: 0.8,
    borderRadius: 10,
    alignContent: 'center',
    marginLeft: 8,
  },
  offlineSubtitle: {
    fontSize: 12,
    color: "#888",
  },
  
  downloadButton: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#4A90E2",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center", // Posisikan ke tengah vertikal
    marginTop: -20, // Geser sedikit ke atas
  },
  
  divider: {
    height: 2,
    backgroundColor: "#E8E8E8",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    color: "#555",
    maxWidth: "90%",
    lineHeight: 20,
  },
  favoriteButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#FFECEE",
    justifyContent: "center",
    alignItems: "center",
  },
  sessionContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  sessionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sessionButton: {
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sessionNumber: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
  },
  activeSessionNumber: {
    color: "#FFFFFF",
  },
  offlineWrapper: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  offlineContainer: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    padding: 15,
  },
  offlineText: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
  },
  downloadInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  downloadText: {
    fontSize: 13,
    color: "#888",
  },
  relatedContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  relatedCardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
  relatedCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    width: CARD_WIDTH,
  },
  relatedCardContent: {
    height: 200,
    position: 'relative',
  },

  relatedCardInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
  },
  relatedTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  relatedInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  relatedInfoText: {
    fontSize: 14,
    color: '#666',
  },

})

export default MeditationScreen

