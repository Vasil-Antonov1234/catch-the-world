import { registerRootComponent } from 'expo';

import App from './App';
import AppContextProvider from './contexts/AppContextProvider.jsx';

function Root() {
    return (
        <AppContextProvider>
            <App />
        </AppContextProvider>
    );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Root);
