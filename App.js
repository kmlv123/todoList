import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Platform ,TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';
import Task from './components/Task';

export default function App() {
  const [task, setTask] =useState();
  const[taskItems, setTaskItems] = useState([]);



  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.slice(index, 1);
    setTaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>

      {/* Today's Tasks*/}
        <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
        {

          taskItems.map((item, index) => {
           return (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item}/>
            </TouchableOpacity>
           )
        })
      }

        </View>
      </View> 

     { /* second one  */}
      <KeyboardAvoidingView behaviour={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input}  placeholder={'write a task'} value={task} onChangeText={text => setTask(text)}/>

       <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
       </TouchableOpacity>

        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop:80,
    paddingHorizontal:50
  },
  items: {
    marginTop:10
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight:'bold',
  }, 

  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },

  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    borderRadius:60,
    borderColor:'#c0c0c0',
    borderWidth:1,
    width:250,
    marginLeft:20
  },

  addWrapper:{
    height:40,
    width:40,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#c0c0c0',
    borderWidth:1,
    marginRight:20
  }
  
});
