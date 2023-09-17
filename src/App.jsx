import { FlatList, SafeAreaView, Alert, StyleSheet, Text } from "react-native";
import TopBar from "./components/TopBar";
import ToDoComponent from "./components/ToDoComponent";
import InputComponent from "./components/InputComponent";
import uuid from 'react-native-uuid';
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';

const storage = new MMKVLoader().initialize();

const App = ()=>{
  
  const [toDoList, setToDoList] = useMMKVStorage('toDoList', storage, []);

  const [counter, setCounter] = useMMKVStorage('counter', storage, 0);
  

  const renderToDoComponents = ({item}) =>{
   return(
    <ToDoComponent item = {item} 
    onLongPress={ToDoComponentLongPressed}
    onPress={ToDoComponentOnPressed}/>
   );
  }

  const titleEntered = (title) =>{
    const newToDo = {
      title:title,
      isDone: false,
      id:uuid.v4()
    }
    addNewToDo(newToDo);
  }

  const ToDoComponentLongPressed = (id) =>{
    showDeleteAlert(id);
  };

  const ToDoComponentOnPressed = (id) =>{
    updateToDo(id)
  };

  const showDeleteAlert = (id) =>
  Alert.alert(
    'Delete To Do',
    'Are you sure you want to delete this to do?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => deleteToDo(id),
        style: 'ok',
      },
    ],
    {
      cancelable: true,
    },
  );

  function addNewToDo(newToDo){
    var newList = Array.from(toDoList);
    newList.push(newToDo)
    setToDoList(newList)
    updateCounter(newList)
  }

  function deleteToDo(id){
    var newList = Array.from(toDoList);
    newList = newList.filter(item => item.id != id);
    setToDoList(newList)
    updateCounter(newList)
  }

  function updateToDo(id){
    var newList = Array.from(toDoList);
    toDoIndex = newList.findIndex((toDo => toDo.id == id));
    newList[toDoIndex].isDone = !newList[toDoIndex].isDone;
    setToDoList(newList);
    updateCounter(newList)
  }

  function updateCounter(list){
    const newCounterValue = list.filter(checkIsDone).length;
    setCounter(newCounterValue);
  }

  function checkIsDone(todo) {
    return !todo.isDone;
  }

  return(
    <SafeAreaView style = {Style.container}>
      <TopBar counter= {counter}/>
      <FlatList data={toDoList}
        keyExtractor={item => item.id}
        renderItem={renderToDoComponents} 
        showsVerticalScrollIndicator = {false}/>
      <InputComponent onEntered = {titleEntered} />
    </SafeAreaView>
  );
};


export default App;


const Style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#2e3440',
  },
});