import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';
const GoalInput = (props) => {
  const [enterGoals, setGoals] = useState('');
  const goalInputHandler = (enterText) => {
    setGoals(enterText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enterGoals);
    setGoals('');
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.direction}>
        <TextInput
          style={styles.input}
          placeholder="Create Your Goals Maximun"
          onChangeText={goalInputHandler}
          value={enterGoals}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    padding: 10,
    marginBottom: 5,
    width: '80%',
  },
  direction: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '65%',
  },
  button: {
    width: '40%',
  },
});
export default GoalInput;
