import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

// Profile image paths
const currentUserProfile = require('../../assets/MilanProfile.png'); // Your profile image
const otherUserProfile = require('../../assets/FahadProfile.jpg'); // Other user profile image


const MessagingScreen = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello, how are you?', sender: 'other', timestamp: new Date() },
    { id: '2', text: 'I am good, thanks! How about you?', sender: 'currentUser', timestamp: new Date() },
  ]);

  const [messageText, setMessageText] = useState('');
  const flatListRef = useRef(); // Reference for the FlatList

  // Function to handle sending a message
  const sendMessage = () => {
    if (messageText.trim() !== '') {
      const newMessage = {
        id: (messages.length + 1).toString(),
        text: messageText,
        sender: 'currentUser', // Current user sends the message
        timestamp: new Date(), // Timestamp of the current message
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessageText('');
    }
  };

  // Function to format the timestamp to a readable format
  const formatTime = (timestamp) => {
    const hours = timestamp.getHours();
    const minutes = timestamp.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  };

  // Scroll to the end of the FlatList when the component is updated
  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]); // When messages change, scroll to the end

  // Function to render each message
  const renderMessage = ({ item }) => (
    <View style={[styles.messageRow, item.sender === 'currentUser' ? styles.currentUserRow : styles.otherUserRow]}>
      {/* Profile Image */}
      <Image
        source={item.sender === 'currentUser' ? currentUserProfile : otherUserProfile}
        style={styles.profileImage}
      />
      <View
        style={[
          styles.messageContainer,
          item.sender === 'currentUser' ? styles.currentUserMessage : styles.otherMessage,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            item.sender === 'currentUser' ? styles.currentUserText : styles.otherText,
          ]}
        >
          {item.text}
        </Text>
        <Text style={styles.timeText}>
          {formatTime(item.timestamp)} {/* Display the formatted time */}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef} // Attach the ref to FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 60 }} // Add padding for input field
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={messageText}
          onChangeText={setMessageText}
          placeholder="Type a message"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  messageRow: {
    flexDirection: 'row', // Align profile image and message horizontally
    marginVertical: 5,
    alignItems: 'flex-start',
  },
  currentUserRow: {
    flexDirection: 'row-reverse', // Current user’s messages on the right side
  },
  otherUserRow: {
    flexDirection: 'row', // Other user’s messages on the left side
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginLeft: 10, // Add space between profile image and message
  },
  currentUserMessage: {
    backgroundColor: '#34b7f1',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#e0e0e0',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#fff',  },
  currentUserText: {
    color: '#fff',
  },
  otherText: {
    color: '#000',
  },
  timeText: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default MessagingScreen;
