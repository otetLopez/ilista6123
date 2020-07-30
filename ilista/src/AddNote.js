import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, ImageBackground, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import bg from '../assets/bg.jpg';

export const INFO_LOG = "INFO_DEBUG: ";
/**
 * Name: createNewNote() 
 * This function routes user to add new note view.  Called when "Add New Note" button is called.
 * The note_index is just incremented when there is a note being pushed
 */
export function createNewNote() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={bg} style={styles.bg}>
            <Text>Home Screen</Text>
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