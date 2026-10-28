import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './theme/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoCtr}>
        <Text style={styles.logoL}>Catch <Text style={styles.logoM}>the</Text><Text style={styles.loroR}>World</Text></Text>
      </View>
      <Text style={styles.title}>Journal</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 70
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  logoCtr: {
    marginTop: 10,
    marginBottom: 20,
    // paddingHorizontal: 20,
    // alignItems: "flex-start",
    // width: "100%"
  },
  logoL: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.primary,
  },
  loroR: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.accent
  },
  logoM: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "300"
  }
});
