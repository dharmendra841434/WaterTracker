import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const AddScreen = () => {
  const [slider, setSlider] = useState(6);
  const [counter, setCounter] = useState(1);
  const [hydrationPercentage, setHydrationPercentage] = useState(0);
  const [hydrationStatus, setHydrationStatus] = useState('Bad Guy');
  const [lavel, setLavel] = useState(0);

  const addLogHandler = () => {
    let total = slider * counter;
    if (total > 40) {
      setHydrationPercentage(Math.floor(total * 5));
      setHydrationStatus('Hydration is Good');
      setLavel(total * 50);
    } else {
      setHydrationPercentage(Math.floor(total * 5));
      setHydrationStatus('Bad Guy');
      setLavel(total * 10);
    }
  };
  return (
    <View style={Styles.screen}>
      <View style={Styles.topSection}>
        <Text style={Styles.text}>Cup Size? </Text>
        <Slider
          minimumValue={6}
          maximumValue={40}
          maximumTrackTintColor="white"
          thumbTintColor={Colors.accentColorBlue}
          value={slider}
          containerStyle={{width: '70%'}}
          onValueChange={value => setSlider(value)}
        />
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text style={{color: 'white', fontSize: 25}}>
            {Math.floor(slider)}
          </Text>
          <Text style={{color: 'white', fontSize: 20}}>OZ</Text>
        </View>
        <Text style={{color: 'white', fontSize: 20, marginTop: '20%'}}>
          How Many?
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
        <View style={{width: '55%', alignItems: 'center', marginTop: '10%'}}>
          <TouchableOpacity onPress={addLogHandler} style={Styles.logButon}>
            <Text style={{color: 'white', fontSize: 20}}>Add To Log</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.logButon, {backgroundColor: 'red'}]}>
            <Text style={{color: 'white', fontSize: 20}}>Reset Log</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginTop: '7%'}}>
          <Text style={{color: 'white', fontSize: 40}}>
            {hydrationPercentage}%
          </Text>
          <Text style={{color: 'white', fontSize: 20, marginTop: '2%'}}>
            {hydrationStatus}
          </Text>
        </View>
      </View>
      <View style={[Styles.prograssBar, {width: lavel}]}></View>
    </View>
  );
};
const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  topSection: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  text: {color: 'white', fontSize: 22},
  buttonContainer: {
    flexDirection: 'row',
    width: '45%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10%',
  },

  logButon: {
    backgroundColor: Colors.appblue,
    width: '100%',
    alignItems: 'center',
    paddingVertical: '5%',
    borderRadius: 5,
  },
  prograssBar: {
    backgroundColor: Colors.accentColorBlue,
    height: 35,
    marginTop: '10%',
  },
});
export default AddScreen;
