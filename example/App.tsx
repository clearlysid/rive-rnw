import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  Platform,
  ViewStyle
} from 'react-native';
import Rive from 'rive-rnw'

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>
const Paragraph = ({ children }) => <Text style={styles.paragraph}>{children}</Text>

const Button = ({ text, color }: { text: String, color?: ViewStyle['backgroundColor'] }) => {

  return <View style={[styles.button, { backgroundColor: color }]}>
    <Text style={{
      color: 'black',
      fontSize: 20,
      lineHeight: 20,
      fontWeight: '700'
    }}>
      {text}
    </Text>
  </View>
}

const App = () => {

  return (
    <View style={styles.main}>
      <StatusBar barStyle='light-content' />
      <ScrollView>
        <View style={styles.container}>

          <Title>🎃 Happy Halloween!</Title>
          <Paragraph>We're writing an app for {Platform.OS}! 🥳</Paragraph>

          <Rive
            url="https://cdn.rive.app/animations/vehicles.riv"
            style={{
              width: '100%',
              height: 300,
              marginTop: 24
            }}
            autoplay={true}
          />

          <Button text="Play" color="darkorange" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { height: '100%', backgroundColor: '#05171f' },
  container: {
    maxWidth: 540,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  title: {
    marginTop: 48,
    fontSize: 48,
    textAlign: 'center',
    paddingBottom: 16,
    fontWeight: '800',
    color: 'white'
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.4,
    fontWeight: '300',
    color: 'white',
  },
  button: {
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 28,
    backgroundColor: '#8000ff',
    borderRadius: 8,
    width: 200,
    marginVertical: 16,
  }
});

export default App;
