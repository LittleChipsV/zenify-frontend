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
        name="components/SettingsHeader"
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
          <Tabs.Screen
          name="profile/manage-account"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="profile/security"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="profile/notifications"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="profile/about-ai"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="profile/help-center"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="profile/theme"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="profile/language"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="profile/history"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="profile/terms-conditions"
          options={{
            href: null,
          }}      
          />
          <Tabs.Screen
          name="profile/privacy-policy"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="profile/notification"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="profile/contact-us"
          options={{
            href: null,
          }}
        />
      </Tabs>
  );
}
