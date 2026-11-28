import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext.js";
import colors from "../../theme/colors.js";
import ButtonSecondaty from "../buttons/ButtonSecondary.jsx";
import ButtonIcon from "../buttons/ButtonIcon.jsx";
import Animated from 'react-native-reanimated';
// import { Icon } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function JourneyCard({ place: {
    id,
    name,
    poster,
    location,
    rating,
    description,
    wishlistId
},
    pressHandler = () => {},
    onHiddenButtonPress = () => {},
    style = {},
    icon = "",
    hiddenMenuStyle = {},
    iconLabel = "press"
}) {
    const { theme, addToWishlist, wishList } = useContext(AppContext);
    const navigation = useNavigation();

    const isInWishlist = !!(wishList.find((x) => x.id === id));

    return (
        <>
            <Animated.View style={style}>
                <Pressable
                    style={({ pressed }) => [{ elevation: pressed ? 0 : 3 }, styles.container, { backgroundColor: theme.colors.surface, shadowColor: colors.shadowColor }]}
                    onPress={() => pressHandler(id, wishlistId)}
                >
                    <View style={styles.posterCtr}>
                        <Image
                            source={{ uri: poster }}
                            style={styles.poster}
                        />
                    </View>
                    <View style={styles.containerSecondary}>
                        <View style={styles.containerSecondaryHeader}>
                            <Text style={[styles.title, { color: theme.colors.textPrimary }]}>{name}</Text>
                            <View style={styles.ratingCtr}>
                                <Ionicons name="star" color={theme.colors.golden} size={14}/>
                                <Text style={[styles.textBold, { color: theme.colors.textSecondary }]}>{rating}/5</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.locationCtr}>
                                <Ionicons name="location" color={theme.colors.backgroundDarck} size={30} />
                                <Text style={[styles.textBold, { color: theme.colors.textSecondary }]}>{location}</Text>
                            </View>
                        </View>
                        <View style={styles.containerSecondaryFavoritre}>
                            {isInWishlist ? <Ionicons name={"heart-circle"} size={30} color={theme.colors.error} /> : ""}
                        </View>
                    </View>
                </Pressable>
            </Animated.View>
            <View style={[styles.hiddenMenu, hiddenMenuStyle ]}>
                <View style={styles.actionContainer}>
                    <ButtonIcon
                        color="white"
                        icon={icon}
                        size={40}
                        onPress={() => onHiddenButtonPress({
                            id,
                            name,
                            poster,
                            location,
                            rating,
                            description,
                            wishlistId
                        })}
                    />
                    <View style={styles.textWrapper}>
                        <Text style={styles.menuText}>{iconLabel}</Text>
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
        alignSelf: "center"
    },
    posterCtr: {
        width: "60%",
        height: "100%",
    },
    poster: {
        width: "100%",
        height: "100%",
        borderRadius: 14,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        flexShrink: 1
    },
    containerSecondary: {
        flex: 1,
        height: "95%",
        alignSelf: "flex-end",
        justifyContent: "flex-start",
        gap: 5
    },
    containerSecondaryHeader: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    containerSecondaryFavoritre: {
        paddingTop: 3
    },
    right: {
        alignSelf: "flex-end"
    },
    textBold: {
        fontWeight: 700,
        fontSize: 12
    },
    hiddenMenu: {
        height: 109,
        width: "99%",
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
        marginTop: -10,
        alignItems: "center"
    },
    menuText: {
        color: "white",
        fontSize: 8,
        marginTop: -3
    },
    locationCtr: {
        flexDirection: "row",
        alignItems: "flex-end",
    },
    ratingCtr: {
        flexDirection: "row",
        gap: 3
    }
})