import * as React from 'react';

import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HighlightInput from './HighlightInput';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Daily Highlights!</Text>
      <Button
        title="About"
        onPress={() => navigation.navigate('About')}
      />
      <Button
        title="Write Today's Highlight"
        onPress={() => navigation.navigate('WriteHighlight')}
      />
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.aboutTitle}>About Daily Highlights</Text>
      <Text style={styles.aboutText}>
        Welcome to Daily Highlights, your daily dose of positivity! 🌟
      </Text>
      <Text style={styles.aboutText}>
        This app is your personal diary where you can jot down the best part of your day
        and watch your happy moments stack up!
      </Text>
      <Text style={styles.aboutText}>
        Keep track of your highlights and indulge in the memories of a year well-lived.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Light gray background
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Dark gray text color
  },
  aboutText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: '#666', // Medium gray text color
  },
});



function WriteHighlightScreen() {
  const [highlight, setHighlight] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Write your highlight of the day:</Text>
      <HighlightInput highlight={highlight} setHighlight={setHighlight} />
      <Button
        title="Save Highlight"
        onPress={() => alert('Highlight saved!')}
        color="#007aff" // Blue button color
      />
    </View>
  );
}



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="WriteHighlight" component={WriteHighlightScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
