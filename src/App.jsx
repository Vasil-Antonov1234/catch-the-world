import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Keyboard } from 'react-native';
import colors from './theme/colors';
import JourneyCard from './screens/JourneyCard.jsx';
import PlaceDetails from './screens/PlaceDetails.jsx';
import { useState } from 'react';
import Home from './screens/Home.jsx';

export default function App() {

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.logoCtr}>
                <Text style={styles.logoL}>Catch <Text style={styles.logoM}>the</Text><Text style={styles.loroR}>World</Text></Text>
            </View>
            <Home />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'flex-start',
        width: "100%"
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
