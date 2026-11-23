import { useEffect, useReducer } from "react"
import { Alert } from "react-native";
import { getErrorMessage } from "../utils/error.util.js";
import { tripsApi } from "../api/index.js";

function stateReducer(state, action) {
    switch(action.type) {
        case "GET_ALL":
            return action.payload;
        case "ADD": 
            return [...state, action.payload[0]];
        case "REMOVE":
            state = state.filter((x) => x.id !== action.id);
            return state;
        default:
            return state;
    };
}

export default function useReduceState() {
    const [data, dispatch] = useReducer(stateReducer, []);

    useEffect(() => {

        (async () => {
            try {
                const tripsData = await tripsApi.getAll();
                dispatch({
                    type: "GET_ALL",
                    payload: tripsData
                });
            } catch (error) {
                Alert.alert(getErrorMessage(error));
            };
        })();

    }, []);

    return { data, dispatch };
};