import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen.jsx";
import CityDetailsScreen from "../screens/CityDetailsScreen.jsx";
import CitiesCatalogScreen from "../screens/CitiesCatalogScreen.jsx";
import colors from "../theme/colors.js";
// import { useContext } from "react";
// import AppContext from "../contexts/AppContext.js";
import { View, Text, StyleSheet, Keyboard } from "react-native";


export default function HomeNavigator() {
    const Stack = createStackNavigator();

    // const { searchPlacesHandler, resetSearchHandler, isSearching, setIsSearching } = useContext(AppContext);

    function searchHandler(query) {
        alert(query)
    };

    function cancelHandler() {
        Keyboard.dismiss();
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: () =>
                        <View style={styles.logoCtr}>
                            <Text style={styles.logoL}>Catch <Text style={styles.logoM}>the </Text><Text style={styles.loroR}>World</Text></Text>
                        </View>,
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: colors.LightBlue,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }
                }}
            />

            <Stack.Screen
                name="TopDestinationDetails"
                component={CityDetailsScreen}
                options={{
                    title: "Details",
                    headerTitleStyle: {
                        fontSize: 15
                    },
                    headerStyle: {
                        backgroundColor: colors.LightBlue,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }
                }}
            />

            <Stack.Screen
                name='CitiesCatalog'
                component={CitiesCatalogScreen}
                options={{
                    headerSearchBarOptions: {
                        headerIconColor: "black",
                        barTintColor: colors.surface,
                        placeholder: "Search...",
                        onChangeText: (event) => event.nativeEvent.text === "" ? cancelHandler() : "",
                        onSubmitEditing: (event) => searchHandler(event.nativeEvent.text),
                        // onCancelButtonPress/onCloseButtonPress: () => cancelHandler()
                    },
                    title: "Explore Cities",
                    headerStyle: {
                        backgroundColor: colors.LightBlue,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }
                }}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    logoCtr: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 40,
        backgroundColor: colors.primary,
        paddingHorizontal: 14,
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