import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.f20}>TESTE</Text>
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
