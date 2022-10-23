import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Rive from 'rive-rnw'
// import Rive from 'rive-react-native'

const App = () => {

  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic" >
        <View style={styles.container}>
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
          <Rive
            url='https://github.com/clearlysid/rive-rnw/blob/311e877adff4e49cd4eaa543a906f21b058cfa5d/example/public/people.riv'
            style={{ height: 500, width: 500 }}
            autoplay={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 500,
    marginHorizontal: 'auto'
  },
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
