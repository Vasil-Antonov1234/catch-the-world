import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
    const { removeFromWishlist, theme } = useContext(AppContext);

    const navigation = useNavigation();

    function navigateToDetails() {
        navigation.navigate("WishListDetails", { placeId: id, index });
    }

    function wantToVisitHandler() {
        alert(`I want to visit ${name}`);
    };

    return (
        <View style={[styles.container, {backgroundColor: theme.colors.surface, shadowColor: theme.colors.shadowColor}]}>
            <View style={styles.posterCtr}>
                <Image
                    source={{ uri: poster }}
                    style={styles.poster}
                />
            </View>
            <View style={styles.containerSecondary}>
                <View style={styles.containerSecondaryHeader}>
                    <Text style={[styles.title, {color: theme.colors.textPrimary}]}>{name}</Text>
                    <Text style={[styles.textBold, {color: theme.colors.textSecondary}]}>⭐ {rating}/5</Text>
                </View>
                <View>
                    <Text style={{color: theme.colors.textSecondary}}>🧭 <Text style={[styles.textBold, {color: theme.colors.textSecondary}]}>{location}</Text></Text>
                </View>
                <View style={styles.buttonCtr}>
                    <ButtonCustom
                        text="Plan"
                        background={[styles.buttonDate, {backgroundColor: theme.colors.primary}]}
                        textColor={[styles.buttonDateText, {color: theme.colors.textOnPrimary}]}
                        onPress={navigateToDetails}
                    />
                    <ButtonCustom
                        text="Remove"
                        background={styles.button}
                        textColor={[styles.buttonText, {color: theme.colors.error}]}
                        onPress={() => removeFromWishlist(index)}
                    />
                </View>
            </View>            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "99%",
        flexDirection: "row",
        padding: 5,
        borderRadius: 15,
        marginTop: 20,
        height: 110,
        gap: 10,
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
    textBold: {
        fontWeight: 700,
        fontSize: 10
    },
    button: {
        padding: 10
    },
    buttonText: {
        fontSize: 10,
        textTransform: "lowercase"
    },
    buttonCtr: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 7
    },
    buttonDate: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: "80%"
    },
    buttonDateText: {
        fontSize: 10
    }
})