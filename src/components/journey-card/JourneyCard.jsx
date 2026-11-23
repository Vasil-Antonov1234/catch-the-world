import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext.js";
import colors from "../../theme/colors.js";
import ButtonSecondaty from "../buttons/ButtonSecondary.jsx";
import ButtonIcon from "../buttons/ButtonIcon.jsx";
import Animated from 'react-native-reanimated';
// import { Icon } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function JourneyCard({ place: {
    id,
    name,
    poster,
    location,
    rating,
    description,
    wantToVisit
},
    press: pressHandler,
    style
}) {
    const { theme, addToWishlist, wishList } = useContext(AppContext);

    const isInWishlist = !!(wishList.find((x) => x.id === id));

    return (
        <>
            <Animated.View style={style}>
                <View style={[styles.container, { backgroundColor: theme.colors.surface, shadowColor: colors.shadowColor }]}>
                    <View style={styles.posterCtr}>
                        <Image
                            source={{ uri: poster }}
                            style={styles.poster}
                        />
                    </View>
                    <View style={styles.containerSecondary}>
                        <View style={styles.containerSecondaryHeader}>
                            <Text style={[styles.title, { color: theme.colors.textPrimary }]}>{name}</Text>
                            <Text style={[styles.textBold, { color: theme.colors.textSecondary }]}>⭐ {rating}/5</Text>
                        </View>
                        <View>
                            <Text style={{ color: theme.colors.textSecondary }}>🧭 <Text style={[styles.textBold, { color: theme.colors.textSecondary }]}>{location}</Text></Text>
                        </View>
                        <View style={styles.containerSecondaryHeader}>
                            <Ionicons name={isInWishlist ? "heart-circle" : "heart-circle-outline"} size={30} color={isInWishlist ? theme.colors.error : theme.colors.backgroundDarck} />
                            <ButtonSecondaty
                                toScreen="TopDestinationDetails"
                                text="Details"
                                background={theme.colors.primary}
                                params={{ placeId: id }}
                            />
                        </View>
                    </View>
                </View>
            </Animated.View>
            <View style={styles.hiddenMenu}>
                <View style={styles.actionContainer}>
                    <ButtonIcon
                        color="white"
                        icon="heart-circle"
                        size={40}
                        onPress={() => addToWishlist({
                            id,
                            name,
                            poster,
                            location,
                            rating,
                            description,
                        })}
                    />
                    <View style={styles.textWrapper}>
                        <Text style={styles.menuText}>Add to</Text>
                        <Text style={styles.menuText}>wishlist</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
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
    hiddenMenu: {
        height: 109,
        width: "99%",
        backgroundColor: "#0B4F6C",
        borderRadius: 15,
        marginTop: 20,
        position: "absolute",
        top: "0%",
        left: "0%",
        zIndex: -1,
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: 10
    },
    actionContainer: {
        alignItems: "center"
    },
    textWrapper: {
        marginTop: -10
    },
    menuText: {
        color: "white",
        fontSize: 8,
        marginTop: -3
    }
})