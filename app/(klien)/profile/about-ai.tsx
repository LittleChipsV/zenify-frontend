import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import SettingsHeader from "../components/SettingsHeader"

export default function AboutAIScreen() {
  return (
    <View style={styles.container}>
      <SettingsHeader title="About AI" />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* AI Logo Section */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <Ionicons name="bulb" size={60} color="#4A6FFF" />
          </View>
          <Text style={styles.aiName}>AI Assistant</Text>
          <Text style={styles.aiVersion}>Version 2.0.1</Text>
        </View>

        {/* AI Description */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>What is AI Assistant?</Text>
          <Text style={styles.paragraph}>
            AI Assistant is a state-of-the-art artificial intelligence designed to help you with a wide range of tasks.
            It uses advanced machine learning algorithms to understand your requests and provide relevant, helpful
            responses.
          </Text>
          <Text style={styles.paragraph}>
            Our AI is constantly learning and improving to better serve your needs. It can answer questions, provide
            recommendations, generate content, and assist with many other tasks to make your life easier.
          </Text>
        </View>

        {/* AI Capabilities */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Capabilities</Text>

          <View style={styles.capabilityItem}>
            <View style={[styles.capabilityIcon, { backgroundColor: "#4A6FFF20" }]}>
              <Ionicons name="chatbubbles" size={24} color="#4A6FFF" />
            </View>
            <View style={styles.capabilityContent}>
              <Text style={styles.capabilityTitle}>Natural Conversations</Text>
              <Text style={styles.capabilityDescription}>
                Engage in human-like conversations with contextual understanding and memory of previous interactions.
              </Text>
            </View>
          </View>

          <View style={styles.capabilityItem}>
            <View style={[styles.capabilityIcon, { backgroundColor: "#9D65C920" }]}>
              <Ionicons name="search" size={24} color="#9D65C9" />
            </View>
            <View style={styles.capabilityContent}>
              <Text style={styles.capabilityTitle}>Knowledge Base</Text>
              <Text style={styles.capabilityDescription}>
                Access to a vast knowledge base covering a wide range of topics, from science and history to arts and
                culture.
              </Text>
            </View>
          </View>

          <View style={styles.capabilityItem}>
            <View style={[styles.capabilityIcon, { backgroundColor: "#4ECDC420" }]}>
              <Ionicons name="image" size={24} color="#4ECDC4" />
            </View>
            <View style={styles.capabilityContent}>
              <Text style={styles.capabilityTitle}>Image Generation</Text>
              <Text style={styles.capabilityDescription}>
                Create unique images based on your descriptions, from realistic scenes to artistic concepts.
              </Text>
            </View>
          </View>

          <View style={styles.capabilityItem}>
            <View style={[styles.capabilityIcon, { backgroundColor: "#FF9F1C20" }]}>
              <Ionicons name="code-slash" size={24} color="#FF9F1C" />
            </View>
            <View style={styles.capabilityContent}>
              <Text style={styles.capabilityTitle}>Code Assistance</Text>
              <Text style={styles.capabilityDescription}>
                Get help with programming tasks, debugging, and learning new programming languages.
              </Text>
            </View>
          </View>
        </View>

        {/* How AI Works */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>How It Works</Text>
          <Text style={styles.paragraph}>
            Our AI is powered by a large language model that has been trained on a diverse dataset of text from the
            internet. This training allows it to understand and generate human-like text based on the input it receives.
          </Text>
          <Text style={styles.paragraph}>
            When you interact with the AI, your input is processed through multiple layers of neural networks that
            analyze the context, intent, and content of your message. The AI then generates a response that aims to be
            helpful, accurate, and relevant to your needs.
          </Text>
          <Text style={styles.paragraph}>
            The AI is designed to learn from interactions and improve over time, adapting to better understand your
            preferences and provide more personalized assistance.
          </Text>
        </View>

        {/* Limitations */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Limitations</Text>
          <Text style={styles.paragraph}>While our AI is powerful, it has certain limitations:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>• It may occasionally generate incorrect or misleading information</Text>
            <Text style={styles.bulletItem}>• Its knowledge has a cutoff date and may not include recent events</Text>
            <Text style={styles.bulletItem}>• It may not always understand complex or ambiguous requests</Text>
            <Text style={styles.bulletItem}>• It cannot access the internet or external databases in real-time</Text>
            <Text style={styles.bulletItem}>
              • It has limited understanding of images and cannot process audio or video
            </Text>
          </View>
        </View>

        {/* Responsible AI */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Our Commitment to Responsible AI</Text>
          <Text style={styles.paragraph}>
            We are committed to developing AI responsibly and ethically. Our AI is designed with the following
            principles in mind:
          </Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>• Safety and security</Text>
            <Text style={styles.bulletItem}>• Fairness and inclusivity</Text>
            <Text style={styles.bulletItem}>• Transparency and explainability</Text>
            <Text style={styles.bulletItem}>• Privacy and data protection</Text>
            <Text style={styles.bulletItem}>• Human oversight and control</Text>
          </View>
          <Text style={styles.paragraph}>
            We continuously work to improve our AI systems to better align with these principles and address any issues
            that may arise.
          </Text>
        </View>

        {/* Feedback Section */}
        <View style={styles.feedbackSection}>
          <Text style={styles.feedbackTitle}>Help Us Improve</Text>
          <Text style={styles.feedbackDescription}>
            Your feedback is valuable in helping us improve our AI. If you encounter any issues or have suggestions,
            please let us know.
          </Text>
          <TouchableOpacity style={styles.feedbackButton}>
            <Text style={styles.feedbackButtonText}>Provide Feedback</Text>
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
  logoSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#F5F8FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#4A6FFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  aiName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
  },
  aiVersion: {
    fontSize: 14,
    color: "#757575",
    marginTop: 4,
  },
  card: {
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    color: "#333",
    marginBottom: 16,
  },
  capabilityItem: {
    flexDirection: "row",
    marginBottom: 16,
  },
  capabilityIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  capabilityContent: {
    flex: 1,
  },
  capabilityTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  capabilityDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: "#757575",
  },
  bulletList: {
    marginLeft: 8,
    marginBottom: 16,
  },
  bulletItem: {
    fontSize: 15,
    lineHeight: 24,
    color: "#333",
    marginBottom: 8,
  },
  feedbackSection: {
    backgroundColor: "#F5F8FF",
    borderRadius: 12,
    padding: 20,
    marginTop: 8,
    marginBottom: 16,
    alignItems: "center",
  },
  feedbackTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  feedbackDescription: {
    fontSize: 15,
    lineHeight: 24,
    color: "#333",
    textAlign: "center",
    marginBottom: 16,
  },
  feedbackButton: {
    backgroundColor: "#4A6FFF",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  feedbackButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  bottomSpace: {
    height: 40,
  },
})

