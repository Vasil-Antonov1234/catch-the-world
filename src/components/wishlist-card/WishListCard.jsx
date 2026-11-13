import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import colors from "../../theme/colors.js";
import ButtonSecondaty from "../buttons/ButtonSecondary.jsx";
import ButtonIcon from "../buttons/ButtonIcon.jsx";
import ButtonBig from "../buttons/ButtonBig.jsx";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext.js";

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

    function wantToVisitHandler() {
        alert(`I want to visit ${name}`);
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
                    <ButtonBig
                        text="Remove"
                        background={styles.button}
                        textColor={styles.buttonText}
                        onPress={() => removeFromWishlist(index)}
                    />

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.surface,
        flexDirection: "row",
        padding: 5,
        borderRadius: 15,
        marginTop: 20,
        height: 110,
        gap: 10
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
        justifyContent: "flex-end"
    }
})