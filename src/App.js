import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import BottomNavigation from './navigation/BottomNavigation';
import Colors from './constants/Colors';
import StackNavigation from './navigation/StackNavigation';
import {store} from './store/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1, backgroundColor: Colors.primaryColor}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.primaryColor}
        />
        <StackNavigation />
      </View>
    </Provider>
  );
};

export default App;
