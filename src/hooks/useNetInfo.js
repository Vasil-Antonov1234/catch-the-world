import NetInfo from '@react-native-community/netinfo';
import { useState, useEffect } from 'react';

export default function useNetInfo() {
    const [netInfo, setNetInfo] = useState(null);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setNetInfo(state);
        });
        return () => unsubscribe();
    }, []);

    const isOffline = netInfo ? !netInfo.isConnected || !netInfo.isInternetReachable : false;
    
    return { isOffline };
}