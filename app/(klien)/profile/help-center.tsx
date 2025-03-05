"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import SettingsHeader from "../components/SettingsHeader"

export default function HelpCenterScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  const toggleFaq = (id: string) => {
    if (expandedFaq === id) {
      setExpandedFaq(null)
    } else {
      setExpandedFaq(id)
    }
  }

  const faqCategories = [
    {
      id: "account",
      title: "Account & Profile",
      icon: "person-circle",
      color: "#4A6FFF",
      faqs: [
        {
          id: "account-1",
          question: "How do I change my password?",
          answer:
            "To change your password, go to Settings > Security and follow the instructions to update your password. Make sure to choose a strong password that includes a mix of letters, numbers, and special characters.",
        },
        {
          id: "account-2",
          question: "How do I update my profile information?",
          answer:
            "You can update your profile information by navigating to Settings > Manage Account. From there, you can edit your name, email, phone number, and other personal details.",
        },
        {
          id: "account-3",
          question: "How do I delete my account?",
          answer:
            "To delete your account, go to Settings > Manage Account and scroll down to the 'Danger Zone' section. Click on 'Delete Account' and follow the confirmation steps. Please note that this action is irreversible and all your data will be permanently deleted.",
        },
      ],
    },
    {
      id: "security",
      title: "Security & Privacy",
      icon: "shield",
      color: "#FF6B6B",
      faqs: [
        {
          id: "security-1",
          question: "How does two-factor authentication work?",
          answer:
            "Two-factor authentication adds an extra layer of security to your account. When enabled, you'll need to provide both your password and a verification code sent to your phone or email when logging in from a new device.",
        },
        {
          id: "security-2",
          question: "Can I see which devices are logged into my account?",
          answer:
            "Yes, you can view all active sessions in Settings > Security. This shows all devices currently logged into your account, along with their location and last activity time. You can log out individual devices or all devices at once.",
        },
      ],
    },
    {
      id: "features",
      title: "Features & Functionality",
      icon: "apps",
      color: "#4ECDC4",
      faqs: [
        {
          id: "features-1",
          question: "How do I use the AI assistant?",
          answer:
            "To use the AI assistant, simply tap on the chat icon in the bottom navigation bar. You can ask questions, request information, or give commands to the AI assistant. The assistant can help with a variety of tasks including answering questions, generating content, and providing recommendations.",
        },
        {
          id: "features-2",
          question: "How accurate is the AI?",
          answer:
            "Our AI is designed to provide accurate and helpful information, but it's not perfect. The AI is continuously learning and improving. If you receive information that seems incorrect, you can provide feedback to help improve the system.",
        },
      ],
    },
    {
      id: "billing",
      title: "Billing & Subscription",
      icon: "card",
      color: "#FF9F1C",
      faqs: [
        {
          id: "billing-1",
          question: "How do I upgrade to a premium plan?",
          answer:
            "To upgrade to a premium plan, go to the Subscription section in the app and select the plan that best suits your needs. You can choose between monthly or annual billing cycles, and payment can be made via credit card, PayPal, or Apple/Google Pay.",
        },
        {
          id: "billing-2",
          question: "How do I cancel my subscription?",
          answer:
            "You can cancel your subscription at any time by going to the Subscription section and selecting 'Cancel Subscription'. Your premium features will remain active until the end of your current billing cycle.",
        },
      ],
    },
  ]

  return (
    <View style={styles.container}>
      <SettingsHeader title="Help Center" />

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#757575" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for help"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Ionicons name="close-circle" size={20} color="#757575" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Quick Help Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Help</Text>
          <View style={styles.quickHelpGrid}>
            <TouchableOpacity style={styles.quickHelpItem}>
              <View style={[styles.quickHelpIcon, { backgroundColor: "#4A6FFF20" }]}>
                <Ionicons name="chatbubbles" size={24} color="#4A6FFF" />
              </View>
              <Text style={styles.quickHelpText}>Chat with Support</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickHelpItem}>
              <View style={[styles.quickHelpIcon, { backgroundColor: "#FF6B6B20" }]}>
                <Ionicons name="mail" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.quickHelpText}>Email Support</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickHelpItem}>
              <View style={[styles.quickHelpIcon, { backgroundColor: "#4ECDC420" }]}>
                <Ionicons name="document-text" size={24} color="#4ECDC4" />
              </View>
              <Text style={styles.quickHelpText}>User Guide</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickHelpItem}>
              <View style={[styles.quickHelpIcon, { backgroundColor: "#FF9F1C20" }]}>
                <Ionicons name="videocam" size={24} color="#FF9F1C" />
              </View>
              <Text style={styles.quickHelpText}>Video Tutorials</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FAQ Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>

          {faqCategories.map((category) => (
            <View key={category.id} style={styles.faqCategory}>
              <View style={styles.categoryHeader}>
                <View style={[styles.categoryIcon, { backgroundColor: `${category.color}20` }]}>
                  <Ionicons name={category.icon as keyof typeof Ionicons.glyphMap} size={24} color={category.color} />
                </View>
                <Text style={styles.categoryTitle}>{category.title}</Text>
              </View>

              <View style={styles.faqList}>
                {category.faqs.map((faq) => (
                  <TouchableOpacity key={faq.id} style={styles.faqItem} onPress={() => toggleFaq(faq.id)}>
                    <View style={styles.faqQuestion}>
                      <Text style={styles.questionText}>{faq.question}</Text>
                      <Ionicons
                        name={expandedFaq === faq.id ? "chevron-up" : "chevron-down"}
                        size={20}
                        color="#757575"
                      />
                    </View>

                    {expandedFaq === faq.id && <Text style={styles.answerText}>{faq.answer}</Text>}
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Contact Section */}
        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Still need help?</Text>
          <Text style={styles.contactDescription}>
            Our support team is available 24/7 to assist you with any questions or issues.
          </Text>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact Support</Text>
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
  searchContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
    color: "#333",
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
  },
  quickHelpGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  quickHelpItem: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  quickHelpIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  quickHelpText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    textAlign: "center",
  },
  faqCategory: {
    marginBottom: 20,
  },
  categoryHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  faqList: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  faqItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  faqQuestion: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    flex: 1,
  },
  answerText: {
    fontSize: 14,
    color: "#757575",
    marginTop: 12,
    lineHeight: 20,
  },
  contactSection: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 16,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  contactDescription: {
    fontSize: 14,
    color: "#757575",
    textAlign: "center",
    marginBottom: 16,
  },
  contactButton: {
    backgroundColor: "#4A6FFF",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  contactButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  bottomSpace: {
    height: 40,
  },
})

