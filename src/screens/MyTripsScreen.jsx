import { Alert, FlatList, StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { tripsApi } from "../api/index.js";
import { getErrorMessage } from "../utils/error.util.js";
import TripCard from "../components/trip-card/TripCard.jsx";
import AppContext from "../contexts/AppContext.js";
import ButtonIcon from "../components/buttons/ButtonIcon.jsx";
import useReduceState from "../hooks/useReduceState.js";

export default function MyTripsScreen({ navigation }) {
    const { theme, data, dispatch } = useContext(AppContext);
    const [refreshing, setRefreshing] = useState(false);

    async function refreshHandler() {
        setRefreshing(true);

        try {
            const tripsData = await tripsApi.getAll();

            dispatch({
                type: "GET_ALL",
                payload: tripsData
            });
        } catch (error) {
            Alert.alert(getErrorMessage(error));
        } finally {
            setRefreshing(false);
        };
    };

    return (
        <>
            <FlatList
                data={data}
                renderItem={({ item }) => <TripCard destination={item} />}
                keyExtractor={(item) => String(item.id)}
                numColumns={2}
                columnWrapperStyle={styles.row}
                style={[styles.list, { backgroundColor: theme.colors.background }]}
                contentContainerStyle={styles.container}
                refreshing={refreshing}
                onRefresh={refreshHandler}
            />
            <View style={styles.buttonWrapper}>
                <ButtonIcon
                    icon="plus"
                    size={70}
                    color={theme.colors.backgroundDarck}
                    mode="contained"
                    onPress={() => navigation.navigate("ManageTrip")}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    },
    container: {
        padding: 24,
        gap: 20
    },
    row: {
        justifyContent: "space-between",
        gap: 20
    },
    buttonWrapper: {
        position: "absolute",
        right: 24,
        bottom: 24
    }
})