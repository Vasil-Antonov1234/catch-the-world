import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppContextProvider from './contexts/AppContextProvider.jsx';
import colors from './theme/colors.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.jsx';
import AppContext from './contexts/AppContext.js';
import CityDetails from './screens/CityDetails.jsx';
import { useContext } from 'react';

const Stak = createNativeStackNavigator();

export default function App() {

    const { searchPlacesHandler, resetSearchHandler, isSearching, setIsSearching } = useContext(AppContext);

    function searchHandler(query) {
        searchPlacesHandler(query);
    };

    function cancelHandler() {
        resetSearchHandler()
    }

    return (
        <>
            <StatusBar style="dark" animated />
            <NavigationContainer>
                <Stak.Navigator
                    initialRouteName='Home'
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: colors.LightBlue
                        }
                    }}
                >
                    <Stak.Screen
                        name='Home'
                        component={HomeScreen}
                        options={{
                            headerTitle: () =>
                                <View style={styles.logoCtr}>
                                    <Text style={styles.logoL}>Catch <Text style={styles.logoM}>the </Text><Text style={styles.loroR}>World</Text></Text>
                                </View>,
                            headerSearchBarOptions: {
                                headerIconColor: colors.backgroundDarck,
                                barTintColor: colors.surface,
                                placeholder: "Search...",
                                onChangeText: (event) => event.nativeEvent.text === "" ? cancelHandler() : "",
                                onSearchButtonPress: (event) => searchHandler(event.nativeEvent.text),
                                // onCancelButtonPress/onCloseButtonPress: () => cancelHandler()
                            },
                        }}
                    />
                    <Stak.Screen
                        name='CityDetails'
                        component={CityDetails}
                        options={{
                            title: "Details",
                            headerTitleStyle: {
                                fontSize: 15
                            }
                        }}
                    />
                </Stak.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    logoCtr: {
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "70%",
        height: 40,
        backgroundColor: colors.primary,
        flexDirection: "row",
        // borderEndEndRadius: 70,
        // borderEndStartRadius: 70,
        borderRadius: 40,
        alignSelf: "center"
    },
    logoL: {
        fontSize: 20,
        fontWeight: '900',
        color: colors.textOnPrimary,
    },
    loroR: {
        fontSize: 20,
        fontWeight: '900',
        color: colors.accent
    },
    logoM: {
        fontSize: 16,
        color: colors.textOnPrimary,
        fontWeight: "300"
    }
});
