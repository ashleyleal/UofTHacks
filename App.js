import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import moment from 'moment';

// this is the button for the user icon

const RoundedRectangle = ({ color, cornerRadius }) => {
  return (
    <View 
      style={[
        { backgroundColor: color, borderRadius: cornerRadius }
      ]}
    />
  );
};

function MyButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('./user.png')}
        style={{ width: 50, height: 50, 
        left: '-300%'}}
      />
    </TouchableOpacity> 
  );
}

// this is the page for Journalday
function JournalToday({ navigation }) {
  const [text, setText] = useState('');
  return (
    
    <View style={styles.container}>
      
      <View style={styles.header}>
      <View>
      <MyButton onPress={() => navigation.navigate('User', { text })} />
      </View>  
      </View>
      
      <View style={styles.header}>
      
      <Text style={{color: '#514646', fontSize: 25, height: 150}}>
        "Every small positive{'\n'} 
        change we make in{'\n'} 
        outselves repays us in {'\n'}
        confidence in the future".    
      </Text>

     
      </View>
      <Button style={styles.header1}
        title="Quote History"
        onPress={() => navigation.navigate('Quote', { text })}
      />
      <View style={styles.text}>
      <Text style={{color: '#514646', fontSize: 18, height: 100}}>
        what are you thinking about today?
      </Text>

      <TextInput
        style={styles.textInput}
        onChangeText={text => setText(text)}
        value={text}
        placeholder="Start typing..."
      />
      
      </View>

      <Button
        title="done"
        onPress={() => navigation.navigate('Journal History', { text })}
      />
    </View>
  );
}

// this is the page for Mood
function UserScreen({ route }) {
  const { text } = route.params;
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
      <View>
      <MyButton onPress={() => navigation.navigate('Login', { text })} />
      </View>  
      </View>
      
      <View style={styles.header}>
      <Text style={{color: '#656565', fontSize: 25, height: 150, fontWeight : 'bold' }}>
        {'\n'}good morning WAZD!  
      </Text>
      </View>
      
      <View style={styles.text}>
      <Text style={{color: '#514646', fontSize: 20, height: 150}}>
        my mood today 
      </Text>
      
      <View style={styles.header1}>
      <Image 
      source={require('./user.png')}  
      style={{width: 80, height: 80, left: '-15%'}} 
      resizeMode='cover'
      />
      <Image 
      source={require('./user.png')}  
      style={{width: 80, height: 80}} 
      resizeMode='cover'
      />
      <Image 
      source={require('./user.png')}  
      style={{width: 80, height: 80, right: '-15%'}} 
      resizeMode='cover'
      />
      </View>

      <Text style={{color: '#514646', fontSize: 20, height: 120 }}>
      Flirty       Silly         Neutral 
      </Text>

      <View style={styles.header1}>
      <Image 
      source={require('./user.png')}  
      style={{width: 80, height: 80, left: '-15%'}} 
      resizeMode='cover'
      />
      <Image 
      source={require('./user.png')}  
      style={{width: 80, height: 80}} 
      resizeMode='cover'
      />
      <Image 
      source={require('./user.png')}  
      style={{width: 80, height: 80, right: '-15%'}} 
      resizeMode='cover'
      />
      </View>
      <Text style={{color: '#514646', fontSize: 20, position: 'absolute', height: 60}}>
      {'\n\n\n\n\n\n\n\n'}Sad          Angry         Happy
      </Text>
      
      <Text style={{color: '#514646', fontSize: 20, height: 150}}>
        Creativity is the secret source to {'\n'}
        Science, Technology, Engineering, Math
      </Text>
      
      </View>
      
    </View>
    
  );
}

