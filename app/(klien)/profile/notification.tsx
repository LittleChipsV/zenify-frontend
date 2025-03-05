"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, Switch } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import SettingsHeader from "../components/SettingsHeader"

export default function NotificationsScreen() {
  const [notificationSettings, setNotificationSettings] = useState({
    pushEnabled: true,
    emailEnabled: true,
    newMessages: true,
    mentions: true,
    friendRequests: true,
    updates: false,
    marketing: false,
    soundEnabled: true,
    vibrationEnabled: true,
  })

  const updateSetting = (key: keyof typeof notificationSettings, value: boolean) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <View style={styles.container}>
      <SettingsHeader title="Notifications" />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* General Notification Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>
          <View style={styles.card}>
            <View style={styles.toggleItem}>
              <View style={styles.toggleInfo}>
                <Ionicons name="notifications" size={22} color="#4A6FFF" style={styles.toggleIcon} />
                <View>
                  <Text style={styles.toggleLabel}>Push Notifications</Text>
                  <Text style={styles.toggleDescription}>Receive push notifications on your device</Text>
                </View>
              </View>
              <Switch
                value={notificationSettings.pushEnabled}
                onValueChange={(value) => updateSetting("pushEnabled", value)}
                trackColor={{ false: "#E0E0E0", true: "#4A6FFF30" }}
                thumbColor={notificationSettings.pushEnabled ? "#4A6FFF" : "#F5F5F5"}
              />
            </View>

            <View style={styles.toggleItem}>
              <View style={styles.toggleInfo}>
                <Ionicons name="mail" size={22} color="#4A6FFF" style={styles.toggleIcon} />
                <View>
                  <Text style={styles.toggleLabel}>Email Notifications</Text>
                  <Text style={styles.toggleDescription}>Receive email notifications</Text>
                </View>
              </View>
              <Switch
                value={notificationSettings.emailEnabled}
                onValueChange={(value) => updateSetting("emailEnabled", value)}
                trackColor={{ false: "#E0E0E0", true: "#4A6FFF30" }}
                thumbColor={notificationSettings.emailEnabled ? "#4A6FFF" : "#F5F5F5"}
              />
            </View>
          </View>
        </View>

        {/* Notification Types */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notification Types</Text>
          <View style={styles.card}>
            <View style={styles.toggleItem}>
              <View style={styles.toggleInfo}>
                <Ionicons name="chatbubble" size={22} color="#4ECDC4" style={styles.toggleIcon} />
                <View>
                  <Text style={styles.toggleLabel}>New Messages</Text>
                  <Text style={styles.toggleDescription}>Notifications for new messages</Text>
                </View>
              </View>
              <Switch
                value={notificationSettings.newMessages}
                onValueChange={(value) => updateSetting("newMessages", value)}
                trackColor={{ false: "#E0E0E0", true: "#4A6FFF30" }}
                thumbColor={notificationSettings.newMessages ? "#4A6FFF" : "#F5F5F5"}
              />
            </View>

            <View style={styles.toggleItem}>
              <View style={styles.toggleInfo}>
                <Ionicons name="at" size={22} color="#9D65C9" style={styles.toggleIcon} />
                <View>
                  <Text style={styles.toggleLabel}>Mentions</Text>
                  <Text style={styles.toggleDescription}>Notifications when you are mentioned</Text>
                </View>
              </View>
              <Switch
                value={notificationSettings.mentions}
                onValueChange={(value) => updateSetting("mentions", value)}
                trackColor={{ false: "#E0E0E0", true: "#4A6FFF30" }}
                thumbColor={notificationSettings.mentions ? "#4A6FFF" : "#F5F5F5"}
              />
            </View>

            <View style={styles.toggleItem}>
              <View style={styles.toggleInfo}>
                <Ionicons name="person-add" size={22} color="#FF9F1C" style={styles.toggleIcon} />
                <View>
                  <Text style={styles.toggleLabel}>Friend Requests</Text>
                  <Text style={styles.toggleDescription}>Notifications for friend requests</Text>
                </View>
              </View>
              <Switch
                value={notificationSettings.friendRequests}
                onValueChange={(value) => updateSetting("friendRequests", value)}
                trackColor={{ false: "#E0E0E0", true: "#4A6FFF30" }}
                thumbColor={notificationSettings.friendRequests ? "#4A6FFF" : "#F5F5F5"}
              />
            </View>

            <View style={styles.toggleItem}>
              <View style={styles.toggleInfo}>
                <Ionicons name="refresh" size={22} color="#2EC4B6" style={styles.toggleIcon} />
                <View>
                  <Text style={styles.toggleLabel}>App Updates</Text>
                  <Text style={styles.toggleDescription}>Notifications about app updates</Text>
                </View>
              </View>
              <Switch
                value={notificationSettings.updates}
                onValueChange={(value) => updateSetting("updates", value)}
                trackColor={{ false: "#E0E0E0", true: "#4A6FFF30" }}
                thumbColor={notificationSettings.updates ? "#4A6FFF" : "#F5F5F5"}
              />
            </View>

            <View style={styles.toggleItem}>
              <View style={styles.toggleInfo}>
                <Ionicons name="megaphone" size={22} color="#FF6B6B" style={styles.toggleIcon} />
                <View>
                  <Text style={styles.toggleLabel}>Marketing</Text>
                  <Text style={styles.toggleDescription}>Promotional and marketing notifications</Text>
                </View>
              </View>
              <Switch
                value={notificationSettings.marketing}
                onValueChange={(value) => updateSetting("marketing", value)}
                trackColor={{ false: "#E0E0E0", true: "#4A6FFF30" }}
                thumbColor={notificationSettings.marketing ? "#4A6FFF" : "#F5F5F5"}
              />
            </View>
          </View>
        </View>

        {/* Sound & Vibration */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sound & Vibration</Text>
          <View style={styles.card}>
            <View style={styles.toggleItem}>
              <View style={styles.toggleInfo}>
                <Ionicons name="volume-high" size={22} color="#4A6FFF" style={styles.toggleIcon} />
                <View>
                  <Text style={styles.toggleLabel}>Sound</Text>
                  <Text style={styles.toggleDescription}>Play sound for notifications</Text>
                </View>
              </View>
              <Switch
                value={notificationSettings.soundEnabled}
                onValueChange={(value) => updateSetting("soundEnabled", value)}
                trackColor={{ false: "#E0E0E0", true: "#4A6FFF30" }}
                thumbColor={notificationSettings.soundEnabled ? "#4A6FFF" : "#F5F5F5"}
              />
            </View>

            <View style={styles.toggleItem}>
              <View style={styles.toggleInfo}>
                <Ionicons name="phone-portrait" size={22} color="#4A6FFF" style={styles.toggleIcon} />
                <View>
                  <Text style={styles.toggleLabel}>Vibration</Text>
                  <Text style={styles.toggleDescription}>Vibrate for notifications</Text>
                </View>
              </View>
              <Switch
                value={notificationSettings.vibrationEnabled}
                onValueChange={(value) => updateSetting("vibrationEnabled", value)}
                trackColor={{ false: "#E0E0E0", true: "#4A6FFF30" }}
                thumbColor={notificationSettings.vibrationEnabled ? "#4A6FFF" : "#F5F5F5"}
              />
            </View>
          </View>
        </View>

        {/* Quiet Hours */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quiet Hours</Text>
          <View style={styles.card}>
            <View style={styles.quietHoursInfo}>
              <Ionicons name="moon" size={24} color="#9D65C9" />
              <View style={styles.quietHoursTextContainer}>
                <Text style={styles.quietHoursTitle}>Do Not Disturb</Text>
                <Text style={styles.quietHoursDescription}>
                  Configure quiet hours when you don't want to receive notifications
                </Text>
              </View>
            </View>

            <View style={styles.timeContainer}>
              <View style={styles.timeBlock}>
                <Text style={styles.timeLabel}>From</Text>
                <View style={styles.timeSelector}>
                  <Text style={styles.timeText}>10:00 PM</Text>
                </View>
              </View>

              <View style={styles.timeBlock}>
                <Text style={styles.timeLabel}>To</Text>
                <View style={styles.timeSelector}>
                  <Text style={styles.timeText}>7:00 AM</Text>
                </View>
              </View>
            </View>
          </View>
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
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  toggleItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  toggleInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  toggleIcon: {
    marginRight: 16,
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
    maxWidth: "90%",
  },
  quietHoursInfo: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    alignItems: "center",
  },
  quietHoursTextContainer: {
    marginLeft: 16,
  },
  quietHoursTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  quietHoursDescription: {
    fontSize: 14,
    color: "#757575",
    marginTop: 4,
    maxWidth: "90%",
  },
  timeContainer: {
    flexDirection: "row",
    padding: 16,
  },
  timeBlock: {
    flex: 1,
  },
  timeLabel: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 8,
  },
  timeSelector: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginRight: 8,
  },
  timeText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  bottomSpace: {
    height: 40,
  },
})

