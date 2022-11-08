import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native"

type ListToDoProps = {
  toDo: string[]
}

const Todo: ListRenderItem<string> = ({ item, index }) => (
<Text style={styles.text} key={index}>
  {index}: {item}
</Text>
)

export const ListToDo = ({toDo}: ListToDoProps) => 
<View style={styles.container}>
  <FlatList renderItem={Todo} data={toDo} />
</View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
text: {
  fontSize: 16,
  marginBottom: 5, 
  justifyContent: 'center',
}})