import { useContext, useEffect, useState } from "react";
import { destinationsApi, tripsApi } from "../api/index.js";
import { View, Text, Image, ScrollView, StyleSheet, Pressable, Alert, Modal } from "react-native";
import colors from "../theme/colors.js";
import ButtonCustom from "../components/buttons/ButtonCustom.jsx";
import TripDatePicker from "../components/trip-date-picker/TripDatePicker.jsx";
import PickDurationModal from "../components/pick-duration-modal/PickDurationModal.jsx";
import AppContext from "../contexts/AppContext.js";
import { getErrorMessage } from "../utils/error.util.js";

export default function AddingDatesScreen({ navigation, route }) {

    const [currentPlace, setCurrentPlace] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);
    const [isShowModal, setIsShowModal] = useState(false);
    const [isShowDurationModal, setIsShowDurationModal] = useState(false);
    const { theme, removeFromWishlist } = useContext(AppContext);

    const placeId = route.params.placeId;
    const wishlistId = route.params.wishlistId;

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

    async function confirmDateHandler({ days, startDate, endDate }) {

        try {
            await tripsApi.create({
                name: currentPlace.name,
                poster: currentPlace.poster,
                location: currentPlace.location,
                description: currentPlace.description,
                rating: currentPlace.rating,
                startdate: startDate,
                enddate: endDate
            });

            setIsShowDurationModal(false);
            removeFromWishlist(wishlistId);
            navigation.goBack();

        } catch (error) {
            Alert.alert(getErrorMessage(error));
        };
    };

    return (
        <ScrollView contentContainerStyle={styles.content}>
            <View>
                <View>
                    <Image source={{ uri: currentPlace.poster }} style={styles.poster} resizeMode="cover" alt='Image' />
                </View>


                <View style={styles.titleRow}>
                    <Text style={[styles.name, { color: theme.colors.textPrimary }]}>{currentPlace.name}</Text>
                    <View style={[styles.ratingBadge, { backgroundColor: theme.colors.accent }]}>
                        <Text style={[styles.ratingText, { color: theme.colors.textOnPrimary }]}>★ {currentPlace.rating}</Text>
                    </View>
                </View>

                <Text style={[styles.location, { color: theme.colors.textSecondary }]}>{currentPlace.location}</Text>
            </View>

            <ButtonCustom
                text="Start date"
                background={[styles.button, { backgroundColor: theme.colors.primary }]}
                textColor={[styles.buttonText, { color: theme.colors.textOnPrimary }]}
                onPress={() => setIsShowModal(true)}
            />
            {isShowModal ? <TripDatePicker onCancel={() => setIsShowModal(false)} onConfirm={setDateHandler} /> : ""}

            {isShowDurationModal ? <PickDurationModal startDate={selectedDate} onCancel={cancelPlanning} onConfirm={confirmDateHandler} /> : ""}

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
        marginRight: 12,
    },
    ratingBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16
    },
    ratingText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    location: {
        marginTop: 6,
        fontSize: 16
    },
    buttonsCtr: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 14
    },
    buttonText: {
        fontWeight: 700
    },
    modal: {
        justifyContent: 'center',
        alignItems: "center"
    }
});