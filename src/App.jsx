import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator.jsx';

export default function App() {

    return (
        <>
            <StatusBar style="dark" animated />
            <NavigationContainer>
                <RootNavigator />              
            </NavigationContainer>
        </>
    );
}