import React, {useState} from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoals = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...courseGoals,
      {id: Math.random().toString(), value: goalTitle},
    ]);
    setIsAddMode(false);
  };
  const removeHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
  const cancelGoal = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoals}
        onCancel={cancelGoal}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
