import { Tabs } from "expo-router";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from 'react';

export default function DashboardLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Sembunyikan header di semua tab
        tabBarStyle: { backgroundColor: "#ffffff", height: 60 },
        tabBarActiveTintColor: "#007AFF",
      }}
    >
    <Tabs.Screen
    name="payment-success"
    options={{  
    href: null, // Mencegah mood muncul sebagai tab
        }}
        />
    <Tabs.Screen
    name="InstantCounselingScreen"
    options={{
    href: null, // Mencegah InstantCounselingScreen muncul sebagai tab
        }}
        />
    <Tabs.Screen
    name="payment"
    options={{
    href: null, // Mencegah doctor muncul sebagai tab
        }}
        />
      {/** Hanya daftar tab yang diinginkan */}
    <Tabs.Screen
      name="home"        options={{
        title: "Home",
        tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
       }}
      />
      <Tabs.Screen
        name="counseling"
        options={{
          title: "Counseling",
          tabBarIcon: ({ color, size }) => <MaterialIcons name="support-agent" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          title: "Journal",
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="book" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="journey"
        options={{
          title: "Journey",
          tabBarIcon: ({ color, size }) => <Ionicons name="footsteps-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
