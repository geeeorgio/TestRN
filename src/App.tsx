import React, { useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    isDarkMode;
  }, [isDarkMode]);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Text style={styles.text}>Welcome Native!</Text>
        <Text style={styles.second}>
          I am testing this app right now lets see what happens
        </Text>
        <Text style={styles.third}>One more test</Text>
        <Text style={styles.text}>Great built!</Text>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  second: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 800,
    color: 'green',
  },
  third: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 500,
    color: 'blue',
  },
});

export default App;
