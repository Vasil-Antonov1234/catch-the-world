import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator.jsx";
import { Ionicons } from "@expo/vector-icons";
import colors from '../theme/colors.js';
import HomeScreen from "../screens/HomeScreen.jsx";
import TripsScheduleScreen from "../screens/TripsScheduleScreen.jsx";

export default function RootNavigator() {
    const Tabs = createBottomTabNavigator();


    return (
        <Tabs.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: colors.LightBlue
            },
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