import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"

export default function SettingsScreen() {
  // Group settings into categories for better organization
  const settingsCategories = [
    {
      title: "Account",
      items: [
        { icon: "person", label: "Manage Account", color: "#4A6FFF", route: "/profile/manage-account" },
        { icon: "lock-closed", label: "Security", color: "#FF6B6B", route: "/profile/security" },
      ],
    },
    {
      title: "Preferences",
      items: [
        { icon: "globe", label: "Language", color: "#4ECDC4", route: "/profile/language" },
        { icon: "color-palette", label: "Theme", color: "#9D65C9", route: "/profile/theme" },
        { icon: "notifications", label: "Notifications", color: "#FF9F1C", route: "/profile/notifications" },
      ],
    },
    {
      title: "Activity",
      items: [{ icon: "time", label: "History", color: "#2EC4B6", route: "/profile/history" }],
    },
    {
      title: "Support",
      items: [
        { icon: "help-circle", label: "Help Center", color: "#3D5A80", route: "/profile/help-center" },
        { icon: "shield", label: "Privacy Policy", color: "#457B9D", route: "/profile/privacy-policy" },
        { icon: "information-circle", label: "About AI", color: "#1D3557", route: "/profile/about-ai" },
        { icon: "mail", label: "Contact us", color: "#E63946", route: "/profile/contact-us" },
      ],
    },
  ]

  const handleMenuItemPress = (route: string) => {
    router.push(route as any)
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 40 }} /> {/* Spacer for balance */}
      </View>

      {/* Profile Summary */}
      <View style={styles.profileSummary}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
        </View>
      </View>

      {/* Settings List */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {settingsCategories.map((category, categoryIndex) => (
          <View key={categoryIndex} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <View style={styles.categoryCard}>
              {category.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={itemIndex}
                  style={[styles.menuItem, itemIndex === category.items.length - 1 ? styles.lastMenuItem : null]}
                  onPress={() => handleMenuItemPress(item.route)}
                >
                  <View style={styles.menuLeft}>
                    <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
                      <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={22} color={item.color} />
                    </View>
                    <Text style={styles.menuLabel}>{item.label}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* Log Out Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={() => console.log("Logging out")}>
          <Ionicons name="log-out-outline" size={20} color="#FF3B30" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    paddingTop: 60,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  profileSummary: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4A6FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  profileEmail: {
    fontSize: 14,
    color: "#757575",
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
  },
  categoryContainer: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#757575",
    marginBottom: 8,
    marginLeft: 8,
  },
  categoryCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  menuLabel: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  logoutText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "500",
    color: "#FF3B30",
  },
  versionContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  versionText: {
    fontSize: 12,
    color: "#9E9E9E",
  },
})

