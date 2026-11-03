import { useContext, useState } from "react";
import colors from "../../theme/colors.js";
import { StyleSheet, View, TextInput, Pressable, ScrollView, Text, Keyboard } from "react-native";
import JourneyCard from "../journey-card/JourneyCard.jsx";
import PlaceDetails from "./PlaceDetails.jsx";
import AppContext from "../../contexts/AppContext.js";
import CreatePlace from "../create-place/CreatePlace.jsx";
import BottomBar from "../bottom-bar/BottomBar.jsx";

export default function Home() {
    const { places, searchQuery, setSearchQuery, activePlace, searchPlacesHandler, pressHandler } = useContext(AppContext);
    const [showModal, setShowModal] = useState(false);

    function changeSearchQueryHandler(value) {
        setSearchQuery(value);
    };

    function searchHandler() {
        searchPlacesHandler();
        Keyboard.dismiss();
    };

    function showModalHandler() {
        setShowModal(true);
    };

    function hideModalHandler() {
        setShowModal(false);
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
                    style={({pressed}) => [styles.searchBtn, pressed ? styles.pressed : ""]}
                    onPress={searchHandler}
                >
                    <Text style={styles.searchBtnText}>🔍</Text>
                </Pressable>
            </View>
            <ScrollView contentContainerStyle={styles.containerSecondary}>
                {!activePlace ?
                    places.map((place) => <JourneyCard key={place.id} place={place} press={() => pressHandler(place)} />) : <PlaceDetails place={activePlace} />}
            </ScrollView>
            <CreatePlace visible={showModal} hideModal={hideModalHandler}/>
            <BottomBar showModal={showModalHandler}/>
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
        backgroundColor: colors.transperant,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: colors.surface,
        padding: 7
    },
    pressed: {
        backgroundColor: colors.backgroundDarck,
        transform: [{ scale: 1.10 }]
    },
    searchBtnText: {
        fontSize: 25
    }
})