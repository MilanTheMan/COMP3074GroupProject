import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const BottomTaskBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Image source={require('../../assets/chat.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Meeting')}>
        <Image source={require('../../assets/meeting.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Tasks')}>
        <Image source={require('../../assets/task.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Marks')}>
        <Image source={require('../../assets/marks.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 5,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff', // Make sure icons blend with the taskbar
  },
});

export default BottomTaskBar;
