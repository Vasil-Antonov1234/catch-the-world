import { useEffect, useState } from "react";
import { destinationsApi } from "../api/index.js";
import { View, Text, Image, ScrollView, StyleSheet, Pressable, Alert, Modal } from "react-native";
import colors from "../theme/colors.js";
import ButtonCustom from "../components/buttons/ButtonCustom.jsx";
import TripDatePicker from "../components/trip-date-picker/TripDatePicker.jsx";
import PickDurationModal from "../components/pick-duration-modal/PickDurationModal.jsx";

export default function AddingDatesScreen({ navigation, route }) {

    const [currentPlace, setCurrentPlace] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);
    const [isShowModal, setIsShowModal] = useState(false);
    const [isShowDurationModal, setIsShowDurationModal] = useState(false);

    const placeId = route.params.placeId;


    useEffect(() => {

        (async () => {

            try {
                const currentPlaceData = await destinationsApi.getById(placeId);

                setCurrentPlace(currentPlaceData);
            } catch (error) {
                Alert.alert(error.message);
            };

        })();

    }, [placeId]);

    function setDateHandler(selectedDate) {
        setIsShowModal(false);
        setSelectedDate(selectedDate);
        
        setIsShowDurationModal(true);
    };

    function cancelPlanning() {
        setSelectedDate(null);
        setIsShowDurationModal(false);
    };

    function confirmDateHandler({days, startDate, endDate}) {
        console.log(`Trip from ${startDate} to ${endDate} and duration of ${days}`);
        setIsShowDurationModal(false);
    }

    return (
        <ScrollView contentContainerStyle={styles.content}>
            <View>
                <View>
                    <Image source={{ uri: currentPlace.poster }} style={styles.poster} resizeMode="cover" alt='Image' />
                </View>


                <View style={styles.titleRow}>
                    <Text style={styles.name}>{currentPlace.name}</Text>
                    <View style={styles.ratingBadge}>
                        <Text style={styles.ratingText}>★ {currentPlace.rating}</Text>
                    </View>
                </View>

                <Text style={styles.location}>{currentPlace.location}</Text>
            </View>

            <ButtonCustom
                text="Start date"
                background={styles.button}
                textColor={styles.buttonText}
                onPress={() => setIsShowModal(true)}
            />
            {isShowModal ? <TripDatePicker onCancel={() => setIsShowModal(false)} onConfirm={setDateHandler} /> : ""}

            {isShowDurationModal ? <PickDurationModal startDate={selectedDate} onCancel={cancelPlanning} onConfirm={confirmDateHandler}/> : ""}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingBottom: 24,
        paddingHorizontal: 10,
        paddingTop: 10,
        justifyContent: "space-between",
        height: "90%"
    },
    poster: {
        width: '100%',
        height: 340,
        borderRadius: 15,
        position: "absolute"
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 350
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginRight: 12,
    },
    ratingBadge: {
        backgroundColor: colors.accent,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16
    },
    ratingText: {
        color: colors.textOnPrimary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    location: {
        marginTop: 6,
        fontSize: 16,
        color: colors.textSecondary,
    },
    buttonsCtr: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 14
    },
    buttonText: {
        color: colors.textOnPrimary,
        fontWeight: 700
    },
    modal: {
        justifyContent: 'center',
        alignItems: "center"
    }
});