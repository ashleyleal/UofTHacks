import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function MainScreen({ route }) {
  const { text } = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>{text}</Text>
      </View>
    </ScrollView>
  );
}

function JournalToday({ navigation }) {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
      <Button
        title="-"
        onPress={() => navigation.navigate('Details', { text })}
      />
      <Button
        title="0"
        onPress={() => navigation.navigate('Details', { text })}
      />
      </View>
      
      <View style={styles.header}>
      <Text style={{color: '#514646', fontSize: 25, height: 150}}>
        "Every small positive{'\n'} 
        change we make in{'\n'} 
        outselves repays us in {'\n'}
        confidence in the future".    
      </Text>
      </View>
      

      <View style={styles.text}>
      <Text style={{color: '#514646', fontSize: 18, height: 100}}>
        what are you thinking about today?
      </Text>
      </View>

      <TextInput
        style={styles.textInput}
        onChangeText={text => setText(text)}
        value={text}
        placeholder="Start typing..."
      />
      
      <Button
        title="done"
        onPress={() => navigation.navigate('Details', { text })}
      />
    </View>
  );
}


function DetailsScreen({ route }) {
  const { text } = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>{text}</Text>
      </View>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={JournalToday} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 25,
    alignItems: 'center',
    marginBottom: 20,
    color: '#514646',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#B7B7B7',
    borderRadius: 50,
    height: 400,
    width: '100%',
    padding: 10,
    fontSize: 20,
    marginBottom: 200,
  },
});