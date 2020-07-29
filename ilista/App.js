import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';


import bg from './assets/bg.jpg';

/**
 * Name: createNewNote() 
 * This function routes user to add new note view.  Called when "Add New Note" button is called.
 * The note_index is just incremented when there is a note being pushed
 */
function createNewNote() {
  console.log(INFO_LOG + "CreateNewNote")
  const where = document.getElementById("root");
  // Should Navigate to Add Note Page
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
    <div key={post.id}>
      <div className="note">
        <h5>Title</h5>
        <h3 onClick={() => props.editNote(post.id)}>{post.title}</h3>
        <h5>Details</h5>
        <h4>{post.content}</h4>
         <button className="deleteButton" onClick={() => props.removeNote(post.id)}>Delete Note</button> 
      </div>
    </div>
  );
  return (
    <View>
      <div>
        {content}
      </div>
    </View>
  );
}

export default function App() {

  const style_add_btn = {
      flex: 1,
      width: '60px',
      height: '60px',
      borderRadius: '30px',
      fontSize: 'x-large',
      textAlign: 'center'
    };
  
  const style_notelist = { flex: 1,
    backgroundColor: 'rgba(1, 90, 169,.2)', padding: '20px', borderRadius: '4px', alignItems: 'center', marginLeft: '5%', marginRight: '5%'};

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg}>
        <div style={{alignItems: 'center', textAlign: 'center', padding: '30px'}}>
          <h1 style= {{color: '#f0f0f0'}}>ILISTA</h1>
          <p style= {{color: '#f0f0f0'}}><i>A companion.  A simple note application</i></p>
          <br/><br/><br/><br/><br/>
      
          <div className="notelist" style={style_notelist}>
            <p style= {{color: '#f0f0f0'}}>Inser Note Display here</p> 
          </div>
          <br/><br/>
          <div>
          <button class="smallButtons" style={style_add_btn} onClick={() => alert("Test")}>+</button>  
          </div>
        </div>
      </ImageBackground>
      <StatusBar style="auto" />
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
    height: '100%',
    width: '100%',
    alignItems: 'center',
  }
});

const inner_styles = StyleSheet.create({
  notelist: {
    backgroundColor: '#f0f0f0'
  },
  add_btn: {
    flex: 1,
    width: '60px',
    height: '60px',
    borderRadius: '30px',
    fontSize: 'x-large',
    textAlign: 'center'
  }
});
