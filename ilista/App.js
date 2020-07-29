import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
  return (
    <View style={styles.container}>
      <div className="app">
        <h1>ILISTA</h1>
        <p><i>A companion.  A simple note application</i></p>
        <br/><br/><br/><br/><br/>
        <div className="notelist">
          Inser Note Display here
        </div>
        <br/><br/><br/><br/><br/> <br/><br/>
        <div>
          <button class="smallButtons" onClick={() => alert("Test")}>+</button>
        </div>
      </div>
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
});
