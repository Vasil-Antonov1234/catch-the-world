import { createStackNavigator } from "@react-navigation/stack";
import WishlistScreen from "../screens/WishlistScreen.jsx";
import { View, Text, StyleSheet } from "react-native";
import colors from "../theme/colors.js";
import AddingDatesScreen from "../screens/AddingDatesScreen.jsx";

const Stack = createStackNavigator();

export default function WishListNavigator() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="WishList"
                component={WishlistScreen}
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
                name="WishListDetails"
                component={AddingDatesScreen}
                options={{
                    title: "Details",
                    headerTitleStyle: {
                        fontSize: 15
                    },
                    headerStyle: {
                        backgroundColor: colors.LightBlue,
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
});