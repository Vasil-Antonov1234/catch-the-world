import { useContext, useEffect, useState } from "react";
import colors from "../theme/colors.js";
import { StyleSheet, View, TextInput, Pressable, ScrollView, Text, Keyboard, FlatList, Alert } from "react-native";
import JourneyCard from "../components/journey-card/JourneyCard.jsx";
import CityDetailsScreen from "./CityDetailsScreen.jsx";
import AppContext from "../contexts/AppContext.js";
import ButtonIcon from "../components/buttons/ButtonIcon.jsx";
import CreatePlace from "../components/create-place/CreatePlace.jsx";
import { destinationsApi } from "../api/index.js";

export default function CitiesCatalogScreen({ route, navigation }) {
    const { masterCities, setIsEdit, isSearching } = useContext(AppContext);
    const [showModal, setShowModal] = useState(false);
    const [cities, setCities] = useState([]);

    const continentId = route.params.continentId;

    useEffect(() => {

        navigation.setOptions({
            title: route.params.continentName
        });

        (async () => {
            try {
                const citiesData = await destinationsApi.getByContinentId(continentId);
        
                setCities(citiesData);
            } catch (error) {
                Alert.alert(error.message);
            };
        })();

    }, [navigation, route.params.continentName, continentId]);



    function showModalHandler() {
        setShowModal(true);
        setIsEdit(false);
    };

    function hideModalHandler() {
        setShowModal(false);
    };

    return (
        <>
            <FlatList
                data={cities}
                renderItem={({ item }) => <JourneyCard place={item} press={() => { }} />}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.containerSecondary}
                ListHeaderComponent={
                    <View style={styles.addCitie}>
                        <ButtonIcon
                            icon="plus"
                            color={colors.backgroundDarck}
                            mode="contained"
                            size={30}
                            onPress={showModalHandler}
                        />
                    </View>
                }
            />
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
        alignItems: "center",
        marginTop: 10
    }
})