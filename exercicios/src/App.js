import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import {Inverter, MegaSena} from './components/Multi'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.f20}>TESTE</Text>
      <Simples texto= "Texto por props"/>
      <ParImpar numero={3}/>
      <ParImpar numero={2}/>
      <Inverter texto="React Native"/>
      <MegaSena numeros={10}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  f20: {
    fontSize: 40
  }
});

export default App;
