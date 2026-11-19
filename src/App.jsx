import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator.jsx';
import AuthNavigator from './navigation/AuthNavigator.jsx'
import { useContext } from 'react';
import AuthContext from './contexts/AuthContext.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppContext from './contexts/AppContext.js';

export default function App() {
    const { isAuthenticated } = useContext(AuthContext);
    const { theme } = useContext(AppContext);

    return (
        <SafeAreaProvider>
            <StatusBar style="dark" animated />
            <NavigationContainer theme={theme}>
                {isAuthenticated ?
                    <RootNavigator /> : <AuthNavigator />
                }
            </NavigationContainer>
        </SafeAreaProvider>
    );
}