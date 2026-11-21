import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator.jsx';
import AuthNavigator from './navigation/AuthNavigator.jsx'
import { useContext } from 'react';
import AuthContext from './contexts/AuthContext.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppContext from './contexts/AppContext.js';
import Banner from './components/banner/Banner.jsx';

export default function App() {
    const { isAuthenticated } = useContext(AuthContext);
    const { theme, isDarkTheme } = useContext(AppContext);

    return (
        <SafeAreaProvider>
            <StatusBar style={isDarkTheme ? "light" : "dark"} animated />
            <NavigationContainer theme={theme} >
                <Banner text="DISCONNECTED" icon="connection"/>
                {isAuthenticated ?
                    <RootNavigator /> : <AuthNavigator />
                }
            </NavigationContainer>
        </SafeAreaProvider>
    );
}