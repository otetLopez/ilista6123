import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Button, TextInput} from 'react-native';
import 'react-native-gesture-handler';

import bg from '../assets/bg.jpg';
export const INFO_LOG = "INFO_DEBUG: ";

'use strict';


/**
 * Name: createNewNote() 
 * This function routes user to add new note view.  Called when "Add New Note" button is called.
 * The note_index is just incremented when there is a note being pushed
 */
export function createNewNote({navigation}) {
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
        marginTop: '1%',
    };
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={bg} style={styles.bg}>
            <View style={{height: '100%', width: '100%', alignItems: 'center', padding: 30}}>
                <Text style= {{fontSize: 40, fontWeight: 'bold', color: '#f0f0f0'}}>ILISTA</Text>
                <Text style= {{color: '#f0f0f0', fontStyle: 'italic'}}>{"\n"}A companion.  A simple note application </Text>
                <View style={style_noteform}>
                    <TextInput
                        placeholder="New Note"
                        id="title_in"
                        value={title_in}
                        style={style_title_in}
                        onChangeText={text => setTitle(text)}
                    />
                    <TextInput 
                        id="content_in"
                        placeholder="Enter you note details here..."
                        value={content_in}
                        onChangeText={text => setContent(text)}
                        style={style_content_in}
                        multiline={true}
                    />
                </View>
                <View style={{marginTop: '10%'}}> 
                    <Button title='Save' onPress={() => {
                        console.log(INFO_LOG + "Before: " + title_in + content_in);
                        navigation.navigate('Home', {
                            newTitle: title_in,
                            newContent: content_in,
                        });
                    }}/>
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