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
import { useRouter } from "expo-router";

const JournalScreen = () => {
  const router = useRouter();
  const journalCards = [
    {
      id: 1,
      title: 'Refleksi Diri',
      description: 'Kenali emosi, hargai momen, dan dukung pertumbuhan pribadimu.',
      image: require('../../../assets/images/refleksi-diri.png'),
    },
    {
      id: 2,
      title: 'Pesan untuk Diri Sendiri',
      description: 'Apa satu hal yang membuatmu tersenyum hari ini? Tuliskan bagaimana perasaanmu tentangnya.',
      image: require('../../../assets/images/refleksi-diri.png'),
    },
    {
      id: 3,
      title: 'Pencapaian Kecil',
      description: 'Apa satu hal yang berhasil kamu lakukan hari ini dan membuatmu bangga?',
      image: require('../../../assets/images/refleksi-diri.png'),
    },
    {
      id: 4,
      title: 'Memaafkan Diri',
      description: 'Kesalahan apa yang perlu kamu lepaskan agar bisa lebih damai?',
      image: require('../../../assets/images/refleksi-diri.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
          {/* Header */}
          <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Zenify Journal</Text>
        <TouchableOpacity onPress={() => router.push("../journal/history")}>
          <Ionicons name="time-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
        <TextInput 
          style={styles.searchInput}
          placeholder="Cari Journal..."
          placeholderTextColor="#999"
        />
      </View>

      {/* Daily Journal Banner */}
      <View style={styles.bannerContainer}>
  <View style={styles.bannerTextContainer}>
    <Text style={styles.bannerTitleTop}>My Daily</Text>
    <Text style={styles.bannerTitleBottom}>Journal</Text>
  </View>
  <Image 
    source={require('../../../assets/images/Journal_Banner.png')}
    style={styles.bannerImage}
  />
</View>

      {/* Journal Cards */}
      <ScrollView style={styles.cardsContainer}>
        {journalCards.map((card) => (
          <TouchableOpacity 
            key={card.id}
            style={styles.card}
          >
            <Image source={card.image} style={styles.cardImage} />
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
  searchIcon: {
    marginRight: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 30, // Tambahkan padding atas agar tidak terpotong
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
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderRadius: 9, // Membuat search bar lebih bulat
    borderWidth: 2,
    borderColor: '#E4E4E4',
    //shadowColor: "#000",
    //shadowOffset: { width: 0, height: 2 },
    //shadowOpacity: 0.1,
    //shadowRadius: 5,
    //elevation: 3, // Efek floating untuk Android
    marginBottom: 18,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  bannerContainer: {
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#FFE8D6',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    height: 120, // Menentukan tinggi agar gambar tidak hilang
    position: 'relative', // Untuk mengatur posisi elemen di dalamnya
    marginBottom: 19,
  },
  bannerTextContainer: {
    flex: 1,
    marginLeft: 20,
    paddingLeft: 20, // Geser teks ke kanan
    fontFamily: 'poppins',
  },
  bannerTitleTop: {
    fontSize: 24,
    fontWeight: '700',
    color: '#6B4423',
    fontFamily: 'poppins',

  },
  bannerTitleBottom: {
    fontSize: 24,
    fontWeight: '700',
    color: '#6B4423',
    fontFamily: 'poppins',

  },
  bannerImage: {
    width: 180, // Perbesar ukuran gambar
    height: 130,
    position: 'absolute',
    right: -4, // Geser lebih ke kanan agar terpotong oleh banner
    bottom: -9, // Bisa disesuaikan agar tampak lebih natural
    resizeMode: 'cover', // Memastikan gambar memenuhi area dengan pemotongan
  },
  
  cardsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#DDD', // Outline grey
    backgroundColor: '#FFF',
  },
  cardImage: {
    width: 70,
    height: 80,
    marginRight: 12,
    resizeMode: 'contain',
  },
  cardContent: {
    flex: 1,
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
});

export default JournalScreen;
