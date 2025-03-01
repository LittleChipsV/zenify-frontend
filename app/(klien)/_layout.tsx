import { Tabs } from "expo-router";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import React from "react";

export default function DashboardLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#ffffff", height: 78 },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="meditasi"
        options={{
          title: "Meditasi",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="footsteps" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="counseling"
        options={{
          title: "Konseling",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          title: "Journal",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="mood"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="payment/payment"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="payment/payment-success"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
