import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const SignUpScreen = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const checkPasswordStrength = (pass: string) => {
    if (pass.length < 6) {
      setPasswordStrength("Weak");
    } else if (pass.match(/[A-Z]/) && pass.match(/[0-9]/) && pass.match(/[@$!%*?&]/)) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Medium");
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* Background Gradient */}
      <LinearGradient
        colors={["#149FFF", "#2575fc"]}
        style={{
          height: 320, // Lebih tinggi untuk memberi lebih banyak ruang warna biru
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
          position: "relative",
        }}
      >
        {/* Header Container */}
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

          {/* "Already have an account?" */}
          <TouchableOpacity onPress={() => router.push("/signin")}>
            <Text style={{ color: "#fff", fontSize: 14 }}>
              Already have an account? <Text style={{ fontWeight: "bold" }}>Sign In</Text>
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
        
        <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 }}>Create an Account</Text>
        <Text style={{ fontSize: 14, textAlign: "center", color: "#666", marginBottom: 20 }}>Fill in the details below</Text>

        {/* Full Name */}
        <Text style={{ fontSize: 14, color: "#666", marginBottom: 5 }}>Full Name</Text>
        <TextInput
          placeholder="John Doe"
          style={{ backgroundColor: "#F6F7FB", padding: 15, borderRadius: 10, marginBottom: 15, fontSize: 16 }}
        />

        {/* Email */}
        <Text style={{ fontSize: 14, color: "#666", marginBottom: 5 }}>Email Address</Text>
        <TextInput
          placeholder="john@example.com"
          style={{ backgroundColor: "#F6F7FB", padding: 15, borderRadius: 10, marginBottom: 15, fontSize: 16 }}
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
          <TextInput
            placeholder="********"
            secureTextEntry={!passwordVisible}
            style={{ flex: 1, fontSize: 16 }}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              checkPasswordStrength(text);
            }}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Ionicons name={passwordVisible ? "eye-off" : "eye"} size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Password Strength */}
        {password.length > 0 && (
          <Text
            style={{
              marginTop: 5,
              color: passwordStrength === "Strong" ? "green" : passwordStrength === "Medium" ? "orange" : "red",
            }}
          >
            Password Strength: {passwordStrength}
          </Text>
        )}

        {/* Confirm Password */}
        <Text style={{ fontSize: 14, color: "#666", marginBottom: 5, marginTop: 15 }}>Confirm Password</Text>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#F6F7FB",
            padding: 15,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="********"
            secureTextEntry={!confirmPasswordVisible}
            style={{ flex: 1, fontSize: 16 }}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
            <Ionicons name={confirmPasswordVisible ? "eye-off" : "eye"} size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Password Match Warning */}
        {confirmPassword.length > 0 && password !== confirmPassword && (
          <Text style={{ marginTop: 5, color: "red" }}>⚠ Passwords do not match</Text>
        )}

        {/* Sign Up Button */}
        <LinearGradient colors={["#149FFF", "#2575fc"]} style={{ padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 }}>
          <TouchableOpacity onPress={() => router.push("/signin")}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>Sign Up</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Or sign in with */}
        <Text style={{ textAlign: "center", color: "#666", marginVertical: 20 }}>Or sign up with</Text>

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
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
