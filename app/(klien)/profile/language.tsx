"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import SettingsHeader from "../components/SettingsHeader"

export default function LanguageScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState("english")

  const languages = [
    { id: "english", name: "English", native: "English", flag: "🇺🇸" },
    { id: "spanish", name: "Spanish", native: "Español", flag: "🇪🇸" },
    { id: "french", name: "French", native: "Français", flag: "🇫🇷" },
    { id: "german", name: "German", native: "Deutsch", flag: "🇩🇪" },
    { id: "italian", name: "Italian", native: "Italiano", flag: "🇮🇹" },
    { id: "portuguese", name: "Portuguese", native: "Português", flag: "🇵🇹" },
    { id: "russian", name: "Russian", native: "Русский", flag: "🇷🇺" },
    { id: "japanese", name: "Japanese", native: "日本語", flag: "🇯🇵" },
    { id: "korean", name: "Korean", native: "한국어", flag: "🇰🇷" },
    { id: "chinese", name: "Chinese", native: "中文", flag: "🇨🇳" },
    { id: "arabic", name: "Arabic", native: "العربية", flag: "🇸🇦" },
    { id: "indonesia", name: "Indonesia", native: "Bahasa", flag: "🇮🇳" },
  ]

  return (
    <View style={styles.container}>
      <SettingsHeader title="Language" />

      <View style={styles.infoCard}>
        <Ionicons name="information-circle-outline" size={24} color="#4A6FFF" />
        <Text style={styles.infoText}>
          Choose your preferred language. This will change the language throughout the app.
        </Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.languageCard}>
          {languages.map((language) => (
            <TouchableOpacity
              key={language.id}
              style={[styles.languageItem, selectedLanguage === language.id && styles.selectedLanguageItem]}
              onPress={() => setSelectedLanguage(language.id)}
            >
              <View style={styles.languageInfo}>
                <Text style={styles.languageFlag}>{language.flag}</Text>
                <View>
                  <Text style={styles.languageName}>{language.name}</Text>
                  <Text style={styles.languageNative}>{language.native}</Text>
                </View>
              </View>

              {selectedLanguage === language.id && <Ionicons name="checkmark-circle" size={24} color="#4A6FFF" />}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  infoCard: {
    flexDirection: "row",
    backgroundColor: "#E3F2FD",
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  infoText: {
    flex: 1,
    marginLeft: 12,
    color: "#0D47A1",
    fontSize: 14,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  languageCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
  },
  languageItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  selectedLanguageItem: {
    backgroundColor: "#F5F8FF",
  },
  languageInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  languageFlag: {
    fontSize: 24,
    marginRight: 16,
  },
  languageName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  languageNative: {
    fontSize: 14,
    color: "#757575",
    marginTop: 2,
  },
  saveButton: {
    backgroundColor: "#4A6FFF",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginTop: 16,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  bottomSpace: {
    height: 40,
  },
})

