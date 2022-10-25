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

const Button = (
  { text, color }: { text: String, color?: ViewStyle['backgroundColor'] }
) => <View style={[styles.button, { backgroundColor: color || 'white' }]}>
    <Text style={{
      color: 'black',
      fontSize: 20,
      lineHeight: 20,
      fontWeight: '700'
    }}>
      {text}
    </Text>
  </View>

const App = () => {

  return (
    <View style={styles.main}>
      <StatusBar barStyle='light-content' />
      <ScrollView>
        <View style={styles.container}>

          <Title>rive-rnw 🥳</Title>
          <Paragraph>
            A cross-platform runtime for Rive that works on iOS, Android & Web!
          </Paragraph>

          <Rive
            url="https://cdn.rive.app/animations/vehicles.riv"
            style={{
              width: '100%',
              aspectRatio: 2 / 1,
            }}
            autoplay={true}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { height: '100%', backgroundColor: '#05171f' },
  container: {
    width: '100%',
    maxWidth: 540,
    paddingHorizontal: 24,
    marginHorizontal: 'auto',
    paddingVertical: Platform.OS === 'web' ? 16 : 48,
  },
  title: {
    fontSize: 48,
    marginTop: 48,
    color: 'white',
    fontWeight: '800',
    paddingBottom: 16,
    textAlign: 'center'
  },
  paragraph: {
    fontSize: 20,
    lineHeight: 28,
    color: 'white',
    fontWeight: '300',
    letterSpacing: 0.4,
    paddingBottom: 24,
    textAlign: 'center',
  },
  button: {
    width: 200,
    borderRadius: 8,
    display: 'flex',
    marginVertical: 36,
    alignSelf: 'center',
    paddingVertical: 16,
    alignItems: 'center',
    paddingHorizontal: 28,
    justifyContent: 'center',
    backgroundColor: '#8000ff',
  }
});

export default App;
