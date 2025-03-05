import { View, Text, StyleSheet, ScrollView } from "react-native"
import SettingsHeader from "../components/SettingsHeader"

export default function PrivacyPolicyScreen() {
  return (
    <View style={styles.container}>
      <SettingsHeader title="Privacy Policy" />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.lastUpdated}>Last Updated: March 1, 2023</Text>

          <Text style={styles.sectionTitle}>Introduction</Text>
          <Text style={styles.paragraph}>
            Welcome to our Privacy Policy. This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our mobile application.
          </Text>
          <Text style={styles.paragraph}>
            We respect your privacy and are committed to protecting personally identifiable information you may provide
            us through the Application. We have adopted this privacy policy to explain what information may be
            collected, how we use this information, and under what circumstances we may disclose the information to
            third parties.
          </Text>

          <Text style={styles.sectionTitle}>Information We Collect</Text>
          <Text style={styles.paragraph}>We collect information that you provide directly to us when you:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>• Register for an account</Text>
            <Text style={styles.bulletItem}>• Use our services</Text>
            <Text style={styles.bulletItem}>• Communicate with us</Text>
            <Text style={styles.bulletItem}>• Complete a form</Text>
          </View>
          <Text style={styles.paragraph}>
            The types of information we may collect include your name, email address, postal address, phone number, and
            any other information you choose to provide.
          </Text>

          <Text style={styles.sectionTitle}>Automatically Collected Information</Text>
          <Text style={styles.paragraph}>When you access and use our Application, we may automatically collect:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>
              • Device information (such as your mobile device ID, model, and manufacturer)
            </Text>
            <Text style={styles.bulletItem}>• Your IP address</Text>
            <Text style={styles.bulletItem}>• Operating system type and version</Text>
            <Text style={styles.bulletItem}>• Browser type and version</Text>
            <Text style={styles.bulletItem}>
              • Device event information (such as crashes, system activity, and hardware settings)
            </Text>
          </View>

          <Text style={styles.sectionTitle}>How We Use Your Information</Text>
          <Text style={styles.paragraph}>
            We may use the information we collect from you for various purposes, including to:
          </Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>• Provide, maintain, and improve our services</Text>
            <Text style={styles.bulletItem}>• Process transactions and send related information</Text>
            <Text style={styles.bulletItem}>• Send administrative messages, updates, and security alerts</Text>
            <Text style={styles.bulletItem}>• Respond to your comments, questions, and requests</Text>
            <Text style={styles.bulletItem}>• Personalize your experience</Text>
            <Text style={styles.bulletItem}>• Monitor and analyze trends, usage, and activities</Text>
          </View>

          <Text style={styles.sectionTitle}>Sharing of Your Information</Text>
          <Text style={styles.paragraph}>We may share personal information as follows:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>
              • With vendors, consultants, and other service providers who need access to such information to carry out
              work on our behalf
            </Text>
            <Text style={styles.bulletItem}>
              • In response to a request for information if we believe disclosure is in accordance with any applicable
              law, regulation, or legal process
            </Text>
            <Text style={styles.bulletItem}>
              • If we believe your actions are inconsistent with our user agreements or policies, or to protect the
              rights, property, and safety of us or others
            </Text>
            <Text style={styles.bulletItem}>
              • In connection with, or during negotiations of, any merger, sale of company assets, financing, or
              acquisition of all or a portion of our business by another company
            </Text>
            <Text style={styles.bulletItem}>• With your consent or at your direction</Text>
          </View>

          <Text style={styles.sectionTitle}>Data Security</Text>
          <Text style={styles.paragraph}>
            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized
            access, disclosure, alteration and destruction. However, no security system is impenetrable and we cannot
            guarantee the security of our systems 100%.
          </Text>

          <Text style={styles.sectionTitle}>Your Choices</Text>
          <Text style={styles.paragraph}>
            You can access and update certain information about you from within the Application. If you have any
            questions about accessing or updating your information, please contact us.
          </Text>

          <Text style={styles.sectionTitle}>Changes to this Privacy Policy</Text>
          <Text style={styles.paragraph}>
            We may change this privacy policy from time to time. If we make changes, we will notify you by revising the
            date at the top of the policy and, in some cases, we may provide you with additional notice (such as adding
            a statement to our website or sending you a notification).
          </Text>

          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.paragraph}>
            If you have any questions about this Privacy Policy, please contact us at:
          </Text>
          <Text style={styles.contactInfo}>
            Email: privacy@example.com{"\n"}
            Address: 123 Privacy Street, Tech City, TC 12345{"\n"}
            Phone: (555) 123-4567
          </Text>
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
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  lastUpdated: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 20,
    fontStyle: "italic",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginTop: 24,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    color: "#333",
    marginBottom: 16,
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
  contactInfo: {
    fontSize: 15,
    lineHeight: 24,
    color: "#333",
    marginTop: 8,
    marginLeft: 8,
  },
  bottomSpace: {
    height: 40,
  },
})

