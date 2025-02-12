import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const ForgotPasswordScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* Background Gradient */}
      <LinearGradient
        colors={["#149FFF", "#2575fc"]}
        style={{
          height: 320,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
          position: "relative",
        }}
      >
        {/* Header Row (Back Button) */}
        <View
          style={{
            position: "absolute",
            top: 50,
            left: 20,
            right: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* Tombol Back */}
          <TouchableOpacity
            onPress={() => router.push("/signin")}
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              padding: 10,
              borderRadius: 50,
            }}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Logo & Nama App */}
        <Image source={{ uri: "https://via.placeholder.com/100" }} style={{ width: 90, height: 90, borderRadius: 20 }} />
        <Text style={{ fontSize: 32, fontWeight: "bold", color: "#fff", marginTop: 20 }}>Zenify</Text>
      </LinearGradient>

      {/* Layer Putih */}
      <View
        style={{
          flex: 1,
          padding: 20,
          marginTop: -60,
          backgroundColor: "#fff",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 }}>Forgot Password?</Text>
        <Text style={{ fontSize: 14, textAlign: "center", color: "#666", marginBottom: 20 }}>
          Enter your email and we'll send you a link to reset your password
        </Text>

        {/* Email */}
        <Text style={{ fontSize: 14, color: "#666", marginBottom: 5 }}>Email Address</Text>
        <TextInput
          placeholder="example@email.com"
          value={email}
          onChangeText={setEmail}
          style={{
            backgroundColor: "#F6F7FB",
            padding: 15,
            borderRadius: 10,
            marginBottom: 15,
            fontSize: 16,
          }}
        />

        {/* Tombol Send Reset Link */}
        <LinearGradient
          colors={["#149FFF", "#2575fc"]}
          style={{
            padding: 15,
            borderRadius: 10,
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={() => alert("Reset link sent to " + email)}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>Send Reset Link</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
