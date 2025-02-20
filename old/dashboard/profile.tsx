import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack"; // Import StackNavigationProp

// Define the type for navigation
type RootStackParamList = {
  ManageAccount: undefined;
  Security: undefined;
  // Add other screens here if needed
};

type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const SettingsScreen: React.FC<{ navigation: SettingsScreenNavigationProp }> = ({ navigation }) => {
  const settingsMenu = [
    { icon: "person", label: "Manage Account" },
    { icon: "lock-closed", label: "Security" }, // Changed "lock" to "lock-closed" (valid Ionicons name)
    { icon: "globe", label: "Language" },
    { icon: "time", label: "History" },
    { icon: "notifications", label: "Notifications" },
    { icon: "color-palette", label: "Theme" },
    { icon: "help", label: "Help Center" },
    { icon: "shield", label: "Privacy Policy" },
    { icon: "information-circle", label: "About AI" },
    { icon: "mail", label: "Contact us" },
  ];

  const handleMenuItemPress = (label: string) => {
    console.log(`Navigating to ${label} screen`);
    // Implement navigation to the appropriate screen
    switch (label) {
      case "Manage Account":
        navigation.navigate("ManageAccount");
        break;
      case "Security":
        navigation.navigate("Security");
        break;
      // Add more cases as needed
      default:
        console.log(`No navigation implemented for ${label}`);
    }
  };

  return (
    <View style={styles.container}>
      {/* List of Settings Menu */}
      {settingsMenu.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => handleMenuItemPress(item.label)}
        >
          <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={24} color="black" />
          <Text style={styles.menuLabel}>{item.label}</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      ))}
      {/* Log Out Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => console.log("Logging out")}>
        <Ionicons name="log-out" size={24} color="red" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the Settings Screen
const styles = StyleSheet.create({
  container: {
    paddingTop: 100, // Tambahkan padding atas agar tidak terpotong
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuLabel: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "500",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
  },
  logoutText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "500",
    color: "red",
  },
});

export default SettingsScreen;