import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <div className="app">
        <h1>ILISTA</h1>
        <p><i>A companion.  A simple note application</i></p>
        <br/><br/><br/><br/><br/>
        <div className="todo-list">
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
