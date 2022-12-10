import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const GoalScreen = () => {
  const [counter, setCounter] = useState(1);
  return (
    <View style={Styles.screen}>
      <Text style={{color: 'white', textAlign: 'center', fontSize: 17}}>
        How many 80oz glasses of water would you like to drink each day?
      </Text>
      <View style={Styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            if (counter > 0) {
              setCounter(counter - 1);
            }
          }}
          activeOpacity={0.6}>
          <Icon
            name="remove-circle-outline"
            size={50}
            color={Colors.accentColorBlue}
          />
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 40}}>{counter}</Text>
        <TouchableOpacity
          onPress={() => {
            setCounter(counter + 1);
          }}
          activeOpacity={0.6}>
          <Icon
            name="add-circle-outline"
            size={50}
            color={Colors.accentColorBlue}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '45%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10%',
  },
});
export default GoalScreen;
