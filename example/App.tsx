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

const Section = ({ title, text }: { title?: String, text: String }) => {
  return <View style={styles.section}>
    {title &&
      <Text style={styles.title}>
        {title}
      </Text>
    }
    <Text style={styles.subtext}>
      {text}
    </Text>
  </View>
}

const App = () => {

  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic" >
        <View style={styles.container}>
          <Section
            title="Rive for React Native Web"
            text="Interactive animations that work across iOS, Android and Web with a single declarative API 🥳"
          />

          <Rive
            url='https://cdn.rive.app/animations/vehicles.riv'
            style={{ width: '100%', height: 300, marginTop: 24 }}
            autoplay={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 540,
    marginHorizontal: 'auto'
  },
  section: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    paddingBottom: 16,
    fontWeight: '600',
    color: '#8000ff'
  },
  subtext: {
    marginTop: 8,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '400',
    color: '#444444',
  }
});

export default App;
