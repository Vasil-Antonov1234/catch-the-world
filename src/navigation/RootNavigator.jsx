import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator.jsx";
import { Ionicons } from "@expo/vector-icons";

export default function RootNavigator() {
    const Tabs = createBottomTabNavigator();

    return (
        <Tabs.Navigator>
            <Tabs.Screen 
                name="HomeTab"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size}/>
                }}
            />
        </Tabs.Navigator>
    );
}