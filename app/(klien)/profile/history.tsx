import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import SettingsHeader from "../components/SettingsHeader"

// Define type for history items
type HistoryItem = {
    id: string;
    title: string;
    timestamp: string;
    icon: string;
    color: string;
  };

export default function HistoryScreen() {
  // Sample history data
  const historyData = [
    {
      id: "1",
      title: "Searched for 'machine learning'",
      timestamp: "Today, 10:30 AM",
      icon: "search",
      color: "#4A6FFF",
    },
    {
      id: "2",
      title: "Viewed article: 'Introduction to AI'",
      timestamp: "Today, 9:15 AM",
      icon: "document-text",
      color: "#9D65C9",
    },
    {
      id: "3",
      title: "Chatted with AI Assistant",
      timestamp: "Yesterday, 3:45 PM",
      icon: "chatbubbles",
      color: "#4ECDC4",
    },
    {
      id: "4",
      title: "Generated image: 'Mountain landscape'",
      timestamp: "Yesterday, 1:20 PM",
      icon: "image",
      color: "#FF9F1C",
    },
    {
      id: "5",
      title: "Searched for 'neural networks'",
      timestamp: "Yesterday, 11:05 AM",
      icon: "search",
      color: "#4A6FFF",
    },
    {
      id: "6",
      title: "Viewed article: 'Deep Learning Basics'",
      timestamp: "2 days ago, 4:30 PM",
      icon: "document-text",
      color: "#9D65C9",
    },
    {
      id: "7",
      title: "Generated code: 'React component'",
      timestamp: "2 days ago, 2:15 PM",
      icon: "code-slash",
      color: "#2EC4B6",
    },
    {
      id: "8",
      title: "Chatted with AI Assistant",
      timestamp: "3 days ago, 10:45 AM",
      icon: "chatbubbles",
      color: "#4ECDC4",
    },
    {
      id: "9",
      title: "Searched for 'computer vision'",
      timestamp: "3 days ago, 9:20 AM",
      icon: "search",
      color: "#4A6FFF",
    },
    {
      id: "10",
      title: "Generated image: 'Futuristic city'",
      timestamp: "4 days ago, 5:10 PM",
      icon: "image",
      color: "#FF9F1C",
    },
  ]
  // Group history by date
  const groupedHistory: Record<string, HistoryItem[]> = historyData.reduce((groups, item) => {
    const date = item.timestamp.split(", ")[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(item);
    return groups;
  }, {} as Record<string, HistoryItem[]>);

  // Convert grouped data to array for rendering
  const groupedHistoryArray = Object.keys(groupedHistory).map((date) => ({
    date,
    data: groupedHistory[date],
  }));
  const renderHistoryItem = ({ item }: { item: HistoryItem }) => (
    <View style={styles.historyItem}>
      <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
        <Ionicons name={item.icon as any} size={22} color={item.color} />
      </View>
      <View style={styles.historyItemContent}>
        <Text style={styles.historyItemTitle}>{item.title}</Text>
        <Text style={styles.historyItemTime}>{item.timestamp.split(", ")[1]}</Text>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Ionicons name="ellipsis-vertical" size={20} color="#BDBDBD" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SettingsHeader title="History" />

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#757575" />
          <Text style={styles.searchPlaceholder}>Search history</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={20} color="#4A6FFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {groupedHistoryArray.map((group, index) => (
          <View key={index} style={styles.historyGroup}>
            <Text style={styles.dateHeader}>{group.date}</Text>
            <View style={styles.historyCard}>
              {group.data.map((item) => (
                <View key={item.id}>
                  {renderHistoryItem({ item })}
                  {item.id !== group.data[group.data.length - 1].id && <View style={styles.divider} />}
                </View>
              ))}
            </View>
          </View>
        ))}

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="download-outline" size={20} color="#4A6FFF" />
            <Text style={styles.actionButtonText}>Export History</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.clearButton}>
            <Ionicons name="trash-outline" size={20} color="#FF3B30" />
            <Text style={styles.clearButtonText}>Clear History</Text>
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
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 12,
  },
  searchPlaceholder: {
    color: "#757575",
    marginLeft: 8,
    fontSize: 16,
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  historyGroup: {
    marginBottom: 24,
  },
  dateHeader: {
    fontSize: 16,
    fontWeight: "600",
    color: "#757575",
    marginBottom: 12,
    marginLeft: 4,
  },
  historyCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  historyItemContent: {
    flex: 1,
    marginLeft: 16,
  },
  historyItemTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  historyItemTime: {
    fontSize: 14,
    color: "#757575",
    marginTop: 4,
  },
  moreButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginLeft: 72,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 16,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F8FF",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flex: 1,
    marginRight: 8,
  },
  actionButtonText: {
    color: "#4A6FFF",
    fontWeight: "500",
    marginLeft: 8,
  },
  clearButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF5F5",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flex: 1,
    marginLeft: 8,
  },
  clearButtonText: {
    color: "#FF3B30",
    fontWeight: "500",
    marginLeft: 8,
  },
  bottomSpace: {
    height: 40,
  },
})

