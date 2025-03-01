import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const ReviewJournal = () => {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Review Journal</Text>
            <View style={{ width: 24 }} /> {/* Spacer agar title tetap di tengah */}
          </View>

          {/* Journal Card */}
          <View style={styles.journalCard}>
            <View style={styles.imagePlaceholder} />
            <View style={{ flex: 1 }}>
              <Text style={styles.journalTitle}>Ketika Aku Sedih</Text>
              <Text style={styles.journalDescription}>
                Apa Yang Biasanya Kamu Lakukan Saat Sedih? Apakah Itu Membantu...
              </Text>
              <Text style={styles.journalPages}>6 Halaman</Text>
            </View>
          </View>

          {/* Rating Section */}
          <Text style={styles.subtitle}>Bagaimana Review Journal Ini?</Text>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => setRating(star)}>
                <Text style={[styles.star, rating >= star ? styles.filledStar : styles.emptyStar]}>★</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Feedback Section */}
          <Text style={styles.subtitles}>Apa Saran Yang Perlu Ditingkatkan Dari Konten Journal Ini?</Text>
          <TextInput
            style={styles.input}
            placeholder="Tulis sesuatu..."
            multiline
            maxLength={3000}
            value={feedback}
            onChangeText={setFeedback}
          />
          <Text style={styles.charCounter}>{feedback.length}/3000</Text>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={() => router.push('./')}>
            <Text style={styles.submitButtonText}>Kirim</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 36, // Menambah padding lebih besar di kiri & kanan
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    marginBottom: 20,
  },
  closeText: {
    fontSize: 24,
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  journalCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
  },
  imagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginRight: 10,
  },
  journalTitle: {
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
  },
  journalDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  journalPages: {
    fontSize: 12,
    color: '#0085FF',
    marginTop: 5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
    color: '#000',
  },
  subtitles: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
    color: '#000',
    bottom: 25,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    paddingHorizontal: 24, // Menambah padding agar tidak terlalu mepet
  },
  star: {
    fontSize: 50, // Memperbesar ukuran bintang
    marginHorizontal: 8, // Memberikan jarak antar bintang
    marginVertical: 2, // Memberikan
    bottom: 10,
  },
  filledStar: {
    color: '#FFD700',
  },
  emptyStar: {
    color: '#D9D9D9',
  },
  divider: {
    height: 1,
    backgroundColor: '#D9D9D9',
    marginVertical: 15,
    bottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    padding: 12,
    minHeight: 160,
    textAlignVertical: 'top',
    backgroundColor: '#F8F8F8',
    marginBottom: 10,
    bottom: 20,
  },
  charCounter: {
    textAlign: 'right',
    color: '#666',
    fontSize: 12,
    marginTop: 5,
    bottom: 20,
  },
  submitButton: {
    backgroundColor: '#0085FF',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ReviewJournal;
