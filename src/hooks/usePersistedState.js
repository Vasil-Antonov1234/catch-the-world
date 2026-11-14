import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import * as Haptics from "expo-haptics";

export default function usePersistedState(key, initialValues) {
    const [state, setState] = useState(initialValues);

    useEffect(() => {

        (async() => {
            try {
              const storedState = await AsyncStorage.getItem(key);
              
              if (storedState) {
                setState(JSON.parse(storedState));
              };

            } catch (error) {
                console.log("Fail to load from AsincStorage", error.message);
            };
        })()

    },[key]);

    useEffect(() => {

        (async() => {
            try {
                await AsyncStorage.setItem(key, JSON.stringify(state));

                await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                // await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
                // await Haptics.performAndroidHapticsAsync(Haptics.AndroidHaptics.Keyboard_Press);
            } catch (error) {
                console.log("Fail to save AsyncStorage", error.message);
            };
        })()

    },[key, state]);

    return [state, setState];
}