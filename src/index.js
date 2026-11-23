import { registerRootComponent } from 'expo';

import App from './App';
import AppContextProvider from './contexts/AppContextProvider.jsx';
import AuthContextProvider from './contexts/AuthContextProvider.jsx';
import { GestureHandlerRootView } from "react-native-gesture-handler"

function Root() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <AppContextProvider>
                <AuthContextProvider>
                    <App />
                </AuthContextProvider>
            </AppContextProvider>
        </GestureHandlerRootView>
    );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Root);
