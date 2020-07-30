import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import bg from './assets/bg.jpg';

import {createNewNote} from './src/AddNote.js'
export const INFO_LOG = "INFO_DEBUG: ";
var notesList = [];
var nId = 0; 

function homeScreen({ route, navigation }) {
  const [notes, setNotes] = useState([
  ]);

  /* Let's check if there are params sent from AddNote or Edit */
  try {
    const { newTitle } = route.params;
    const { newContent } = route.params;
    const { index } = route.params;
    processNewData(index, newTitle, newContent);
  } catch (error) {
    console.log(INFO_LOG + "No data yet")
  }

  const removeNote = id => {
    const newNotes = [...notes];
    for(var i=0; i<notesList.length; i++) {
      if(notesList[i].id === id) {
        notesList.splice(i, 1);
      }
    }
    setNotes(newNotes);
    console.log("Removing note at index " + id); 
  };

  const editNote = id => {
    console.log("Editing note at index " + id); 
    const where = document.getElementById("root");
    ReactDOM.render(<EditNotePage noteId={id}/>, where);
  };

  const style_add_btn = {
    flex: 1,
    width: 60,
    height: 60,
    borderRadius: 30,
    fontSize: 'x-large',
    textAlign: 'center'
  };

  const style_notelist = { 
    flex: 1, 
    backgroundColor: 'rgba(1, 90, 169,.2)', 
    padding: 20, 
    borderRadius: 4, 
    alignItems: 'center',
    marginLeft: '5%', 
    marginRight: '5%', 
    marginTop: '20%'};

  // <button style={style_add_btn} onClick={() => navigation.navigate('New Note')}><Text>+</Text></button> 
  return(
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg}>
        <View style={{alignItems: 'center', padding: 30}}>
        <Text style= {{fontSize: 40, fontWeight: 'bold', color: '#f0f0f0'}}>ILISTA</Text>
          <Text style= {{color: '#f0f0f0', fontStyle: 'italic'}}>{"\n"}A companion.  A simple note application </Text>
          
          <View style={style_notelist}>
            {<DisplayList 
              posts={notesList}
              removeNote={removeNote}
              editNote={editNote}
            />}
            <Text style= {{color: '#f0f0f0'}}>Inser Note Display here </Text>
          </View>
       
          <View style={{marginTop: '8%', marginBottom: '3%'}}>
          <Button title='+' style={style_add_btn} onPress={() => navigation.navigate('New Note')}/>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

function processNewData(nIndex, nTitle , nContent) {
  console.log(INFO_LOG + "processNewData()" + nTitle + nContent + nIndex)

  // Let's give a default email for now
  
}

/**
 * editNote()
 * @param {*} id 
 */
const editNote = id => {
  console.log("edit note at index " + id); 
  // Should navigate to edit note
};

/**
 * Name: DisplayList()
 * HERE COMES THE DRAGON!
 * This function displays the note list...
 * 
 * @param {*} props 
 */
function DisplayList(props) {
  const content = props.posts.map((post) =>
    <View key={post.id}>
      <View>
        <Text>Title</Text>
        <Text onClick={() => props.editNote(post.id)}>{post.title}</Text>
        <Text>{"/n"}{post.content}</Text>
        <Button title='DEL' onPress={() => props.removeNote(post.id)}/>
      </View>
    </View>
  );
  return (
    <View>
      <View>
        {content}
      </View>
    </View>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer initialRouteName="Home">{
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homeScreen} options={{title: 'Notes'}}/>
        <Stack.Screen name="New Note" component={createNewNote} />
      </Stack.Navigator>
    }</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
  }
});

