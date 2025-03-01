import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, Image } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import LottieView from "lottie-react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import * as Print from "expo-print";
import { Ionicons } from "@expo/vector-icons";

// Komponen ManualDashedLine untuk membuat garis putus-putus secara manual
function ManualDashedLine({
  dashCount = 20,
  dashWidth = 6,
  dashHeight = 1,
  dashColor = "gray",
  dashGap = 3,
  style = {},
}: {
  dashCount?: number;
  dashWidth?: number;
  dashHeight?: number;
  dashColor?: string;
  dashGap?: number;
  style?: ViewStyle;
}) {
  const dashes = [];
  for (let i = 0; i < dashCount; i++) {
    dashes.push(
      <View
        key={i}
        style={{
          width: dashWidth,
          height: dashHeight,
          backgroundColor: dashColor,
          marginRight: dashGap,
        }}
      />
    );
  }
  return <View style={[{ flexDirection: "row", flexWrap: "nowrap", overflow: "hidden" }, style]}>{dashes}</View>;
}

const PaymentSuccessScreen = () => {
  const router = useRouter();
  const { amount = "Rp70.000", method = "Dana" } = useLocalSearchParams();
  const methodKey = Array.isArray(method) ? method[0] : method; // 🔥 Pastikan method selalu string
  const animationRef = useRef<LottieView>(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [showConfetti, setShowConfetti] = useState(true);
  const paymentIcons: { [key: string]: any } = {
    Gopay: require("../../../assets/images/gopay.png"),
    Dana: require("../../../assets/images/dana.png"),
    ShopeePay: require("../../../assets/images/shopee.png"),
    Ovo: require("../../../assets/images/ovo.png"),
  };

  useEffect(() => {
    animationRef.current?.play(); // Loop animasi checklist
    const timer = setTimeout(() => {
      setIsProcessing(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handlePrint = async () => {
    const htmlContent = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              text-align: center;
              padding: 20px;
            }
            .receipt-container {
              width: 100%;
              max-width: 350px;
              margin: auto;
              border: 2px dashed gray;
              padding: 20px;
              border-radius: 10px;
            }
            .header {
              font-size: 18px;
              font-weight: bold;
              color: #3C99DC;
            }
            .title {
              font-size: 24px;
              font-weight: bold;
              color: #222;
              margin-top: 5px;
            }
            .subtitle {
              font-size: 14px;
              color: #666;
              margin-bottom: 10px;
            }
            .info {
              font-size: 16px;
              margin: 10px 0;
            }
            .dashed-line {
              border-top: 2px dashed gray;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="receipt-container">
            <div class="header">Great!</div>
            <div class="title">Payment Successful</div>
            <div class="subtitle">Below is your payment summary</div>
            <div class="dashed-line"></div>
            <div class="info">Metode Konseling: Chat</div>
            <div class="info">Durasi Konseling: 60 Menit</div>
            <div class="info">Jumlah Sesi: 1 kali sesi</div>
            <div class="dashed-line"></div>
            <div class="info"><strong>Total Payment:</strong> ${amount}</div>
            <div class="info"><strong>Payment Method:</strong> ${methodKey}</div>
          </div>
        </body>
      </html>
    `;
    await Print.printAsync({ html: htmlContent });
  };

  return (
    <View style={styles.container}>
      {showConfetti && <ConfettiCannon count={200} origin={{ x: 200, y: 0 }} fadeOut />}
      <TouchableOpacity style={styles.printIcon} onPress={handlePrint}>
        <Ionicons name="print" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.animationWrapper}>
        <LottieView ref={animationRef} source={require("../../../assets/animation/success.json")} autoPlay loop style={styles.lottie} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.greatText}>Great!</Text>
          <Text style={styles.title}>Payment Successful</Text>
          <Text style={styles.subtitle}>Below is your payment summary</Text>

          {/* Garis Putus-Putus Manual */}
          <View style={styles.dashedLineContainer}>
            <ManualDashedLine dashCount={25} dashWidth={6} dashHeight={2} dashGap={3} dashColor="gray" />          
          </View>
          <View style={styles.paymentSummary}>
            <Text style={styles.detailLabel}>Metode Konseling</Text>
            <Text style={styles.separator}>:</Text>
            <Text style={styles.detailValue}>Chat</Text>
          </View>
          <View style={styles.paymentSummary}>
            <Text style={styles.detailLabel}>Durasi Konseling</Text>
            <Text style={styles.separator}>:</Text>
            <Text style={styles.detailValue}>60 Menit</Text>
          </View>
          <View style={styles.paymentSummary}>
            <Text style={styles.detailLabel}>Jumlah Sesi</Text>
            <Text style={styles.separator}>:</Text>
            <Text style={styles.detailValue}>1 kali sesi</Text>
          </View>
          
          <View style={styles.dashedLineContainer}>
            <ManualDashedLine dashCount={25} dashWidth={6} dashHeight={2} dashGap={3} dashColor="gray" />          
          </View>
          <View style={styles.paymentInfo}>
            <Text style={styles.detailLabel}>Total Payment</Text>
            <Text style={styles.detailValue}>{amount}</Text>
          </View>
          <View style={styles.paymentInfo}>
            <Text style={styles.detailLabel}>Payment Method</Text>
            <View style={styles.paymentMethodContainer}>
              {paymentIcons[methodKey] && (
                <Image source={paymentIcons[methodKey]} style={styles.paymentIcon} />
              )}
              <Text style={styles.detailValue}>{methodKey}</Text>
            </View>
          </View>
        </View>
        <View style={styles.ticketCutoutLeft2} />
        <View style={styles.ticketCutoutRight2} />
        <View style={styles.ticketCutoutLeft} />
        <View style={styles.ticketCutoutRight} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/(klien)")}> 
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF8FF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  printIcon: {
    position: "absolute",
    top: 40,
    right: 25,
  },
  animationWrapper: {
    position: "absolute",
    top: "5%",
    zIndex: 2,
  },
  paymentSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 4, // Sedikit jarak antar baris
  },  
  lottie: {
    width: 200,
    height: 200,
  },
  cardContainer: {
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 10,
    padding: 50,
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  greatText: {
    color: "#3C99DC",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginTop: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  
  separator: {
    width: 10, // Lebar tetap untuk memastikan ":" sejajar
    textAlign: "center",
  },
  dashedLineContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    flexWrap: "nowrap",
    alignSelf: "stretch",
  },
  paymentInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 8,
    paddingHorizontal: 10,
  },
  paymentMethodContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  detailLabel: {
    fontSize: 15,
    color: "#666",
    flex: 1, // Membuat label rata kiri dengan fleksibel

  },
  detailValue: {
    fontSize: 14,
    fontWeight: "400",
    color: "#222",
    
  },
  ticketCutoutLeft: {
    width: 40,
    height: 40,
    backgroundColor: "#EEF8FF",
    borderRadius: 40,
    position: "absolute",
    left: -15,
    top: "41%",
    transform: [{ translateY: -10 }],
  },
  ticketCutoutRight: {
    width: 40,
    height: 40,
    backgroundColor: "#EEF8FF",
    borderRadius: 40,
    position: "absolute",
    right: -15,
    top: "41%",
    transform: [{ translateY: -10 }],
  },
  ticketCutoutLeft2: {
    width: 40,
    height: 40,
    backgroundColor: "#EEF8FF",
    borderRadius: 40,
    position: "absolute",
    left: -15,
    top: "65%",
    transform: [{ translateY: -10 }],
  },
  ticketCutoutRight2: {
    width: 40,
    height: 40,
    backgroundColor: "#EEF8FF",
    borderRadius: 40,
    position: "absolute",
    right: -15,
    top: "65%",
    transform: [{ translateY: -10 }],
  },
  button: {
    backgroundColor: "#007BFF",
    width: "90%",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
