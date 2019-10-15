import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder = "Course Goal"
        style={{
          width: '70%', borderBottomColor: 'black', borderBottomWidth: 1
        }} />
        <Button title="ADD"/>
        <View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '70%',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
});
