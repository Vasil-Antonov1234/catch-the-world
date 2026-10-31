import { useContext } from "react";
import colors from "../theme/colors";
import { StyleSheet, View, TextInput, Pressable, ScrollView, Text, Keyboard } from "react-native";
import JourneyCard from "./JourneyCard.jsx";
import PlaceDetails from "./PlaceDetails.jsx";
import AppContext from "../contexts/AppContext.js";

export default function Home() {
    const { places, searchQuery, setSearchQuery, activePlace, setActivePlace, searchPlacesHandler } = useContext(AppContext);

    function pressHandler(place) {
        setActivePlace(place);
    };

    function changeSearchQueryHandler(value) {
        setSearchQuery(value);
    };

    function searchHandler() {
        searchPlacesHandler();
        Keyboard.dismiss();
    };

    return (
        <>
            <View style={styles.searchCtr}>
                <TextInput
                    style={styles.search}
                    placeholder='Search'
                    value={searchQuery}
                    onChangeText={changeSearchQueryHandler}
                    onSubmitEditing={searchHandler}
                />
                <Pressable
                    style={styles.searchBtn}
                    onPress={searchHandler}
                >
                    <Text style={styles.searchBtnText}>🔍</Text>
                </Pressable>
            </View>
            <ScrollView contentContainerStyle={styles.containerSecondary}>
                {activePlace ? "" : <Text style={styles.title}>Journal</Text>}
                {!activePlace ?
                    places.map((place) => <JourneyCard key={place.id} place={place} press={pressHandler} />) : <PlaceDetails place={activePlace} press={pressHandler} />}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    containerSecondary: {
        paddingHorizontal: 20,
        alignSelf: "stretch"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    searchCtr: {
        width: "90%",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 10,
    },
    search: {
        flex: 8,
        backgroundColor: colors.surface,
        padding: 10,
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: colors.textSecondary,
        fontSize: 20
    },
    searchBtn: {
        flex: 1,
        backgroundColor: colors.backgroundDarck,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: colors.surface,
        padding: 7
    },
    searchBtnText: {
        fontSize: 25
    }
})