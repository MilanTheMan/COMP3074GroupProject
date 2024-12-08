import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

// home screen
const HomeScreen = ({ navigation }) => {
  const classes = [
    { id: '1', name: 'C23 Math Class', students: 53, image: require('../../assets/math.png') },
    { id: '2', name: 'C24 Science Class', students: 33, image: require('../../assets/science.png') },
    { id: '3', name: 'B68 Design Class', students: 75, image: require('../../assets/design.png') },
  ];

  const renderClass = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Class', { className: item.name })}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.students} Students</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Display the logo beside the welcome message */}
        <Image
          source={require('../../assets/bizchats logo.png')} // Replace with the correct relative path to your logo
          style={styles.logo}
        />
        <Text style={styles.headerText}>Welcome to BizChats</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image source={require('../../assets/settings.png')} style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.noteContainer}>
        <Text style={styles.noteText}>Your Classes:</Text>
      </View>
      <FlatList
        data={classes}
        renderItem={renderClass}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />
      <TextInput style={styles.searchBar} placeholder="Search for anything..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: {
    flexDirection: 'row', // Align logo and text horizontally
    justifyContent: 'space-between', // Space between logo, text, and settings icon
    alignItems: 'center', // Vertically center the items
    backgroundColor: '#007AFF',
    padding: 15,
  },
  logo: {
    width: 170, // Bizchats logo adjust the width
    height: 50, // Height
    marginRight: 10, // Space between the logo and the text
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1, // Ensures the header text takes the remaining space
  },
  settingsIcon: { width: 24, height: 24 },
  noteContainer: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  noteText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  list: { padding: 10 },
  row: { justifyContent: 'space-between', marginBottom: 15 },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    maxWidth: '47%',
  },
  image: { width: '100%', height: 100, borderRadius: 10 },
  textContainer: { alignItems: 'center', marginTop: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#555' },
  searchBar: {
    position: 'absolute',
    bottom: 10,
    left: '5%',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    elevation: 5,
  },
});

export default HomeScreen;
