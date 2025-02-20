import React from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const JournalScreen = () => {
  const journalCards = [
    {
      id: 1,
      title: 'Refleksi Diri',
      description: 'Kenali emosi, hargai momen, dan dukung pertumbuhan pribadimu.',
      color: '#FFE8E8',
      borderColor: '#FFB5B5'
    },
    {
      id: 2,
      title: 'Pesan untuk Diri Sendiri',
      description: 'Apa satu hal yang membuatmu tersenyum hari ini? Tuliskan bagaimana perasaanmu tentangnya.',
      color: '#E8FFF1',
      borderColor: '#B5FFD6'
    },
    {
      id: 3,
      title: 'Pencapaian Kecil',
      description: 'Apa satu hal yang berhasil kamu lakukan hari ini dan membuatmu bangga?',
      color: '#E8E9FF',
      borderColor: '#B5B7FF'
    },
    {
      id: 4,
      title: 'Memaafkan Diri',
      description: 'Kesalahan apa yang perlu kamu lepaskan agar bisa lebih damai?',
      color: '#E8FFF1',
      borderColor: '#B5FFD6'
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Zenify Journal</Text>
        <TouchableOpacity>
          <Ionicons name="time-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#666" />
        <TextInput 
          style={styles.searchInput}
          placeholder="Cari Journal..."
          placeholderTextColor="#666"
        />
      </View>

      {/* Daily Journal Banner */}
      <View style={styles.bannerContainer}>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>My Daily Journal</Text>
          <Image 
            source={require('../../../assets/images/Journal_Banner.png')}
            style={styles.bannerImage}
          />
        </View>
      </View>

      {/* Journal Cards */}
      <ScrollView style={styles.cardsContainer}>
        {journalCards.map((card) => (
          <TouchableOpacity 
            key={card.id}
            style={[styles.card, { backgroundColor: card.color }]}
          >
            <View style={[styles.cardStrip, { backgroundColor: card.borderColor }]} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardDescription}>{card.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  bannerContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: '#FFF3E0',
    borderRadius: 12,
  },
  bannerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#6B4423',
  },
  bannerImage: {
    width: 100,
    height: 100,
  },
  cardsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardStrip: {
    width: 6,
  },
  cardContent: {
    flex: 1,
    padding: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
  activeIcon: {
    color: '#000',
  },
  activeNavText: {
    color: '#000',
    fontWeight: '500',
  },
});

export default JournalScreen;