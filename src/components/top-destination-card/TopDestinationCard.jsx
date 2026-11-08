import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import colors from "../../theme/colors.js";
import { useNavigation } from "@react-navigation/native";

export default function TopDestinationCard({
    destination: {
        name,
        poster,
        id
    },
}) {
    const navigation = useNavigation();

    function pressHandler(id) {
        navigation.navigate("TopDestinationDetails", { placeId: id })
    }

    return (
        <Pressable style={styles.container} onPress={() => pressHandler(id)}>
            <Image source={{ uri: poster }} style={styles.image} resizeMode="cover" />

            <Pressable style={styles.favoriteButton} onPress={() => {}}>
                <Ionicons name={"heart-outline"} size={18} color="#FFFFFF" />
            </Pressable>

            <View style={styles.detailsCard}>

                <View style={styles.locationRow}>
                    <Ionicons name="location-sharp" size={16} color={colors.textSecondary} />
                    <Text style={styles.title} numberOfLines={1}>{name}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.surface,
        width: 150,
        aspectRatio: 3.5 / 4,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 5,
        position: "relative",
        overflow: "hidden",
        marginRight: 12
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
        backgroundColor: "rgba(255,255,255,0.9)",
        borderRadius: 16,
        paddingHorizontal: 7,
        paddingVertical: 6
    },
    title: {
        fontSize: 8,
        fontWeight: 700,
        color: colors.textPrimary
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginTop: 4
    },
    locationText: {
        color: colors.textSecondary,
        fontSize: 10,
        fontWeight: 500
    },
    footerRow: {
        marginTop: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    distanceText: {
        color: colors.textSecondary,
        fontSize: 8,
        fontWeight: 300
    },
    routeButton: {
        backgroundColor: "#52A1FF",
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 6
    },
    routeButtonText: {
        color: colors.textOnPrimary,
        fontWeight: 600,
        fontSize: 8
    }
})