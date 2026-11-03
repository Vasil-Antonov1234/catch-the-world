import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppContextProvider from './contexts/AppContextProvider.jsx';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import TopBar from './components/top-bar/TopBar.jsx';
import Home from './components/screens/Home.jsx';
import colors from './theme/colors.js';

export default function App() {

    return (
        <AppContextProvider>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    <StatusBar style="light" animated />
                    <View style={styles.logoCtr}>
                        <Text style={styles.logoL}>Catch <Text style={styles.logoM}>the</Text><Text style={styles.loroR}>World</Text></Text>
                    </View>
                    <TopBar />
                    <Home />
                </SafeAreaView>
            </SafeAreaProvider>
        </AppContextProvider>
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
