import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { StyleSheet, Text, View } from 'react-native';
import AppContext from "../contexts/AppContext.js";
import colors from '../theme/colors.js';
import HomeScreen from "../screens/HomeScreen.jsx";
import CityDetails from "../screens/CityDetails.jsx";


export default function HomeNavigator() {
    const Stack = createNativeStackNavigator();

    const { searchPlacesHandler, resetSearchHandler, isSearching, setIsSearching } = useContext(AppContext);

    function searchHandler(query) {
        searchPlacesHandler(query);
    };

    function cancelHandler() {
        resetSearchHandler();
    };

    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.LightBlue
                }
            }}
        >
            <Stack.Screen
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

            <Stack.Screen
                name='CityDetails'
                component={CityDetails}
                options={{
                    title: "Details",
                    headerTitleStyle: {
                        fontSize: 15
                    }
                }}
            />

        </Stack.Navigator>
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