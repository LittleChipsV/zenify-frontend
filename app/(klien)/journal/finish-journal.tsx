import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

const FinishJournal = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Journal</Text>
        <View style={{ width: 24 }} /> {/* Spacer agar title di tengah */}
      </View>

      {/* Illustration */}
      <Image source={require('../../../assets/images/journal-success.png')} style={styles.image} />

      {/* Message */}
      <View style={styles.messageContainer}>
        <Text style={[styles.successText, styles.boldText]}>
          Selamat Aghnie! Kamu berhasil menyelesaikan Journal ini! 🎉
        </Text>
        <Text style={styles.description}>
          Bagus! Jurnalmu selesai. Terus jaga kebiasaan ini untuk memahami dan mengelola emosimu dengan baik.
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('./')}>
          <Text style={styles.primaryButtonText}>Okay, Selesai</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => router.push('./review-journal')}>
          <Text style={styles.secondaryButtonText}>Review Journal</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  closeText: {
    fontSize: 24,
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 260,
    height: 190,
    alignSelf: 'center',
    marginTop: 40,
    top: 25,
  },
  messageContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  successText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
    bottom: 35,
  },
  boldText: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
    paddingHorizontal: 20,
    bottom: 30,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  primaryButton: {
    backgroundColor: '#149FFF',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    borderColor: '#149FFF',
    borderWidth: 2,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  secondaryButtonText: {
    color: '#0085FF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FinishJournal;
