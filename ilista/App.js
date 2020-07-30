import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Button, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import bg from './assets/bg.jpg';
import {createNewNote} from './src/AddNote.js'
import {editNote} from './src/EditNote.js'
import {Note} from './src/Note.js'

'use strict';

export const INFO_LOG = "INFO_DEBUG: ";

var notesList = [];
var nId = 0; 
var isNew;

function homeScreen({ route, navigation }) {
  const [notes, setNotes] = useState([
  ]);
  console.log(INFO_LOG + "isNew is " + isNew);
  /* Let's check if there are params sent from AddNote or Edit */
  if(isNew === true) {
    try {
      const { newTitle } = route.params;
      const { newContent } = route.params;
      const { index } = route.params;
      processNewData(index, newTitle, newContent);
      isNew = false;
    } catch (error) {
      console.log(INFO_LOG + "No data yet")
    }
  }

  const removeNote = id => {
    console.log(INFO_LOG + "Removing note at index " + id); 
    const newNotes = [...notes];
    for(var i=0; i<notesList.length; i++) {
      if(notesList[i].id === id) {
        notesList.splice(i, 1);
      }
    }
    setNotes(newNotes);
    console.log("Removing note at index " + id); 
  };

  const style_add_btn = {
    flex: 1,
    width: 60,
    height: 60,
    color: '#f0ffff',
    backgroundColor: '#4b0082',
    borderRadius: 30,
    fontSize: 30,
    textAlign: 'center'
  };

  const style_notelist = { 
    flex: 1, 
    width: '100%',
    backgroundColor: 'rgba(1, 90, 169,.2)', 
    padding: 20, 
    borderRadius: 4, 
    alignItems: 'center',
    marginLeft: '5%', 
    marginRight: '5%', 
    marginTop: '20%'};

  return(
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg}>
        <View style={{height: '100%', width: '100%', alignItems: 'center', padding: 30}}>
          <Text style= {{fontSize: 40, fontWeight: 'bold', color: '#f0f0f0'}}>ILISTA</Text>
          <Text style= {{color: '#f0f0f0', fontStyle: 'italic'}}>{"\n"}A companion.  A simple note application </Text>
          
          <View style={style_notelist}>
            {<DisplayList 
              posts={notesList}
              removeNote={removeNote}
              navigation={navigation}
            />}
          </View>
       
          <View style={{marginTop: '2%', marginBottom: '3%'}}>
          <Button title='+' color='#f0ffff' backgroundColor='#4b0082' onPress={() => {isNew = true;
                                      navigation.navigate('New Note')}}/>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

function processNewData(nIndex, nTitle , nContent) {
  console.log(INFO_LOG + "processNewData()" + nTitle + nContent + nIndex )

  // Let's give a default email for now
  var email = "ilista@admin.com";

  // New Notes should have undefined nIndex
  if(nIndex === undefined) {
    var newNote = new Note(nId, nTitle, nContent, email);
    notesList.push(newNote);
    nId = nId + 1;
  } else if (nIndex === null) {
    console.log(INFO_LOG + "nIndex is not set");
  }
}

/**
 * Name: DisplayList()
 * HERE COMES THE DRAGON!
 * This function displays the note list...
 * 
 * @param {*} props 
 */
function DisplayList(props, {navigation}) {
  const style_note = {
    borderRadius: 15,
    width: '100%',
    backgroundColor: '#008080',
    // boxShadow: 1 1 1 'rgba(0, 0, 0, 0.15)',
    padding: 10,
    alignItems: 'center',
    marginBottom: 2
  };
  const style_title_in = {
    fontSize: 15,
    color: '#f0f0f0',
    textAlign: 'center'
  }
  const style_content_in = {
    fontSize: 10,
    color: '#f0f0f0',
    textAlign: 'center'
  }
  const content = props.posts.map((post) =>
    <View key={post.id}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Edit Note', { nIdx: post.id, noteToEdit: post})}>
      <View style={style_note}>
        <Text style={style_title_in}>{post.title}</Text>
        <Text style={style_content_in}>{post.content}</Text>
        <Button title='DEL' onPress={() => props.removeNote(post.id)}/>
      </View>
      </TouchableOpacity>
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
        <Stack.Screen name="Edit Note" component={editNote} />
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

