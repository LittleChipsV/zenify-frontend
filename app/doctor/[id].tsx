import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router"; // Import useRouter

const doctorData = {
  id: 1,
  name: "Dr. Dimas Hakim, M.Psi., Psikolog",
  specialty: "Manajemen Emosi & Kontrol Diri",
  rating: 4.8,
  sessions: "(99+ sesi)",
  isOnline: true,
  availableTimes: [
    "10.00 AM", "11.00 AM", "12.00 AM", "13.00 AM",
    "14.00 PM", "15.00 PM", "16.00 PM", "17.00 PM",
    "18.00 PM", "19.00 PM", "20.00 PM", "21.00 PM",
  ],
};

const availableMonths = ["Maret", "April", "Mei"];

const getDaysInMonth = (month: string) => {
  const monthDays: { [key: string]: number } = {
    Maret: 31,
    April: 30,
    Mei: 31,
  };
  return monthDays[month] || 30;
};

const generateDates = (month: string) => {
  const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
  const totalDays = getDaysInMonth(month);
  return Array.from({ length: totalDays }, (_, i) => ({
    day: days[i % 7],
    date: i + 1,
  }));
};

const DoctorDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedMonth, setSelectedMonth] = useState("April");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(12);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [rating, setRating] = useState(doctorData.rating);
  const router = useRouter(); // Inisialisasi router

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <View style={styles.header}>
        <TouchableOpacity 
            style={styles.iconButton} 
            onPress={() => router.push("/dashboard/InstantCounselingScreen")}
          >
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="chatbubble-ellipses" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Image source={require("../../assets/images/Dokter.png")} style={styles.image} />
      </View>

      <View style={styles.detailContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{doctorData.name}</Text>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>Available</Text>
          </View>
        </View>

        <Text style={styles.specialty}>{doctorData.specialty}</Text>

        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <FontAwesome name={star <= rating ? "star" : "star-o"} size={20} color="#FFA500" />
            </TouchableOpacity>
          ))}
          <Text style={styles.sessions}> {doctorData.rating} {doctorData.sessions}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectionTittle}>Tanggal</Text>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={() => setIsDropdownVisible(!isDropdownVisible)}
          >
            <Text style={styles.dropdownText}>{selectedMonth}</Text>
            <Ionicons name="chevron-down" size={16} color="black" />
          </TouchableOpacity>
        </View>

        {isDropdownVisible && (
          <View style={styles.dropdownList}>
            {availableMonths.map((month) => (
              <TouchableOpacity
                key={month}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedMonth(month);
                  setSelectedDate(generateDates(month)[0].date);
                  setIsDropdownVisible(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{month}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <FlatList
          horizontal
          data={generateDates(selectedMonth)}
          keyExtractor={(item) => item.date.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.dateBox,
                selectedDate === item.date && styles.selectedDateBox,
              ]}
              onPress={() => setSelectedDate(item.date)}
            >
              <Text
                style={[
                  styles.dateText,
                  selectedDate === item.date && styles.selectedDateText,
                ]}
              >
                {item.day}
              </Text>
              <Text
                style={[
                  styles.dateText,
                  selectedDate === item.date && styles.selectedDateText,
                ]}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          )}
        />

        <Text style={styles.sectionTitle}>Jam</Text>
        <FlatList
  numColumns={4} // Mengatur agar ada 4 kolom ke samping
  data={doctorData.availableTimes}
  keyExtractor={(item) => item}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={[
        styles.timeBox,
        selectedTime === item && styles.selectedTimeBox,
      ]}
      onPress={() => setSelectedTime(item)}
    >
      <Text
        style={[
          styles.timeText,
          selectedTime === item && styles.selectedTimeText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  )}
/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerBackground: {
    backgroundColor: "#EEF8FF",
    height: 280,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  header: {
    position: "absolute",
    top: 40,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconButton: {
    padding: 8,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 50,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    position: "absolute",
    bottom: 10,
  },
  detailContainer: {
    backgroundColor: "#fff",
    marginTop: -50,
    paddingHorizontal: 16,
    paddingTop: 16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "poppins",
  },
  statusContainer: {
    backgroundColor: "#DFF6DD",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: "#388E3C",
    fontWeight: "bold",
  },
  specialty: {
    fontFamily: "poppins",
    fontSize: 14,
    fontWeight: "500",
    color: "gray",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sessions: {
    fontSize: 14,
    color: "gray",
    marginLeft: 6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  sectionTitle: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  sectionTittle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 0,
    borderColor: "#ddd",
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  dropdownText: {
    fontSize: 14,
    marginRight: 6,
    color: "#333",
  },
  dropdownList: {
    marginTop: 8,
    backgroundColor: "#fff",
    borderRadius: 6,
    elevation: 3,
    paddingVertical: 6,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  dropdownItemText: {
    fontSize: 14,
    color: "#333",
  },
  dateBox: {
    width: 50,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  selectedDateBox: {
    borderColor: "#fff",
    backgroundColor: "#149FFF",
  },
  dateText: {
    fontSize: 14,
  },
  selectedDateText: {
    color: "#fff",
    fontWeight: "bold",
  },
  timeBox: {
    marginTop: 0,
    padding: 10,
    margin: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    alignItems: "center",
  },
  selectedTimeBox: {
    backgroundColor: "#EEF8FF",
    borderColor: "#149FFF",
  },
  timeText: {
    fontSize: 14,
  },
  selectedTimeText: {
    color: "#149FFF",
    fontWeight: "400",
  },
});

export default DoctorDetailScreen;