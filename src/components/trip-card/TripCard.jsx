import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext.js";

export default function TripCard({
    destination: {
        name,
        poster,
        id,
        location,
        rating
    },
    icon = undefined,
}) {
    const navigation = useNavigation();
    const { theme, wishList, addToWishlist } = useContext(AppContext);

    function pressHandler(id) {
        navigation.navigate("TopDestinationDetails", { placeId: id })
    }

    const isInWishList = !!(wishList.find((x) => id === x.id));

    function addtoWishlistHandler() {
        if (isInWishList) {
            return;
        }
        addToWishlist({ id, name, poster, location, rating });
    }

    return (
        <Pressable style={({ pressed }) => [{ elevation: pressed ? 0 : 5, opacity: pressed ? 0.7 : 1 }, styles.container, { backgroundColor: theme.colors.surface, shadowColor: theme.colors.shadow, borderBlockColor: theme.colors.textPrimary }]} onPress={() => pressHandler(id)}>
            <Image source={{ uri: poster }} style={styles.image} resizeMode="cover" />

            {icon ?
                <Pressable style={[styles.favoriteButton, isInWishList && { backgroundColor: "rgba(255,0,0,0.7)" }]} onPress={addtoWishlistHandler}>
                    <Ionicons name={isInWishList ? icon : `${icon}-outline`} size={18} color="#FFFFFF" />
                </Pressable> : null
            }


            <View style={[styles.detailsCard, { backgroundColor: theme.colors.backgroundDarck }]}>

                <View style={styles.locationRow}>
                    <Ionicons name="location-sharp" size={16} color={theme.colors.textOnPrimary} />
                    <Text style={[styles.title, { color: theme.colors.textOnPrimary }]} numberOfLines={1}>{name}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        aspectRatio: 3.5 / 4,
        borderRadius: 20,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 5,
        position: "relative",
        overflow: "hidden",
        marginRight: 12,
        borderWidth: 0.5,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: "100%",
        height: "100%"
    },
    favoriteButton: {
        position: "absolute",
        top: 14,
        right: 14,
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: "rgba(0,0,0,0.22)",
        justifyContent: "center",
        alignItems: "center"
    },
    detailsCard: {
        position: "absolute",
        left: 10,
        right: 10,
        bottom: 10,
        borderRadius: 16,
        paddingHorizontal: 7,
        paddingVertical: 6
    },
    title: {
        fontSize: 8,
        fontWeight: 700
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginTop: 4
    }
})
