import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import colors from "../../theme/colors.js";
import ButtonSecondaty from "../buttons/ButtonSecondary.jsx";
import ButtonIcon from "../buttons/ButtonIcon.jsx";
import ButtonCustom from "../buttons/ButtonCustom.jsx";
import { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext.js";
import TripDatePicker from "../trip-date-picker/TripDatePicker.jsx";

export default function WishListCard({ place: {
    id,
    name,
    poster,
    location,
    rating,
    description,
    wantToVisit
},
    index,
    press: pressHandler }) {
    const { removeFromWishlist } = useContext(AppContext);
    const [isShowModal, setIsShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    function wantToVisitHandler() {
        alert(`I want to visit ${name}`);
    };

    function planDatesHandler(selectedDate) {
        setIsShowModal(false);
        setSelectedDate(selectedDate);

        alert(selectedDate)
    };

    return (
        <View style={styles.container}>
            <View style={styles.posterCtr}>
                <Image
                    source={{ uri: poster }}
                    style={styles.poster}
                />
            </View>
            <View style={styles.containerSecondary}>
                <View style={styles.containerSecondaryHeader}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.textBold}>⭐ {rating}/5</Text>
                </View>
                <View>
                    <Text style={styles.text}>🧭 <Text style={styles.textBold}>{location}</Text></Text>
                </View>
                <View style={styles.buttonCtr}>
                    <ButtonCustom
                        text="Plan"
                        background={styles.buttonDate}
                        textColor={styles.buttonDateText}
                        onPress={() => setIsShowModal(true)}
                    />
                    <ButtonCustom
                        text="Remove"
                        background={styles.button}
                        textColor={styles.buttonText}
                        onPress={() => removeFromWishlist(index)}
                    />
                </View>
            </View>
            {/* <DateTimePickerModal
                isVisible={showModal}
                mode="date"
                minimumDate={new Date()}
                onConfirm={planDatesHandler}
                onCancel={() => setShowModal(false)}
            /> */}

            { isShowModal ? <TripDatePicker onCancel={() => setIsShowModal(false)} onConfirm={planDatesHandler}/> : ""}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "99%",
        backgroundColor: colors.surface,
        flexDirection: "row",
        padding: 5,
        borderRadius: 15,
        marginTop: 20,
        height: 110,
        gap: 10,
        shadowColor: colors.shadowColor,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 3,
        alignSelf: "center"
    },
    posterCtr: {
        width: "40%",
        height: "100%",
    },
    poster: {
        width: "100%",
        height: "100%",
        borderRadius: 14,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
    },
    title: {
        fontSize: 10,
        fontWeight: 'bold',
        color: colors.textPrimary,
        flexShrink: 1
    },
    containerSecondary: {
        flex: 1,
        height: "95%",
        alignSelf: "flex-end",
        justifyContent: "space-around"
    },
    containerSecondaryHeader: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    right: {
        alignSelf: "flex-end"
    },
    text: {
        color: colors.textSecondary
    },
    textBold: {
        fontWeight: 700,
        color: colors.textSecondary,
        fontSize: 10
    },
    button: {
        padding: 10
    },
    buttonText: {
        color: colors.error,
        fontSize: 10,
        textTransform: "lowercase"
    },
    buttonCtr: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 7
    },
    buttonDate: {
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: "80%"
    },
    buttonDateText: {
        color: colors.textOnPrimary,
        fontSize: 10
    }
})