import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import colors from './theme/colors';
import JourneyCard from './screens/JourneyCard.jsx';
import places from "../data.json";
import PlaceDetails from './screens/PlaceDetails.jsx';
import { useState } from 'react';

export default function App() {
  const [activePlace, setActivePlace] = useState(null)

  function pressHandler(place) {
    setActivePlace(place);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.logoCtr}>
        <Text style={styles.logoL}>Catch <Text style={styles.logoM}>the</Text><Text style={styles.loroR}>World</Text></Text>
      </View>
      <ScrollView contentContainerStyle={styles.containerSecondary}>
        {activePlace ? "" : <Text style={styles.title}>Journal</Text>}
        {!activePlace ?
          places.map((place) => <JourneyCard key={place.id} place={place} press={pressHandler} />) : <PlaceDetails place={activePlace} press={pressHandler} />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    width: "100%"
  },
  containerSecondary: {
    paddingHorizontal: 20,
    alignSelf: "stretch"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  logoCtr: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: 74,
    backgroundColor: colors.primary,
    borderEndEndRadius: 70,
    borderEndStartRadius: 70,
    alignSelf: "center"
  },
  logoL: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.textOnPrimary,
  },
  loroR: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.accent
  },
  logoM: {
    fontSize: 16,
    color: colors.textOnPrimary,
    fontWeight: "300"
  }
});
