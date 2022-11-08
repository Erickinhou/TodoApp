import { Dispatch, useState } from "react"
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native"

interface AddTodoInterface {
  setToDo: Dispatch<React.SetStateAction<string[]>>
}

export const AddTodo = ({setToDo}: AddTodoInterface)=>{
  const [toDoInputText, setToDoInputText] = useState('')
  const handleButtonPress = () => {
    if(toDoInputText){
      setToDo((prevTodo)=>[...prevTodo, toDoInputText])
      setToDoInputText('')
    }
  }
  return <View style={styles.container}>
    <TextInput style={styles.input} onChangeText={setToDoInputText} value={toDoInputText}/>
    <Pressable style={styles.button} onPress={handleButtonPress}>
      <Text style={styles.text}>+</Text>
    </Pressable>
  </View>
}

const styles = StyleSheet.create({container: {
  flexDirection: 'row',
  marginBottom: 20
},
input: {
  borderWidth: 1,
  borderColor: "#04AA6D",
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
  padding: 10
},
button: {
  padding: 10,
  justifyContent: 'center',
  borderBottomRightRadius: 10,
  borderTopRightRadius: 10,
  backgroundColor: "#04AA6D"
},
text: {
  color: '#fff', 
  marginTop: 2
}})