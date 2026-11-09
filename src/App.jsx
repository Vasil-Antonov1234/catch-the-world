import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator.jsx';
import AuthNavigator from './navigation/AuthNavigator.jsx'

export default function App() {

    return (
        <>
            <StatusBar style="dark" animated />
            <NavigationContainer>
                {false ? 
                <RootNavigator /> : <AuthNavigator />
            }
            </NavigationContainer>
        </>
    );
}