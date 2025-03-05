"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import SettingsHeader from "../components/SettingsHeader"

export default function ThemeScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState("system")
  const [selectedAccent, setSelectedAccent] = useState("blue")

  const themes = [
    { id: "system", name: "System Default", icon: "phone-portrait-outline" },
    { id: "light", name: "Light", icon: "sunny-outline" },
    { id: "dark", name: "Dark", icon: "moon-outline" },
  ]

  const accentColors = [
    { id: "blue", name: "Blue", color: "#4A6FFF" },
    { id: "purple", name: "Purple", color: "#9D65C9" },
    { id: "green", name: "Green", color: "#2EC4B6" },
    { id: "red", name: "Red", color: "#FF6B6B" },
    { id: "orange", name: "Orange", color: "#FF9F1C" },
    { id: "teal", name: "Teal", color: "#4ECDC4" },
  ]

  return (
    <View style={styles.container}>
      <SettingsHeader title="Theme" />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Theme Mode Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Theme Mode</Text>
          <View style={styles.card}>
            {themes.map((theme) => (
              <TouchableOpacity
                key={theme.id}
                style={[styles.themeItem, selectedTheme === theme.id && styles.selectedThemeItem]}
                onPress={() => setSelectedTheme(theme.id)}
              >
                <View style={styles.themeInfo}>
                  <View style={styles.themeIconContainer}>
                    <Ionicons name={theme.icon as keyof typeof Ionicons.glyphMap} size={22} color="#4A6FFF" />
                  </View>
                  <Text style={styles.themeName}>{theme.name}</Text>
                </View>

                {selectedTheme === theme.id && <Ionicons name="checkmark-circle" size={24} color="#4A6FFF" />}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Dark Mode Toggle */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dark Mode</Text>
          <View style={styles.card}>
            <View style={styles.toggleItem}>
              <View>
                <Text style={styles.toggleLabel}>Dark Mode</Text>
                <Text style={styles.toggleDescription}>Enable dark mode for the app</Text>
              </View>
              <Switch
                value={isDarkMode}
                onValueChange={setIsDarkMode}
                trackColor={{ false: "#E0E0E0", true: "#4A6FFF30" }}
                thumbColor={isDarkMode ? "#4A6FFF" : "#F5F5F5"}
              />
            </View>
          </View>
        </View>

        {/* Accent Color Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Accent Color</Text>
          <View style={styles.card}>
            <Text style={styles.colorSectionDescription}>
              Choose an accent color for buttons, links, and highlights
            </Text>
            <View style={styles.colorGrid}>
              {accentColors.map((color) => (
                <TouchableOpacity
                  key={color.id}
                  style={[
                    styles.colorItem,
                    { backgroundColor: color.color },
                    selectedAccent === color.id && styles.selectedColorItem,
                  ]}
                  onPress={() => setSelectedAccent(color.id)}
                >
                  {selectedAccent === color.id && <Ionicons name="checkmark" size={20} color="#fff" />}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Preview Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preview</Text>
          <View style={[styles.previewCard, isDarkMode && styles.darkPreviewCard]}>
            <View style={styles.previewHeader}>
              <View style={[styles.previewStatusBar, isDarkMode && styles.darkPreviewStatusBar]} />
              <View style={styles.previewHeaderContent}>
                <View style={styles.previewBackButton} />
                <View style={[styles.previewTitle, isDarkMode && styles.darkPreviewText]} />
                <View style={{ width: 24 }} />
              </View>
            </View>

            <View style={styles.previewContent}>
              <View style={[styles.previewText, isDarkMode && styles.darkPreviewText]} />
              <View style={[styles.previewText, styles.previewTextShort, isDarkMode && styles.darkPreviewText]} />
              <View
                style={[
                  styles.previewButton,
                  { backgroundColor: accentColors.find((c) => c.id === selectedAccent)?.color },
                ]}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.saveButton, { backgroundColor: accentColors.find((c) => c.id === selectedAccent)?.color }]}
        >
          <Text style={styles.saveButtonText}>Apply Theme</Text>
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
  scrollView: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#757575",
    marginBottom: 12,
    marginLeft: 4,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  themeItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  selectedThemeItem: {
    backgroundColor: "#F5F8FF",
  },
  themeInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  themeIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F8FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  themeName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  toggleItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  toggleLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  toggleDescription: {
    fontSize: 14,
    color: "#757575",
    marginTop: 4,
    maxWidth: "80%",
  },
  colorSectionDescription: {
    fontSize: 14,
    color: "#757575",
    padding: 16,
    paddingBottom: 8,
  },
  colorGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
    paddingTop: 8,
  },
  colorItem: {
    width: 48,
    height: 48,
    borderRadius: 24,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedColorItem: {
    borderWidth: 2,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  previewCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    height: 200,
  },
  darkPreviewCard: {
    backgroundColor: "#1A1A1A",
  },
  previewHeader: {
    height: 70,
  },
  previewStatusBar: {
    height: 24,
    backgroundColor: "#F5F5F5",
  },
  darkPreviewStatusBar: {
    backgroundColor: "#121212",
  },
  previewHeaderContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  previewBackButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#F0F0F0",
  },
  previewTitle: {
    width: 100,
    height: 16,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
  },
  previewContent: {
    padding: 16,
  },
  previewText: {
    height: 12,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    marginBottom: 12,
  },
  darkPreviewText: {
    backgroundColor: "#333",
  },
  previewTextShort: {
    width: "60%",
  },
  previewButton: {
    height: 36,
    borderRadius: 8,
    marginTop: 16,
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

