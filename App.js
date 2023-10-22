import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [enterdtext, setGoalText] = useState('');

  function handleInput(goalEntered){
      setGoalText(goalEntered);
    }

  function handleButton(){
    setGoalList((currentGoals) =>
        [...currentGoals, {
            name: enterdtext, 
            id: Math.random().toString(),
        }]
    )}

    function handleDelete(id){
      setGoalList((currentGoals) => {
        return currentGoals.filter((goal) => goal.id!== id);
      });
    }
  
  return (
    <View style={styles.container}>
      <GoalInput changeFunction={handleInput} pressFunction={handleButton} />
      <View style={styles.listGoals}>
        <Text style={styles.dummyText}>List of Goalss....</Text>
        <FlatList 
          data={goalList} 
          renderItem= {(itemData)=> {
            return <GoalItem name={itemData.item.name} onDeleteItem={()=>handleDelete(itemData.item.id)}/>
            }
          } 
          keyExtractor={(item) => {return item.id;}}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#f3eaf9',
  },
  dummyText: {
    color: '#02010a',
    fontWeight: "bold", 
    padding: 8, 
    marginBottom: 10,
    fontSize: 40,
    textAlign: 'center',
 },
 listGoals: {
    flex: 5,
  },
});
