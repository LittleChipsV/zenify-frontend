"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, TextInput } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import SettingsHeader from "../components/SettingsHeader"

export default function SecurityScreen() {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false)
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(true)
  const [isRememberDeviceEnabled, setIsRememberDeviceEnabled] = useState(true)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <View style={styles.container}>
      <SettingsHeader title="Security" />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Password Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Change Password</Text>
          <View style={styles.card}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Current Password</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.passwordInput}
                  value={currentPassword}
                  onChangeText={setCurrentPassword}
                  placeholder="Enter current password"
                  secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity
                  style={styles.visibilityButton}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  <Ionicons name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} size={20} color="#757575" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>New Password</Text>
              <TextInput
                style={styles.input}
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder="Enter new password"
                secureTextEntry={!isPasswordVisible}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Confirm New Password</Text>
              <TextInput
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm new password"
                secureTextEntry={!isPasswordVisible}
              />
            </View>

            <View style={styles.passwordStrengthContainer}>
              <Text style={styles.passwordStrengthLabel}>Password Strength:</Text>
              <View style={styles.strengthMeter}>
                <View style={[styles.strengthBar, styles.strengthWeak]} />
                <View
                  style={[
                    styles.strengthBar,
                    newPassword.length >= 8 ? styles.strengthMedium : styles.strengthInactive,
                  ]}
                />
                <View
                  style={[
                    styles.strengthBar,
                    newPassword.length >= 12 ? styles.strengthStrong : styles.strengthInactive,
                  ]}
                />
              </View>
              <Text style={styles.strengthText}>
                {newPassword.length === 0
                  ? "None"
                  : newPassword.length < 8
                    ? "Weak"
                    : newPassword.length < 12
                      ? "Medium"
                      : "Strong"}
              </Text>
            </View>

            <TouchableOpacity style={styles.updatePasswordButton}>
              <Text style={styles.updatePasswordText}>Update Password</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Two-Factor Authentication */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Two-Factor Authentication</Text>
          <View style={styles.card}>
            <View style={styles.toggleItem}>
              <View>
                <Text style={styles.toggleLabel}>Two-Factor Authentication</Text>
                <Text style={styles.toggleDescription}>Secure your account with an additional verification step</Text>
              </View>
              <Switch
                value={isTwoFactorEnabled}
                onValueChange={setIsTwoFactorEnabled}
                trackColor={{ false: "#E0E0E0", true: "#4A6FFF30" }}
                thumbColor={isTwoFactorEnabled ? "#4A6FFF" : "#F5F5F5"}
              />
            </View>

            {isTwoFactorEnabled && (
              <TouchableOpacity style={styles.setupButton}>
                <Text style={styles.setupButtonText}>Setup Two-Factor Authentication</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Login Security */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Login Security</Text>
          <View style={styles.card}>
            <View style={styles.toggleItem}>
              <View>
                <Text style={styles.toggleLabel}>Biometric Login</Text>
                <Text style={styles.toggleDescription}>Use Face ID or Touch ID to log in</Text>
              </View>
              <Switch
                value={isBiometricEnabled}
                onValueChange={setIsBiometricEnabled}
                trackColor={{ false: "#E0E0E0", true: "#4A6FFF30" }}
                thumbColor={isBiometricEnabled ? "#4A6FFF" : "#F5F5F5"}
              />
            </View>

            <View style={styles.toggleItem}>
              <View>
                <Text style={styles.toggleLabel}>Remember Device</Text>
                <Text style={styles.toggleDescription}>Stay logged in on this device</Text>
              </View>
              <Switch
                value={isRememberDeviceEnabled}
                onValueChange={setIsRememberDeviceEnabled}
                trackColor={{ false: "#E0E0E0", true: "#4A6FFF30" }}
                thumbColor={isRememberDeviceEnabled ? "#4A6FFF" : "#F5F5F5"}
              />
            </View>
          </View>
        </View>

        {/* Active Sessions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Active Sessions</Text>
          <View style={styles.card}>
            <View style={styles.sessionItem}>
              <View style={styles.sessionInfo}>
                <Ionicons name="phone-portrait-outline" size={24} color="#4A6FFF" />
                <View style={styles.sessionDetails}>
                  <Text style={styles.deviceName}>iPhone 13 Pro</Text>
                  <Text style={styles.sessionLocation}>New York, USA • Current Device</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={styles.logoutText}>Log out</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sessionItem}>
              <View style={styles.sessionInfo}>
                <Ionicons name="laptop-outline" size={24} color="#4A6FFF" />
                <View style={styles.sessionDetails}>
                  <Text style={styles.deviceName}>MacBook Pro</Text>
                  <Text style={styles.sessionLocation}>San Francisco, USA • 2 days ago</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={styles.logoutText}>Log out</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.logoutAllButton}>
            <Text style={styles.logoutAllText}>Log Out From All Devices</Text>
          </TouchableOpacity>
        </View>

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
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#333",
  },
  passwordInputContainer: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: "#333",
  },
  visibilityButton: {
    padding: 12,
  },
  passwordStrengthContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  passwordStrengthLabel: {
    fontSize: 14,
    color: "#757575",
    marginRight: 8,
  },
  strengthMeter: {
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
  },
  strengthBar: {
    height: 6,
    flex: 1,
    marginRight: 4,
    borderRadius: 3,
  },
  strengthWeak: {
    backgroundColor: "#FF6B6B",
  },
  strengthMedium: {
    backgroundColor: "#FFD166",
  },
  strengthStrong: {
    backgroundColor: "#06D6A0",
  },
  strengthInactive: {
    backgroundColor: "#E0E0E0",
  },
  strengthText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#757575",
  },
  updatePasswordButton: {
    backgroundColor: "#4A6FFF",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  updatePasswordText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  toggleItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
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
  setupButton: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  setupButtonText: {
    color: "#4A6FFF",
    fontWeight: "500",
  },
  sessionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  sessionInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  sessionDetails: {
    marginLeft: 12,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  sessionLocation: {
    fontSize: 14,
    color: "#757575",
    marginTop: 2,
  },
  logoutText: {
    color: "#FF3B30",
    fontWeight: "500",
  },
  logoutAllButton: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginTop: 12,
  },
  logoutAllText: {
    color: "#FF3B30",
    fontWeight: "500",
  },
  bottomSpace: {
    height: 40,
  },
})

