import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator.jsx";
import { Ionicons } from "@expo/vector-icons";
import colors from '../theme/colors.js';
import HomeScreen from "../screens/HomeScreen.jsx";
import TripsScheduleScreen from "../screens/TripsScheduleScreen.jsx";
import { View, Text, StyleSheet } from "react-native";

export default function RootNavigator() {
    const Tabs = createBottomTabNavigator();


    return (
        <Tabs.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: colors.LightBlue,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20
            },
            headerTitle: () =>
                <View style={styles.logoCtr}>
                    <Text style={styles.logoL}>Catch <Text style={styles.logoM}>the </Text><Text style={styles.loroR}>World</Text></Text>
                </View>,
            headerTitleAlign: "center",
            // headerTitleContainerStyle: {left: 0, right: 0},
            tabBarStyle: {
                backgroundColor: colors.LightBlue
            },
            tabBarShowLabel: false
        }}>
            <Tabs.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
                    title: "Home"
                }}
            />

            <Tabs.Screen
                name="CitiesCatalogTab"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="briefcase" color={color} size={size} />,
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name="TripsSchedule"
                component={TripsScheduleScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="compass" color={color} size={size} />,
                    title: "Your trips schedule"
                }}
            />
        </Tabs.Navigator>
    );
}

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