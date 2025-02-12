import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const SignInScreen = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* Background Gradient */}
      <LinearGradient
        colors={["#149FFF", "#2575fc"]}
        style={{
          height: 320, // Sama seperti Sign Up
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
          position: "relative",
        }}
      >
        {/* Header Row (Back Button & Sign Up Link) */}
        <View
          style={{
            position: "absolute",
            top: 50,
            left: 20,
            right: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Tombol Back */}
          <TouchableOpacity
            onPress={() => router.push("/")}
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              padding: 10,
              borderRadius: 50,
            }}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          {/* "Don't have an account?" */}
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text style={{ color: "#fff", fontSize: 14, textAlign: "right" }}>
              Don't have an account? <Text style={{ fontWeight: "bold" }}>Sign Up</Text>
            </Text>
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
          marginTop: -60, // Menurunkan layer putih lebih ke bawah
          backgroundColor: "#fff",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 }}>Welcome Back!</Text>
        <Text style={{ fontSize: 14, textAlign: "center", color: "#666", marginBottom: 20 }}>
          Enter your details below
        </Text>

        {/* Email */}
        <Text style={{ fontSize: 14, color: "#666", marginBottom: 5 }}>Email Address</Text>
        <TextInput
          placeholder="example@email.com"
          style={{
            backgroundColor: "#F6F7FB",
            padding: 15,
            borderRadius: 10,
            marginBottom: 15,
            fontSize: 16,
          }}
        />

        {/* Password */}
        <Text style={{ fontSize: 14, color: "#666", marginBottom: 5 }}>Password</Text>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#F6F7FB",
            padding: 15,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <TextInput placeholder="********" secureTextEntry={!passwordVisible} style={{ flex: 1, fontSize: 16 }} />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Ionicons name={passwordVisible ? "eye-off" : "eye"} size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity onPress={() => router.push("/forgot")} style={{ alignSelf: "flex-end", marginTop: 10 }}>
          <Text style={{ color: "#6a11cb", fontSize: 14 }}>Forgot your password?</Text>
        </TouchableOpacity>

        {/* Tombol Sign In */}
        <LinearGradient
          colors={["#149FFF", "#2575fc"]}
          style={{
            padding: 15,
            borderRadius: 10,
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={() => router.push("/dashboard/home")}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>Sign In</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Or sign in with */}
        <Text style={{ textAlign: "center", color: "#666", marginVertical: 20 }}>Or sign in with</Text>

        {/* Social Login Buttons */}
        <View style={{ flexDirection: "row", justifyContent: "center", gap: 20 }}>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#ddd",
              alignItems: "center",
              justifyContent: "center",
              elevation: 5,
            }}
          >
            <Image source={require("../../assets/icons/google.png")} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#ddd",
              alignItems: "center",
              justifyContent: "center",
              elevation: 5,
            }}
          >
            <Image source={require("../../assets/icons/apple.png")} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#ddd",
              alignItems: "center",
              justifyContent: "center",
              elevation: 5,
            }}
          >
            <Image source={require("../../assets/icons/facebook.png")} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>
          <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
      <Text style={{ textAlign: "center", color: "#666", fontSize: 12 }}>
       By Signing in, you indicate that you have read, {"\n"}
        understood, and agreed to our{" "}
        <Text style={{ color: "#2575fc", fontWeight: "bold" }}>Terms</Text> and{" "}
        <Text style={{ color: "#2575fc", fontWeight: "bold" }}>Privacy Policy</Text>.
      </Text>
    </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
