import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import colors from './theme/colors';
import JourneyCard from './screens/JourneyCard.jsx';
import places from "../data.json";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.containerSecondary}>
        <View style={styles.logoCtr}>
          <Text style={styles.logoL}>Catch <Text style={styles.logoM}>the</Text><Text style={styles.loroR}>World</Text></Text>
        </View>
        <Text style={styles.title}>Journal</Text>
        {places.map((place) => <JourneyCard key={place.id} place={place}/>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  containerSecondary: {
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  logoCtr: {
    marginTop: 49,
    marginBottom: 20,
    // paddingHorizontal: 20,
    alignItems: "center",
    width: "100%"
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
