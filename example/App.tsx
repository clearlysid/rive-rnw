import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {

  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic" >
        <View>
          <View style={styles.section}>
            <Text style={styles.title}>
              Wait a second...
            </Text>
            <Text style={styles.subtext}>
              You're telling me that I can write my UI once and have it work across iOS, Android AND the Web 🤯
            </Text>

            <Text style={styles.subtext}>
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
    fontWeight: '600',
    color: '#8000ff'
  },
  subtext: {
    marginTop: 8,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '400',
    color: '#444444',
    marginBottom: 8
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
