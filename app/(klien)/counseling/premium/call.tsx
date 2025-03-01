import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const VideoCallScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      {/* Video Dokter - Layar Penuh */}
      <Image source={{ uri: "https://source.unsplash.com/doctor" }} style={styles.fullScreenVideo} />

      {/* Video Pasien - Pojok Kanan Atas */}
      <Image source={{ uri: "https://source.unsplash.com/patient" }} style={styles.smallVideo} />

      {/* Tombol Back */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Kontrol Panggilan */}
      <View style={styles.controlPanel}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="volume-mute" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.endCallButton}>
          <Ionicons name="call" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="videocam" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  fullScreenVideo: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  smallVideo: {
    width: 100,
    height: 120,
    borderRadius: 10,
    position: "absolute",
    top: 20,
    right: 20,
    borderWidth: 2,
    borderColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 20,
    padding: 6,
  },
  controlPanel: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 30,
    marginHorizontal: 20,
    paddingVertical: 12,
  },
  iconButton: {
    padding: 10,
  },
  endCallButton: {
    backgroundColor: "red",
    borderRadius: 50,
    padding: 14,
  },
});

export default VideoCallScreen;
