import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    borderBottomColor: 'red',
    borderBottomWidth: 4,
    padding: 10,
    marginBottom: 5,
  },
});
export default GoalItem;
