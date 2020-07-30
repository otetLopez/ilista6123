import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Button, TextInput} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import bg from '../assets/bg.jpg';
// import { TextInput } from 'react-native-gesture-handler';
export const INFO_LOG = "INFO_DEBUG: ";

function NoteForm() {
    const [title_in, setTitle] = React.useState("");
    const [content_in, setContent] = React.useState("");

    const style_noteform = { 
        flex: 1, 
        width: '100%', 
        backgroundColor: 'rgba(1, 90, 169,.2)', 
        padding: 20, 
        borderRadius: 4, 
        alignItems: 'center', 
        marginLeft: '15%', 
        marginRight: '15%', 
        marginTop: '10%' 
    };

    const style_title_in = {
        width: '100%',
        fontSize: 20,
        backgroundColor: '#008080',
        color: '#f0f0f0',
        padding: 5,
        borderRadius: 4,
    };
    const style_content_in = {
        width: '100%',
        fontSize: 20,
        backgroundColor: '#008080',
        color: '#f0f0f0',
        padding: 5,
        borderRadius: 4,
        height: 100,
        fontSize: 15,
        marginTop: '3%',
    };

    return (

        <View className="noteForm" style={style_noteform}>
            <TextInput
                placeholder="New Note"
                value={title_in}
                style={style_title_in}
                onChangeText={text => setTitle(text)}
            />
            <TextInput 
                className="content_in" 
                placeholder="Enter you note details here..."
                value={content_in}
                onChangeText={text => setContent(text)}
                style={style_content_in}
                multiline={true}
            />
        </View>
    );
}

/**
 * Name: createNewNote() 
 * This function routes user to add new note view.  Called when "Add New Note" button is called.
 * The note_index is just incremented when there is a note being pushed
 */
export function createNewNote({navigation}) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={bg} style={styles.bg}>
            <View style={{height: '100%', width: '100%', alignItems: 'center', textAlign: 'center', padding: 30}}>
                <Text style= {{fontSize: 40, fontWeight: 'bold', color: '#f0f0f0'}}>ILISTA</Text>
                <Text style= {{color: '#f0f0f0', fontStyle: 'italic'}}>{"\n"}A companion.  A simple note application </Text>
                <NoteForm/>
                <View style={{marginTop: '10%'}}> 
                    <Button title='Save' onPress={() => navigation.navigate('New Note')}/>
                    <Button title='Cancel' onPress={() => navigation.goBack()}/> 
                </View>
            </View>
        </ImageBackground>
      </View>
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