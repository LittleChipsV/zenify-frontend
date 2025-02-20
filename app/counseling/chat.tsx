import React, { useCallback, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet, Alert, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Audio } from "expo-av";
import { useRouter } from "expo-router";

interface MessageType {
  id: string;
  sender: "user" | "doctor";
  text?: string;
  image?: string;
  audio?: string;
  time: string;
  isFirstInGroup: boolean;
}

const ChatScreen = () => {
const router = useRouter();
  const [messages, setMessages] = useState<MessageType[]>([
    { id: "1", sender: "doctor", text: "Sepertinya ini terkait dengan perasaan perfeksionisme dan takut gagal. Mari kita coba teknik grounding untuk mengatasi kecemasan ini.", time: "13.09", isFirstInGroup: true },
    { id: "2", sender: "doctor", text: "Coba tarik napas dalam selama 4 detik, tahan 4 detik, lalu hembuskan perlahan selama 6 detik.", time: "13.09", isFirstInGroup: false },
    { id: "3", sender: "doctor", text: "Coba lakukan beberapa kali dan beri tahu bagaimana rasanya.", time: "13.09", isFirstInGroup: false },
    { id: "4", sender: "user", text: "Saya sudah coba, rasanya agak lebih tenang.", time: "13.20", isFirstInGroup: true },
    { id: "5", sender: "doctor", text: "Alhamdulillah, Bagus deh!", time: "13.20", isFirstInGroup: true },
  ]);
  const [inputText, setInputText] = useState("");
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [audioUri, setAudioUri] = useState<string | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      const newMessage: MessageType = {
        id: Math.random().toString(),
        sender: "user",
        image: result.assets[0].uri,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isFirstInGroup: true,
      };
      setMessages([...messages, newMessage]);
    }
  };

  const startRecording = useCallback(async () => {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Microphone access is required to record audio.');
        return;
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
    } catch (err) {
      console.error('Failed to start recording:', err);
    }
  }, []);

  const stopRecording = useCallback(async () => {
    if (!recording) return;
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      if (uri) {
        setAudioUri(uri);
        sendAudioMessage(uri);
      }
      setRecording(null);
    } catch (err) {
      console.error('Failed to stop recording:', err);
    }
  }, [recording]);

  const sendAudioMessage = (uri: string) => {
    const newMessage: MessageType = {
      id: Math.random().toString(),
      sender: "user",
      audio: uri,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isFirstInGroup: true,
    };
    setMessages([...messages, newMessage]);
  };

  const playAudio = useCallback(async (uri: string) => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: true }
      );
      setSound(sound);
      await sound.playAsync();
    } catch (err) {
      console.error('Playback failed:', err);
    }
  }, []);

  const sendMessage = () => {
    if (inputText.trim() === "") return;
    const newMessage: MessageType = {
      id: Math.random().toString(),
      sender: "user",
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isFirstInGroup: true,
    };
    setMessages([...messages, newMessage]);
    setInputText("");
  };

  const renderMessage = ({ item }: { item: MessageType }) => (
    <View style={[styles.messageGroup, item.sender === "user" ? styles.userGroup : styles.doctorGroup]}>
      {item.isFirstInGroup && (
        <View style={styles.messageHeader}>
          <Image source={item.sender === "user" ? require("../../assets/images/profile.jpg") : require("../../assets/images/Dokter.png")} style={styles.avatar} />
          <Text style={styles.senderName}>{item.sender === "user" ? "Anda" : "Dr. Dimas Hakim"}</Text>
          <Text style={styles.messageTime}>{item.time}</Text>
          {item.sender === "user" && <Ionicons name="checkmark-done" size={14} color="#149FFF" style={{ marginLeft: 4 }} />}
        </View>
      )}
      <View style={[styles.messageBubble, item.sender === "user" ? styles.userBubble : styles.doctorBubble]}>
        {item.text && <Text style={[styles.messageText, item.sender === "user" && { color: "#fff" }]}>{item.text}</Text>}
        {item.image && <Image source={{ uri: item.image }} style={styles.imageMessage} />}
        {item.audio && (
          <TouchableOpacity onPress={() => playAudio(item.audio!)} style={styles.audioMessageContainer}>
            <Ionicons name="mic" size={24} color={item.sender === "user" ? "#fff" : "#149FFF"} />
            <Text style={[styles.audioMessageText, item.sender === "user" && { color: "#fff" }]}>Voice Note</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={20}
      enableOnAndroid={true}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail">
            Dr. Dimas Hakim, M.Psi., Psikolog
          </Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Chat List */}
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          contentContainerStyle={[
            styles.chatContainer,
            { paddingBottom: Platform.OS === "ios" ? 80 : 20 },
          ]}
        />

        {/* Input Container */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.iconButton1} onPress={pickImage}>
            <Ionicons name="image" size={24} color="#149FFF" />
          </TouchableOpacity>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Tulis pesan..."
              value={inputText}
              onChangeText={setInputText}
            />
          </View>
          <TouchableOpacity style={styles.iconButton} onPress={recording ? stopRecording : startRecording}>
            <Ionicons name="mic" size={24} color="#149FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

// Styles remain the same
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EEF8FF" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
    paddingTop: 70,
  },
  headerTitle: { fontSize: 16, fontWeight: "bold" },
  chatContainer: { paddingHorizontal: 16, paddingVertical: 10 },
  messageGroup: { marginBottom: 10 },
  doctorGroup: { alignSelf: "flex-start" },
  userGroup: { alignSelf: "flex-end", alignItems: "flex-end" },
  messageHeader: { flexDirection: "row", alignItems: "center", marginBottom: 3 },
  avatar: { width: 30, height: 30, borderRadius: 15, marginRight: 6 },
  senderName: { fontWeight: "bold", fontSize: 12, color: "#333", marginRight: 6 },
  messageTime: { fontSize: 12, color: "#777" },
  messageBubble: { maxWidth: "70%", padding: 12, borderRadius: 14 },
  doctorBubble: { backgroundColor: "#fff" },
  userBubble: { backgroundColor: "#149FFF" },
  messageText: { fontSize: 14 },
  imageMessage: { width: 200, height: 200, borderRadius: 10, marginTop: 5 },
  sendButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#149FFF",
    marginLeft: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },
  audioMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  audioMessageText: {
    fontSize: 14,
    marginLeft: 8,
  },
  iconButton: { width: 40, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 20, backgroundColor: "#F6F6F6", marginLeft: 10 },
  iconButton1: { width: 40, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 20, backgroundColor: "#F6F6F6", marginRight: 10 },
  inputWrapper: { flex: 1, flexDirection: "row", alignItems: "center", backgroundColor: "#F6F6F6", borderRadius: 20, paddingHorizontal: 12 },
});

export default ChatScreen;