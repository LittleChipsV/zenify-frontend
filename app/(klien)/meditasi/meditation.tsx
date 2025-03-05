import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router"; // Gunakan router dari expo-router

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 58) / 2;


const MeditationSeriesScreen = () => {
  const seriesData = [
    { id: 1, title: 'Ketenangan Batin 1', duration: '5 Menit' },
    { id: 2, title: 'Ketenangan Batin 2', duration: '4 Menit' },
    { id: 3, title: 'Ketenangan Batin 3', duration: '8 Menit' },
    { id: 4, title: 'Ketenangan Batin 4', duration: '7 Menit' },
  ];
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Meditasi Pernapasan</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.contentContainer}>
          {/* Featured Card Section */}
          <View style={styles.featuredSection}>
            <View style={styles.featuredCard}>
              <View style={styles.featuredImagePlaceholder} />
              <View style={styles.featuredContent}>
                <Text style={styles.featuredTitle}>Meditasi Sejenak 5 Menit</Text>
                <Text style={styles.featuredSubtitle}>Relaksasi Dengan Suara Alam</Text>
                <Text style={styles.featuredDescription}>Untuk Meningkatkan Kualitas Tidur.</Text>
                <View style={styles.durationContainer}>
                  <Ionicons name="headset-outline" size={16} color="#666" />
                  <Text style={styles.duration}>5 Menit</Text>
                </View>
              </View>
            </View>
            {/* Progress Bar Outside Card */}
            <View style={styles.progressBarContainer}>
  <View style={styles.progressDot} />
  <View style={styles.progressDotActive} />
  <View style={styles.progressDot} />
</View>
          </View>

          <View style={styles.whiteLayer}>
            {/* Series Section */}
            <View style={styles.seriesSection}>
              <Text style={styles.sectionTitle}>Meditasi Seri</Text>
              <Text style={styles.sectionSubtitle}>Rangkaian meditasi yang berkelanjutan</Text>
              
              <View style={styles.seriesGrid}>
                {seriesData.map((item) => (
                  <TouchableOpacity key={item.id} style={styles.seriesCard} onPress={() => router.push(`/meditasi/meditation-details`)}>
                    <View style={styles.relatedCardContent}>
                      <View style={styles.relatedCardBackground} />
                      <View style={styles.relatedCardInfo}>
                        <Text style={styles.relatedTitle}>{item.title}</Text>
                        <View style={styles.relatedInfo}>
                          <Text style={styles.seriesLabel}>Seri</Text>
                          <Text style={styles.dotSeparator}>•</Text>
                          <Ionicons name="headset-outline" size={14} color="#666" />
                          <Text style={styles.seriesDuration}>{item.duration}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F2FF',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#E5F2FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 5,
  },
  backButton: {
    paddingTop: 10,
    padding: 8,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 60,
    textAlign: 'center',
    marginBottom: 10,
  },
  contentContainer: {
    flex: 1,
  },
  featuredSection: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  featuredCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 12,
  },
  featuredImagePlaceholder: {
    width: '100%',
    height: 120,
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    marginBottom: 16,
  },
  featuredContent: {
    gap: 4,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  featuredSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  featuredDescription: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  duration: {
    fontSize: 14,
    color: '#666',
  },

  progressBar: {
    width: '30%',
    height: '100%',
    backgroundColor: '#4A90E2',
    borderRadius: 2,
  },
  whiteLayer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 20,
    paddingBottom: 100,
    flex: 1,
  },
  seriesSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  seriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  seriesCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    width: CARD_WIDTH,
  },
  relatedCardContent: {
    height: 180,
    position: 'relative',
  },
  relatedCardBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 60,
    backgroundColor: '#FFB6C1',
    opacity: 0.8,
    borderRadius: 10,
  },
  progressBarContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 8,  
    gap: 6, // Jarak antar titik
  },
  progressDot: {
    width: 20, // Ukuran titik tidak aktif
    height: 6,
    backgroundColor: '#B0D5F5',
    borderRadius: 8, // Supaya bentuk oval
  },
  progressDotActive: {
    width: 30, // Titik aktif lebih panjang
    height: 6,
    backgroundColor: '#4A90E2',
    borderRadius: 8, 
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
  seriesLabel: {
    fontSize: 14,
    color: '#666',
  },
  dotSeparator: {
    color: '#666',
  },
  seriesDuration: {
    fontSize: 14,
    color: '#666',
  },
});

export default MeditationSeriesScreen;