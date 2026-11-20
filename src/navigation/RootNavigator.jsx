import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import colors from '../theme/colors.js';
import HomeScreen from "../screens/HomeScreen.jsx";
import WishlistScreen from "../screens/WishlistScreen.jsx";
import { View, Text, StyleSheet } from "react-native";
import HomeNavigator from "./HomeNavigator.jsx";
import ProfileScreen from "../screens/ProfileScreen.jsx";
import { useContext } from "react";
import AppContext from "../contexts/AppContext.js";
import WishListNavigator from "./WishListNavigator.jsx";
import ProfileNavigator from "./ProfileNavigator.jsx";

const Tabs = createBottomTabNavigator();

export default function RootNavigator() {
    const { wishList, theme } = useContext(AppContext);

    return (
        <Tabs.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: theme.colors.LightBlue,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20
            },
            headerTitle: () =>
                <View style={[styles.logoCtr, {backgroundColor: theme.colors.primary}]}>
                    <Text style={[styles.logoL, {color: theme.colors.textOnPrimary}]}>Catch <Text style={[styles.logoM, {color: theme.colors.textOnPrimary}]}>the </Text><Text style={[styles.loroR, {color: theme.colors.accent}]}>World</Text></Text>
                </View>,
            headerTitleAlign: "center",
            // headerTitleContainerStyle: {left: 0, right: 0},
            tabBarStyle: {
                backgroundColor: theme.colors.LightBlue
            },
            tabBarShowLabel: false
        }}>
            <Tabs.Screen
                name="HomeTab"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
                    title: "Home",
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name="WishlistTab"
                component={WishListNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="compass" color={color} size={size} />,
                    title: "Wishlist",
                    tabBarBadge: wishList.length > 0 ? wishList.length : undefined,
                    tabBarBadgeStyle: { backgroundColor: theme.colors.error, fontSize: 7, fontWeight: 700 },
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name="ProfileTab"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
                    tabBarBackground: () => <View style={{ backgroundColor: theme.colors.LightBlue, flex: 1 }} />,
                    title: "Profile",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    headerShown: false
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
        paddingHorizontal: 14,
        borderRadius: 40,
        alignSelf: "center"
    },
    logoL: {
        fontSize: 20,
        fontWeight: '900'
    },
    loroR: {
        fontSize: 20,
        fontWeight: '900'
    },
    logoM: {
        fontSize: 16,
        fontWeight: "300"
    }
});