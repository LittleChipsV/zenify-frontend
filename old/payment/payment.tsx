    import { useState, useEffect } from "react";
    import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
    import { Ionicons } from "@expo/vector-icons";
    import { useRouter } from "expo-router";

    const PaymentScreen = () => {
    const router = useRouter();
    const [selectedPayment, setSelectedPayment] = useState("Dana");
    const [isChecked, setIsChecked] = useState(false);
    const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 menit dalam detik

const paymentMethods = [
    { name: "Gopay", icon: require("../../assets/images/gopay.png") },
    { name: "Dana", icon: require("../../assets/images/dana.png") },
    { name: "ShopeePay", icon: require("../../assets/images/shopee.png") },
    { name: "Ovo", icon: require("../../assets/images/ovo.png") },
];

    // ⏳ Countdown Timer
    useEffect(() => {
        if (timeLeft <= 0) return;
        
        const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    // ⏱ Format Waktu (mm:ss)
    const formatTime = (seconds: number): string => { 
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    return (
        <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Pembayaran</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollView}>
            {/* Waktu Countdown */}
            <View style={styles.countdownContainer}>
            <Ionicons name="information-circle-outline" size={18} color="#007BFF" />
            <Text style={styles.countdownText}>
                {timeLeft > 0 ? (
                <>Selesaikan Pembayaranmu dalam waktu <Text style={styles.countdownTimer}>{formatTime(timeLeft)}</Text></>
                ) : (
                <Text style={{ color: "red", fontWeight: "bold" }}>Waktu pembayaran habis!</Text>
                )}
            </Text>
            </View>

            {/* Detail Konseling */}
            <View style={styles.card}>
            <View style={styles.cardHeader}>
                {/* 🔥 Ganti Icon Petir dengan Gambar Custom */}
                <Image source={require("../../assets/images/petir.png")} style={styles.flashIcon} />
                <Text style={styles.cardTitle}>Konseling Instan</Text>
            </View>

            <View style={styles.separatorB} />

            <View style={styles.doctorInfo}>
                <Image source={require("../../assets/images/Dokter.png")} style={styles.doctorImage} />
                <View>
                <Text style={styles.doctorName}>Dr. Dimas Hakim, M.Psi., Psikolog</Text>
                <Text style={styles.doctorSubtitle}>Konselor</Text>
                </View>
            </View>

            <View style={styles.details}>
                <Text style={styles.detailText}>Metode Konseling : <Text style={styles.detailValue}>Chat</Text></Text>
                <Text style={styles.detailText}>Durasi Konseling : <Text style={styles.detailValue}>60 Menit</Text></Text>
                <Text style={styles.detailText}>Jumlah Sesi : <Text style={styles.detailValue}>1 Kali sesi</Text></Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>Harga Konsultasi</Text>
                <Text style={styles.priceValue}>Rp70.000</Text>
            </View>
            </View>

            {/* Metode Pembayaran */}
            <Text style={styles.sectionTitle}>Metode Pembayaran</Text>
                    {paymentMethods.map((method) => (
                <TouchableOpacity key={method.name} style={styles.paymentOption} onPress={() => setSelectedPayment(method.name)}>
            <View style={styles.paymentItem}>
                    <Image source={method.icon} style={styles.paymentIcon} />
                    <Text style={styles.paymentText}>{method.name}</Text>
                </View>
                <Ionicons name={selectedPayment === method.name ? "radio-button-on" : "radio-button-off"} size={20} color="#007BFF" />
            </TouchableOpacity>
        ))}

            {/* Checkbox */}
            <View style={styles.checkboxContainer}>
            <TouchableOpacity 
                onPress={() => setIsChecked(!isChecked)} 
                style={[styles.checkbox, isChecked && styles.checkboxChecked]}
            >
                {isChecked && <Ionicons name="checkmark" size={18} color="white" />}
            </TouchableOpacity>
            <Text style={styles.termsText}>
                Saya telah membaca dan menyetujui <Text style={styles.linkText}>syarat dan ketentuan</Text>
            </Text>
            </View>

            <View style={styles.separatorA} />

            {/* Total Harga & Tombol Pembayaran */}
            <View style={styles.footer}>
            <View>
                <Text style={styles.totalLabel}>Total Biaya</Text>
                <Text style={styles.totalPrice}>Rp70.000</Text>
            </View>
            <TouchableOpacity 
                style={styles.payButton} 
                disabled={!isChecked || timeLeft === 0}
                onPress={() => router.push({
                    pathname: "./payment-success",
                    params: { amount: "Rp70.000", method: selectedPayment }
                  })}            >
            <Text style={styles.payButtonText}>Bayar Sekarang</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
        </View>
    );
    };


    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        paddingTop: 86, // Tambahkan padding atas agar tidak terpotong
    },
    headerTitle: {
        flex: 1,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    scrollView: {
        padding: 16,
    },
    countdownContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E8F3FF",
        padding: 12,
        borderRadius: 8,
    },
    countdownText: {
        color: "#007BFF",
        marginLeft: 6,
    },
    countdownTimer: {
        fontWeight: "bold",
    },
    card: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        elevation: 2,
        marginVertical: 12,
        borderWidth: 1,
        borderColor: "#E5E5E5", // Tambahkan garis luar
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 6,
    },
    separator: {
        height: 1,
        backgroundColor: "#E5E5E5",
        marginVertical: 10,
        marginBottom: 10,
    },
    separatorA: {
        height: 1,
        backgroundColor: "#E5E5E5",
        marginTop: 20,
        marginBottom: 0,
    },
    separatorB: {
        height: 1,
        backgroundColor: "#E5E5E5",
        marginVertical: 5,
        marginBottom: 15,
    },
    doctorInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    paymentItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    paymentIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    doctorImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    flashIcon: {
        width: 40,
        height: 40,
        marginRight: 6,
    },
    doctorName: {
        fontSize: 14,
        fontWeight: "bold",
    },
    doctorSubtitle: {
        fontSize: 12,
        color: "gray",
    },
    details: {
        marginBottom: 12,
    },
    detailText: {
        fontSize: 12,
        color: "gray",
    },
    detailValue: {
        fontWeight: "bold",
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12,
    },
    priceLabel: {
        fontSize: 12,
        color: "gray",
    },
    priceValue: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#007BFF",
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: "bold",
        marginVertical: 12,
    },
    paymentOption: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5E5",
    },
    paymentText: {
        fontSize: 14,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
    },
    totalLabel: {
        fontSize: 12,
        color: "gray",
    },
    totalPrice: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#007BFF",
    },
    payButton: {
        backgroundColor: "#007BFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    payButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#007BFF",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    checkboxChecked: {
        backgroundColor: "#007BFF",
    },
    termsText: {
        fontSize: 14,
        color: "#333",
    },
    linkText: {
        color: "#007BFF",
        fontWeight: "bold",
    },
    });

    export default PaymentScreen;
