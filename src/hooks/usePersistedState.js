import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

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
                await AsyncStorage.setItem(key, JSON.stringify(state))
            } catch (error) {
                console.log("Fail to save AsyncStorage", error.message);
            };
        })()

    },[key, state]);

    return [state, setState];
}