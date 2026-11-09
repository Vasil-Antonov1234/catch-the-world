import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../components/auth/LoginScreen.jsx";
import RegisterScreen from "../components/auth/RegisterScreen.jsx";
import colors from "../theme/colors.js";

export default function AuthNavigator() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.LightBlue,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }
            }}
        >
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    title: "Login",
                    headerTitleStyle: {
                        fontSize: 15
                    }
                }}
            />

            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    title: "Register",
                    headerTitleStyle: {
                        fontSize: 15
                    }
                }}
            />
        </Stack.Navigator>
    );
}