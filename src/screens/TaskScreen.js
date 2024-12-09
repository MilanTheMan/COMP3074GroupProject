import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TaskScreen = () => {
  const tasks = [
    { id: '1', task: 'Complete C24 Science Assignment 2', dueDate: 'Dec 2nd, 2024' },
    { id: '2', task: 'Complete C23 Math Quiz', dueDate: 'Dec 20th, 2024' },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Tasks</Text>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.task}</Text>
              <Text style={styles.date}>Due: {item.dueDate}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },

  // Header Styling
  header: {
    backgroundColor: '#34A853', // Green header background color
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerText: { fontSize: 24, fontWeight: 'bold', color: '#fff' },

  // Card Styling
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    alignItems: 'center',
  },
  cardContent: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  date: { fontSize: 14, color: '#666', marginBottom: 5 },
});

export default TaskScreen;
