import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Button, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, NavigationEvents } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import bg from './assets/bg.jpg';
import {createNewNote} from './src/AddNote.js'
import {editNote} from './src/EditNote.js'
import {Note} from './src/Note.js'
import axios from 'axios';

'use strict';

export const INFO_LOG = "INFO_APP_DEBUG: ";

var notesList = [];
var nId = 0; 
var isNew;
var isFirstLoad = true;

function homeScreen({ route, navigation }) {
  const [notes, setNotes] = useState([
  ]);

  /* Let's check if there are params sent from AddNote or Edit */
  if(isNew === true || isFirstLoad === true) {
    var loadData = async () => {
      console.log(INFO_LOG + 'ILISTA loading data start');
      await getAllNotesFromDB();
      console.log(INFO_LOG + 'ILISTA loading data end');
      const newNotes = [...notes];
      setNotes(newNotes);
    }
    loadData();
    isFirstLoad = false;
    isNew = false;
  }

  const removeNote = id => {
    var reloadData = async () => {
      console.log(INFO_LOG + "Removing note at index " + id); 
      deleteNoteFromDB(id);
      await getAllNotesFromDB();
      console.log(INFO_LOG + 'ILISTA loading data');
      const newNotes = [...notes];
      setNotes(newNotes);
    }

    reloadData();
  };

  const style_add_btn = {
    flex: 1,
    width: 60,
    height: 60,
    backgroundColor: '#4b0082',
   borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  };
  const style_add_btn_txt = {
    flex: 1,
    color: '#f0ffff',
    margin: 'auto',
    paddingTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
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
          <TouchableOpacity onPress={() => {isNew = true;
                                      navigation.navigate('New Note')}}>
            <View style={style_add_btn} >
              <Text style={style_add_btn_txt}>+</Text>
            </View>  
          </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

export async function getAllNotesFromDB() {
  var allNotes =[];

  await axios.get("http://localhost:8000/ilista/getallnotes")
      .then(response => {
          console.log('getting data from axios', response.data);
          allNotes = response.data;
          console.log(INFO_LOG + 'Returning allNotes');
          notesList = allNotes;
          return allNotes;
      })
      .catch(error => {
          console.log(error);
          return allNotes;
      });
      console.log(INFO_LOG + 'Returning allNotes');
      // isDone = true;
      // return allNotes;
}

export function addNoteToDB(id,title,content){
  axios.get("http://localhost:8000/ilista/addnote/"+id+"/"+title+"/"+content)
  .then(response => {
      console.log('getting data from addnote', response.data);
      
  })
  .catch(error => {
      console.log(error);
  });
}

export function updateNoteAtDB(id,title,content){
  axios.get("http://localhost:8000/ilista/updatenote/"+id+"/"+title+"/"+content)
  .then(response => {
      console.log('update note', response.data);
  })
  .catch(error => {
      console.log(error);
  });
}

export function deleteNoteFromDB(id){
  axios.get("http://localhost:8000/ilista/deletenote/"+id)
  .then(response => {
      console.log('update note', response.data);
  })
  .catch(error => {
      console.log(error);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


/**
 * Name: DisplayList()
 * HERE COMES THE DRAGON!
 * This function displays the note list...
 * 
 * @param {*} props 
 */
function DisplayList(props, {navigation}) {
  // allNotes = getAllNotesFromDB();
  //addNoteToDB(20,'ttt','ggg');
  // updateNoteAtDB(2 , 'tenn','uuu');
  // deleteNoteFromDB(1);

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
      <TouchableOpacity onPress={() => {
        isNew = true;
        props.navigation.navigate('Edit Note', { nIdx: post.id, noteToEdit: post})
        }}>
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

