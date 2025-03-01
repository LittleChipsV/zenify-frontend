import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  ManageAccount: undefined;
  Security: undefined;
  // Tambahkan navigasi lainnya jika perlu
};

type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const SettingsScreen: React.FC<{ navigation: SettingsScreenNavigationProp }> = ({ navigation }) => {
  const settingsMenu = [
    { icon: "person", label: "Manage Account" },
    { icon: "lock-closed", label: "Security" },
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
    switch (label) {
      case "Manage Account":
        navigation.navigate("ManageAccount");
        break;
      case "Security":
        navigation.navigate("Security");
        break;
      default:
        console.log(`No navigation implemented for ${label}`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 24 }} /> {/* Spacer untuk keseimbangan layout */}
      </View>

      {/* List Menu */}
      {settingsMenu.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => handleMenuItemPress(item.label)}
        >
          <View style={styles.menuLeft}>
            <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={24} color="black" />
            <Text style={styles.menuLabel}>{item.label}</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      ))}

      {/* Log Out */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => console.log("Logging out")}>
        <Ionicons name="log-out" size={24} color="red" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingTop: 70, 
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuLabel: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "500",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 32,
  },
  logoutText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "500",
    color: "red",
    flex: 1,
  },
});

export default SettingsScreen;
