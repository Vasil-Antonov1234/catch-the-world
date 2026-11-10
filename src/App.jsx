import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator.jsx';
import AuthNavigator from './navigation/AuthNavigator.jsx'
import { useContext } from 'react';
import AuthContext from './contexts/AuthContext.js';

export default function App() {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <>
            <StatusBar style="dark" animated />
            <NavigationContainer>
                {isAuthenticated ? 
                <RootNavigator /> : <AuthNavigator />
            }
            </NavigationContainer>
        </>
    );
}