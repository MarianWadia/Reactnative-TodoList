import React from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'

function GoalInput({changeFunction, pressFunction}) {
  return (
    <View style = {styles.inputContainer}>
        <TextInput placeholder='Your Course Goal!' style={styles.textInputStyle} onChangeText={changeFunction}></TextInput>
        <Button title='Add Goal' onPress={pressFunction}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#cccc',
        borderBottomWidth: 3,
        marginBottom: 15, 
      }, 
      textInputStyle: {
        marginRight: 15,
        width: '70%',
        borderColor: '#ccc',
        borderWidth: 2,
        paddingLeft: 8
      }, 
});
export default GoalInput