import { useContext, useEffect, useState } from "react";
import colors from "../theme/colors.js";
import { StyleSheet, View, TextInput, Pressable, ScrollView, Text, Keyboard } from "react-native";
import JourneyCard from "../components/journey-card/JourneyCard.jsx";
import CityDetailsScreen from "./CityDetailsScreen.jsx";
import AppContext from "../contexts/AppContext.js";
import ButtonIcon from "../components/buttons/ButtonIcon.jsx";
import CreatePlace from "../components/create-place/CreatePlace.jsx";

export default function CitiesCatalogScreen({ route, navigation }) {
    const { cities, masterCities, setIsEdit, isSearching } = useContext(AppContext);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        
        navigation.setOptions({
            title: route.params.continentName
        });

    }, [navigation, route.params.continentName]);



    function showModalHandler() {
        setShowModal(true);
        setIsEdit(false);
    };

    function hideModalHandler() {
        setShowModal(false);
    };

    return (
        <>
            <ScrollView contentContainerStyle={styles.containerSecondary}>
                {isSearching ? cities.map((city) => <JourneyCard key={city.id} place={city} press={() => { }} />) :
                    masterCities.map((city) => <JourneyCard key={city.id} place={city} press={() => { }} />)}
                <View style={styles.addCitie}>
                    <ButtonIcon
                        icon="plus"
                        color={colors.backgroundDarck}
                        mode="contained"
                        size={30}
                        onPress={showModalHandler}
                    />
                </View>
            </ScrollView>
            <CreatePlace visible={showModal} hideModal={hideModalHandler} />
        </>
    );
}

const styles = StyleSheet.create({
    containerSecondary: {
        paddingHorizontal: 20,
        alignSelf: "stretch",
        paddingBottom: 10
    },
    searchCtr: {
        width: "90%",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 10,
        marginTop: 10
    },
    search: {
        flex: 8,
        backgroundColor: colors.surface,
        padding: 10,
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: colors.textSecondary,
        fontSize: 10
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
        fontSize: 10
    },
    addCitie: {
        alignItems: "flex-end",
        marginTop: 10
    }
})