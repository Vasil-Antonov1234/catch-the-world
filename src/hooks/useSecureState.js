import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from "react";
import * as Haptics from "expo-haptics";

export default function useSecureState(key, initialValues) {
    const [state, setState] = useState(initialValues);

    useEffect(() => {

        (async() => {
            try {
              const storedState = await SecureStore.getItemAsync(key);
              
              if (storedState) {
                setState(JSON.parse(storedState));
              };

            } catch (error) {
                console.log("Fail to load from SecureStore", error);
            };
        })()

    },[key]);

    useEffect(() => {

        (async() => {
            try {
                await SecureStore.setItemAsync(key, JSON.stringify(state));

                await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                // await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
                // await Haptics.performAndroidHapticsAsync(Haptics.AndroidHaptics.Keyboard_Press);
            } catch (error) {
                console.log("Fail to save SecureStore", error);
            };
        })()

    },[key, state]);

    return [state, setState];
}