import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import bg from '../assets/bg.jpg';

export const INFO_LOG = "INFO_DEBUG: ";



function NoteForm() {
    return(
        <View>
        <View>
    
        </View>
      </View>
    );
}

/**
 * Name: createNewNote() 
 * This function routes user to add new note view.  Called when "Add New Note" button is called.
 * The note_index is just incremented when there is a note being pushed
 */
export function createNewNote({navigation}) {
    const style_noteform = { 
        flex: 1, 
        backgroundColor: 'rgba(1, 90, 169,.2)', 
        padding: 20, 
        borderRadius: 4, 
        alignItems: 'center', 
        marginLeft: '5%', 
        marginRight: '5%', 
        marginTop: '20%'};
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={bg} style={styles.bg}>
            <View style={{alignItems: 'center', textAlign: 'center', padding: 30}}>
                <Text style= {{fontSize: 40, fontWeight: 'bold', color: '#f0f0f0'}}>ILISTA</Text>
                <Text style= {{color: '#f0f0f0', fontStyle: 'italic'}}>{"\n"}A companion.  A simple note application </Text>
                
                <View className="noteForm" style={style_noteform}>
                <NoteForm/>
                </View>
            
                <View style={{marginTop: '10%'}}>
                <Button title='Save' onPress={() => navigation.navigate('New Note')}/>
                <Button title='Cancel' onPress={() => navigation.navigate('Home')}/>
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