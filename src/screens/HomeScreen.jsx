import { useContext, useState } from "react";
import colors from "../theme/colors.js";
import { StyleSheet, View, TextInput, Pressable, ScrollView, Text, Keyboard } from "react-native";
import JourneyCard from "../components/journey-card/JourneyCard.jsx";
import CityDetails from "./CityDetails.jsx";
import AppContext from "../contexts/AppContext.js";
import ButtonIcon from "../components/buttons/ButtonIcon.jsx";
import CreatePlace from "../components/create-place/CreatePlace.jsx";
// import BottomBar from "../components/bottom-bar/BottomBar.jsx";

export default function HomeScreen({ route }) {
    const { cities, masterCities, setIsEdit, isSearching } = useContext(AppContext);
    const [showModal, setShowModal] = useState(false);

    function showModalHandler() {
        setShowModal(true);
        setIsEdit(false);
    };

    function hideModalHandler() {
        setShowModal(false);
    };

    return (
        <>
            {/* <View style={styles.searchCtr}>
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
            </View> */}
            <ScrollView contentContainerStyle={styles.containerSecondary}>
                {isSearching ? cities.map((city) => <JourneyCard key={city.id} place={city} press={() => { }} />) : masterCities.map((city) => <JourneyCard key={city.id} place={city} press={() => { }} />)}
                {/* <Pressable style={styles.addCitie}>
                        <Text>+</Text>
                    </Pressable> */}
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
            <CreatePlace visible={showModal} hideModal={hideModalHandler}/>
            {/* <BottomBar showModal={showModalHandler}/> */}
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