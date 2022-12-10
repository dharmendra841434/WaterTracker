import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Colors from '../constants/Colors';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const SplashScreen = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.replace('Bottom');
  }, 2000);
  return (
    <View style={Styles.screen}>
      <Image
        style={Styles.logo}
        source={require('../assets/logos/water-drop-new.png')}
      />
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
  logo: {
    height: Height / 2,
    width: Width / 1.2,
  },
});
export default SplashScreen;
