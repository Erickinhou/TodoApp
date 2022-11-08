import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddTodo } from './components/AddTodo';
import { ListToDo } from './components/ListToDo';

export default function App() {
  const [toDo, setToDo] = useState<string[]>([])
  return (
    <>
      <Text style={styles.title}>
          Todo App
        </Text>
      <View style={styles.container}>
        <View>
          <AddTodo  setToDo={setToDo}/>
          <ListToDo toDo={toDo} />
          <StatusBar style="auto" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 28,
  }
});
