import { registerRootComponent } from 'expo';

import App from './App';
import AppContextProvider from './contexts/AppContextProvider.jsx';
import AuthContextProvider from './contexts/AuthContextProvider.jsx';

function Root() {
    return (
        <AuthContextProvider>
            <AppContextProvider>
                <App />
            </AppContextProvider>
        </AuthContextProvider>
    );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Root);
