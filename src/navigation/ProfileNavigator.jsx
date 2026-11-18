import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen.jsx";
import MyTripsScreen from "../screens/MyTripsScreen.jsx";
import ManageTripScreen from "../screens/ManageTripScreen.jsx";
import colors from "../theme/colors.js";
import { View, Text, StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default function ProfileNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
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
                name="MyTrips"
                component={MyTripsScreen}
                options={{

                }}
            />

            <Stack.Screen
                name="ManageTrip"
                component={ManageTripScreen}
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
})