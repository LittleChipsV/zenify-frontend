"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import SettingsHeader from "../components/SettingsHeader"

export default function ContactUsScreen() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("general")

  const categories = [
    { id: "general", label: "General Inquiry", icon: "help-circle" },
    { id: "technical", label: "Technical Support", icon: "construct" },
    { id: "billing", label: "Billing Issue", icon: "card" },
    { id: "feedback", label: "Feedback", icon: "chatbubble" },
    { id: "bug", label: "Report a Bug", icon: "bug" },
  ]

  return (
    <View style={styles.container}>
      <SettingsHeader title="Contact Us" />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Contact Info */}
        <View style={styles.contactInfoCard}>
          <View style={styles.contactInfoItem}>
            <Ionicons name="mail" size={24} color="#4A6FFF" />
            <Text style={styles.contactInfoText}>support@example.com</Text>
          </View>

          <View style={styles.contactInfoItem}>
            <Ionicons name="call" size={24} color="#4A6FFF" />
            <Text style={styles.contactInfoText}>+1 (555) 123-4567</Text>
          </View>

          <View style={styles.contactInfoItem}>
            <Ionicons name="location" size={24} color="#4A6FFF" />
            <Text style={styles.contactInfoText}>123 Tech Street, San Francisco, CA 94107</Text>
          </View>
        </View>

        {/* Contact Form */}
        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Send us a message</Text>

          {/* Category Selection */}
          <Text style={styles.inputLabel}>Category</Text>
          <View style={styles.categoryContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[styles.categoryButton, selectedCategory === category.id && styles.selectedCategoryButton]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Ionicons
                  name={category.icon as keyof typeof Ionicons.glyphMap}
                  size={20}
                  color={selectedCategory === category.id ? "#fff" : "#4A6FFF"}
                />
                <Text
                  style={[
                    styles.categoryButtonText,
                    selectedCategory === category.id && styles.selectedCategoryButtonText,
                  ]}
                >
                  {category.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Form Fields */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter your name" />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Subject</Text>
            <TextInput style={styles.input} value={subject} onChangeText={setSubject} placeholder="Enter subject" />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Message</Text>
            <TextInput
              style={styles.messageInput}
              value={message}
              onChangeText={setMessage}
              placeholder="Type your message here..."
              multiline
              numberOfLines={6}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>

        {/* FAQ Section */}
        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
          <Text style={styles.faqDescription}>Before contacting us, you might find an answer in our FAQ section.</Text>
          <TouchableOpacity style={styles.faqButton}>
            <Text style={styles.faqButtonText}>View FAQs</Text>
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
  contactInfoCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  contactInfoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  contactInfoText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 16,
  },
  formCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F8FF",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  selectedCategoryButton: {
    backgroundColor: "#4A6FFF",
  },
  categoryButtonText: {
    color: "#4A6FFF",
    fontWeight: "500",
    fontSize: 14,
    marginLeft: 6,
  },
  selectedCategoryButtonText: {
    color: "#fff",
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
  messageInput: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#333",
    height: 120,
  },
  submitButton: {
    backgroundColor: "#4A6FFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 8,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  faqSection: {
    backgroundColor: "#F5F8FF",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  faqDescription: {
    fontSize: 14,
    color: "#757575",
    textAlign: "center",
    marginBottom: 16,
  },
  faqButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#4A6FFF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  faqButtonText: {
    color: "#4A6FFF",
    fontWeight: "500",
    fontSize: 16,
  },
  bottomSpace: {
    height: 40,
  },
})

