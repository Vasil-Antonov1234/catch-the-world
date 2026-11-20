import { createStackNavigator } from "@react-navigation/stack";
import WishlistScreen from "../screens/WishlistScreen.jsx";
import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import AppContext from "../contexts/AppContext.js";
import colors from "../theme/colors.js";
import AddingDatesScreen from "../screens/AddingDatesScreen.jsx";

const Stack = createStackNavigator();

export default function WishListNavigator() {
    const { theme } = useContext(AppContext);

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="WishList"
                component={WishlistScreen}
                options={{
                    headerTitle: () =>
                        <View style={[styles.logoCtr, { backgroundColor: theme.colors.primary }]}>
                            <Text style={[styles.logoL, { color: theme.colors.textOnPrimary }]}>Catch <Text style={[styles.logoM, { color: theme.colors.textOnPrimary }]}>the </Text><Text style={[styles.loroR, { color: theme.colors.logo }]}>World</Text></Text>
                        </View>,
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: theme.colors.LightBlue,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }
                }}
            />

            <Stack.Screen
                name="WishListDetails"
                component={AddingDatesScreen}
                options={{
                    title: "Details",
                    headerTitleStyle: {
                        fontSize: 15
                    },
                    headerStyle: {
                        backgroundColor: theme.colors.LightBlue,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    },
                }}
            />
        </Stack.Navigator>
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
        fontWeight: '900',
    },
    loroR: {
        fontSize: 20,
        fontWeight: '900',
    },
    logoM: {
        fontSize: 16,
        fontWeight: "300"
    }
});