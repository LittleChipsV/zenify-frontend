import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function MeditationScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('seri'); // 'seri' or 'instan'
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Belajar Meditasi, Yuk!</Text>
        <View style={{ width: 24 }} />
      </View>
      
      {/* Main Content */}
      <ScrollView style={styles.container}>
        {/* Recommendation Section */}
        <View style={styles.recommendationSection}>          
          {/* Recommendation Cards Carousel */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recommendationCarousel}
          >
            <View style={styles.recommendationCard}>
              <View style={styles.recommendationContent}>
                <View style={styles.recommendationImageContainer}>
                  <Image 
                    source={{ uri: 'https://via.placeholder.com/100/80CBC4/FFFFFF?text=Meditation' }} 
                    style={styles.recommendationImage} 
                  />
                </View>
                <View style={styles.recommendationTextContainer}>
                  <View style={styles.durationBadge}>
                    <Text style={styles.durationText}>5m</Text>
                  </View>
                  <Text style={styles.recommendationTitle}>Meditasi Semi Guided 5 Menit</Text>
                  <View style={styles.timeContainer}>
                    <Ionicons name="time-outline" size={14} color="#666" />
                    <Text style={styles.timeText}>5 Menit</Text>
                  </View>
                  <Text style={styles.recommendationDescription} numberOfLines={2}>
                    Meditasi dengan sedikit panduan untukmu yang sudah terbiasa
                  </Text>
                </View>
              </View>
            </View>
            
            <View style={styles.recommendationCard}>
              <View style={styles.recommendationContent}>
                <View style={styles.recommendationImageContainer}>
                  <Image 
                    source={{ uri: 'https://via.placeholder.com/100/80CBC4/FFFFFF?text=Meditation' }} 
                    style={styles.recommendationImage} 
                  />
                </View>
                <View style={styles.recommendationTextContainer}>
                  <View style={styles.durationBadge}>
                    <Text style={styles.durationText}>5m</Text>
                  </View>
                  <Text style={styles.recommendationTitle}>Meditasi Semi Guided 5 Menit</Text>
                  <View style={styles.timeContainer}>
                    <Ionicons name="time-outline" size={14} color="#666" />
                    <Text style={styles.timeText}>5 Menit</Text>
                  </View>
                  <Text style={styles.recommendationDescription} numberOfLines={2}>
                    Meditasi dengan sedikit panduan untukmu yang sudah terbiasa
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
          
          {/* Carousel Indicator */}
          <View style={styles.carouselIndicator}>
            <View style={[styles.indicatorDot, styles.activeDot]} />
            <View style={styles.indicatorDot} />
            <View style={styles.indicatorDot} />
          </View>
        </View>
        
        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'seri' && styles.activeTabButton]} 
            onPress={() => setActiveTab('seri')}
          >
            <Text style={[styles.tabText, activeTab === 'seri' && styles.activeTabText]}>Seri</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'instan' && styles.activeTabButton]} 
            onPress={() => setActiveTab('instan')}
          >
            <Text style={[styles.tabText, activeTab === 'instan' && styles.activeTabText]}>Instan</Text>
          </TouchableOpacity>
        </View>
        
        {/* Content based on active tab */}
        {activeTab === 'seri' ? (
          <View style={styles.tabContent}>
            <Text style={styles.tabContentTitle}>Meditasi Seri</Text>
            <Text style={styles.tabContentSubtitle}>Rangkaian 10 sesi meditasi berkelanjutan</Text>
            
            <View style={styles.meditationGrid}>
              <View style={styles.meditationRow}>
                <TouchableOpacity style={styles.meditationCard} onPress={() => router.push("../meditasi/meditation-details")}>
                  <Image 
                    source={{ uri: 'https://via.placeholder.com/150/26C6DA/FFFFFF?text=Fish' }} 
                    style={styles.meditationCardImage} 
                  />
                  <Text style={styles.meditationCardTitle}>Meditasi Dasar 1</Text>
                  <Text style={styles.meditationCardSubtitle}>7-10 menit | Seri</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.meditationCard} onPress={() => router.push("../meditasi/meditation-details")}>
                  <Image 
                    source={{ uri: 'https://via.placeholder.com/150/FF9800/FFFFFF?text=Orange' }} 
                    style={styles.meditationCardImage} 
                  />
                  <Text style={styles.meditationCardTitle}>Meditasi Dasar 2</Text>
                  <Text style={styles.meditationCardSubtitle}>7-10 menit | Seri</Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.meditationRow}>
                <TouchableOpacity style={styles.meditationCard} onPress={() => router.push("../meditasi/meditation-details")}>
                  <Image 
                    source={{ uri: 'https://via.placeholder.com/150/FF7043/FFFFFF?text=Butterfly' }} 
                    style={styles.meditationCardImage} 
                  />
                  <Text style={styles.meditationCardTitle}>Meditasi Dasar 3</Text>
                  <Text style={styles.meditationCardSubtitle}>7-10 menit | Seri</Text>
                </TouchableOpacity>
                
                <View style={{ width: '48%' }} /> {/* Empty space for grid alignment */}
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.tabContent}>
            <Text style={styles.tabContentTitle}>Meditasi Instan</Text>
            <Text style={styles.tabContentSubtitle}>Solusi cepat 1 sesi meditasi singkat</Text>
            
            <View style={styles.meditationGrid}>
              <View style={styles.meditationRow}>
                <TouchableOpacity style={styles.meditationCard} onPress={() => router.push("../meditasi/meditation-details")}>
                  <Image 
                    source={{ uri: 'https://via.placeholder.com/150/26C6DA/FFFFFF?text=Body+Scan' }} 
                    style={styles.meditationCardImage} 
                  />
                  <Text style={styles.meditationCardTitle}>Body Scan</Text>
                  <Text style={styles.meditationCardSubtitle}>7 Menit | Meditasi Instan</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.meditationCard} onPress={() => router.push("../meditasi/meditation-details")}>
                  <Image 
                    source={{ uri: 'https://via.placeholder.com/150/26C6DA/FFFFFF?text=Breathing' }} 
                    style={styles.meditationCardImage} 
                  />
                  <Text style={styles.meditationCardTitle}>Bernafas</Text>
                  <Text style={styles.meditationCardSubtitle}>3 menit | Meditasi Singkat</Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.meditationRow}>
                <TouchableOpacity style={styles.meditationCard} onPress={() => router.push("../meditasi/meditation-details")}>
                <Image 
                    source={{ uri: 'https://via.placeholder.com/150/26C6DA/FFFFFF?text=Breathing' }} 
                    style={styles.meditationCardImage} 
                  />
                  <Text style={styles.meditationCardTitle}>Bernafas</Text>
                  <Text style={styles.meditationCardSubtitle}>3 menit | Meditasi Singkat</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.meditationCard} onPress={() => router.push("../meditasi/meditation-details")}>
                <Image 
                    source={{ uri: 'https://via.placeholder.com/150/26C6DA/FFFFFF?text=Breathing' }} 
                    style={styles.meditationCardImage} 
                  />
                  <Text style={styles.meditationCardTitle}>Bernafas</Text>
                  <Text style={styles.meditationCardSubtitle}>3 menit | Meditasi Singkat</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E5F4FF', // Teal/turquoise color
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#E5F4FF',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#E5F4FF',
  },
  recommendationSection: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  recommendationCarousel: {
    paddingRight: 16,
  },
  recommendationCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    marginRight: 12,
    width: 320,
  },
  recommendationContent: {
    flexDirection: 'row',
  },
  recommendationImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 12,
    overflow: 'hidden',
  },
  recommendationImage: {
    width: '100%',
    height: '100%',
  },
  recommendationTextContainer: {
    flex: 1,
    marginLeft: 12,
    position: 'relative',
  },
  durationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#E0F7FA',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  durationText: {
    fontSize: 12,
    color: '#00838F',
    fontWeight: '500',
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    marginRight: 40, // Make room for the duration badge
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  timeText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  recommendationDescription: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
  },
  carouselIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(133, 132, 132, 0.4)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'white',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    backgroundColor: 'rgba(30, 84, 125, 0.2)',
    marginRight: 8,
  },
  activeTabButton: {
    backgroundColor: '#149FFF',
  },
  tabText: {
    color: 'white',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#ffff',
  },
  tabContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    paddingTop: 24,
    minHeight: 500, // Ensure it fills the screen
  },
  tabContentTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  tabContentSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  meditationGrid: {
    marginTop: 8,
  },
  meditationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  meditationCard: {
    width: '48%',
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    borderColor: '#BDBDBD',
    borderWidth: 1,
    
  },
  meditationCardImage: {
    width: '100%',
    height: 100,
    borderRadius: 12,
  },
  meditationCardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
    left: 8,
  },
  meditationCardSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
    left: 8,
    marginBottom: 8,
  },
  lockIconContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  durationBadgeSmall: {
    position: 'absolute',
    bottom: 40,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  durationTextSmall: {
    fontSize: 10,
    color: '#00838F',
    fontWeight: '500',
  },
});