import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Image,
} from 'react-native';


const App = () => {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const getText = enteredText => {
    setEnteredGoal(enteredText);
  };

  const viewText = () => {
    setCourseGoals(currentGoal => [
      ...currentGoal, 
      {key: Math.random().toString(), value: enteredGoal }
    ]);
  };

  const deleteAll = () => {
    setCourseGoals([]);
  }

  return (
    <View style={styles.bodyWrapper}>
      <View style={styles.img}>
        <Image
           source = {require('C:/Users/hp/Desktop/reactNative/toDo/assets/toDo.jpg')} 
          style={{width: 400, height: 200}}
        />
      </View>
      <View style={styles.upperWrapper}>
        <View style={styles.input}>
          <TextInput
            placeholder="enter the value"
            onChangeText={getText}
            value={enteredGoal}
          />
        </View>

        <View style={styles.button}>
          <Button title="Add" onPress={viewText} />
        </View>
      </View>

      <View style={styles.reset}>
        <Button title="Reset" onPress={deleteAll} />
      </View>

      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.list}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};


export default App;


const styles = StyleSheet.create({
  bodyWrapper: {
    paddingHorizontal: 20,
  },
  upperWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    // height: '100%',
  },
  input: {
    backgroundColor: '#eee',
    width: '70%',
    height: '88%',
    alignSelf: 'center',
  },
  button: {
    width: '25%',
    height: '100%',
    alignSelf: 'center',
  },
  list: {
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#eee',
  },
  img: {
    marginVertical:20,
    alignSelf: 'center'

  },
  reset: {
    marginVertical: 10,
  }
});
