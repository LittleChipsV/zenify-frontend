import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function MeditationDetailScreen() {
  const router = useRouter();
  
  // Mock data for session progress
  const totalSessions = 7;
  const currentSession = 3;
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="heart" size={24} color="#FF4081" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.container}>
        {/* Main Content */}
        <View style={styles.content}>
          {/* Title Section */}
          <View style={styles.titleSection}>
            <Text style={styles.title}>Meditasi Pagi</Text>
            <Text style={styles.subtitle}>7-10 menit | Seri Meditasi</Text>
            <Text style={styles.description}>
              Latihan sederhana dan dimulai untuk memulai harimu dengan tenang
            </Text>
          </View>
          
          {/* Illustration */}
          <View style={styles.illustrationContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/300/26C6DA/FFFFFF?text=Meditation' }}
              style={styles.illustration}
            />
          </View>
          
          {/* Session Progress */}
          <View style={styles.progressSection}>
            <Text style={styles.progressTitle}>Putar Sesi Meditasi</Text>
            <View style={styles.progressIndicators}>
              {[...Array(totalSessions)].map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.progressDot,
                    index < currentSession && styles.progressDotCompleted,
                    index === currentSession && styles.progressDotCurrent
                  ]}
                >
                  <Text style={[
                    styles.progressNumber,
                    (index <= currentSession) && styles.progressNumberActive
                  ]}>
                    {index + 1}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          
          {/* Play Button */}
          <TouchableOpacity style={styles.playButton}>
            <Feather name="play" size={24} color="white" />
          </TouchableOpacity>
          
          {/* Status */}
          <View style={styles.statusContainer}>
            <Feather name="wifi-off" size={16} color="#666" />
            <Text style={styles.statusText}>Belum tersedia Offline</Text>
            <Text style={styles.statusSubtext}>• Belum didownload</Text>
          </View>
          
          {/* Related Meditations */}
          <View style={styles.relatedSection}>
            <Text style={styles.relatedTitle}>Meditasi Terkait</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.relatedCard}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/150/FF9800/FFFFFF?text=Orange' }}
                  style={styles.relatedImage}
                />
                <Text style={styles.relatedCardTitle}>Meditasi Dasar 2</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.relatedCard}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/150/FF7043/FFFFFF?text=Butterfly' }}
                  style={styles.relatedImage}
                />
                <Text style={styles.relatedCardTitle}>Meditasi Dasar 3</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  content: {
    padding: 16,
  },
  titleSection: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  illustrationContainer: {
    height: 200,
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#E0F7FA',
  },
  illustration: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  progressSection: {
    marginBottom: 24,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  progressIndicators: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  progressDot: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  progressDotCompleted: {
    backgroundColor: '#26C6DA',
    borderColor: '#26C6DA',
  },
  progressDotCurrent: {
    backgroundColor: 'white',
    borderColor: '#26C6DA',
  },
  progressNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  progressNumberActive: {
    color: '#26C6DA',
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#26C6DA',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 24,
    shadowColor: '#26C6DA',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  statusText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 6,
  },
  statusSubtext: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  relatedSection: {
    marginBottom: 24,
  },
  relatedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  relatedCard: {
    width: 150,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
  },
  relatedImage: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
  },
  relatedCardTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    left   : 10,
    bottom: 10,
  },
});