// this is the page for quotehistory
function QuoteHistory({ route }) {
  const { text } = route.params;
  return (
    <ScrollView>
      <View style={styles.text1}>
        <Text>
          {'\n'}
        "Every small positive{'\n'} 
        change we make in{'\n'} 
        outselves repays us in {'\n'}
        confidence in the future". {'\n\n\n'} 
        </Text>
      
        <Text>
        "You are braver than you believe,{'\n'} 
        and stronger than you seem,{'\n'} 
        and smarter than you think".{'\n\n\n'} 
        </Text>
      
        <Text>
        "Optimism is a happiness magnet. {'\n'} 
        If you stay positive good things{'\n'} 
        and good people will be drawn to you". {'\n\n\n'} 
        </Text>
      
        <Text>
        "Keep your face to the sunshine {'\n'} 
        and you cannot see a shadow".{'\n\n\n'} 
        
        </Text>
     
        <Text>
        "The only time you fail {'\n'} 
        is when you fall down and stay down".{'\n\n\n'} 
        </Text>
        
        <Text>
        "It is not whether you get knocked down,{'\n'} 
        it is whether you get up. {'\n\n\n'} 
        </Text>

        <Text>
        "The happiness of your life depends {'\n'} 
        upon the quality of your thoughts".{'\n\n\n'} 
        </Text>

      </View>
    </ScrollView>
  );
}

// this is the page for 
function JournalHistory({ route }) {
  // this takes the current date
  const last_seven_days = []
  let date = moment().format('MM/DD/YYYY');
   for (let i = 1; i < 7; i++) {
     last_seven_days[i] = moment().subtract(i, 'days');
   }
  const { text } = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        
        <View style={styles.header1}>
          <Text style={{color: '#514646'}}>{date}</Text>

          <View style={styles.roundrect}>
            <Text style={{padding: 10}}>{text}</Text>
            </View> 
        </View>

        <View style={styles.header1}>
        <Text style={{color: '#514646'}}>{last_seven_days['1'].format('MM/DD/YYYY')}</Text>
          <View style={styles.roundrect}></View>    
        </View>

        <View style={styles.header1}>
        <Text style={{color: '#514646'}}>{last_seven_days['2'].format('MM/DD/YYYY')}</Text> 
          <View style={styles.roundrect}></View>   
        </View>

        <View style={styles.header1}>
        <Text style={{color: '#514646'}}>{last_seven_days['3'].format('MM/DD/YYYY')}</Text>   
          <View style={styles.roundrect}></View> 
        </View>

        <View style={styles.header1}>
        <Text style={{color: '#514646'}}>{last_seven_days['4'].format('MM/DD/YYYY')}</Text> 
          <View style={styles.roundrect}></View>   
        </View>

        <View style={styles.header1}>
        <Text style={{color: '#514646'}}>{last_seven_days['5'].format('MM/DD/YYYY')}</Text> 
          <View style={styles.roundrect}></View>   
        </View>

        <View style={styles.header1}>
        <Text style={{color: '#514646'}}>{last_seven_days['6'].format('MM/DD/YYYY')}</Text>  
          <View style={styles.roundrect}></View>  
        </View>

      </View>
    </ScrollView>
  );
}



function UserLogin({ route }) {
  const { text } = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>
        </Text>
      </View>
    </ScrollView>
  );
}

/*const fileSystem = require("browserify-fs")

fileSystem.readFile("./client.json", (err, data) => {
 if(err) {
   console.log("File can't be read", err)
   return
 }
 try{
   const client = JSON.parse(data)
   console.log("client data is:", client)
 }
 catch(err) {
   console.log("Error parsing JSON string:", err)
 }
})*/



//
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={JournalToday} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Quote" component={QuoteHistory} />
        <Stack.Screen name="Journal History" component={JournalHistory} />
        <Stack.Screen name="Login" component={UserLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  roundrect: {
    flex: 1,
    width: 80,
    height: 100,
    backgroundColor: '#B7B7B7',
    borderRadius: 20,
  },

  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  header1:{
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 50,
    padding: 12,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 25,
    alignItems: 'center',
    marginBottom: 2,
    color: '#514646',
  },
  text1: {
    fontSize: 26,
    alignItems: 'left',
    marginBottom: 2,
    color: '#514646',
    marginLeft: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#B7B7B7',
    borderRadius: 50,
    height: 400,
    width: '100%',
    padding: 8,
    fontSize: 20,
    marginBottom: 20,
  },
}
);