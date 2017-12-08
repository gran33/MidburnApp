import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>🔥 Midburn 🔥</Text>
        <Text style={{fontSize: 30}}>Let's Rock 🤘</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D8CAE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
