import { Alert, Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useContext, useEffect, useState, useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppContext from "../contexts/AppContext.js";
import { destinationsApi, tripsApi } from "../api/index.js";
import { getErrorMessage } from "../utils/error.util.js";
import ButtonIcon from "../components/buttons/ButtonIcon.jsx";

const { width } = Dimensions.get("window");

export default function MyTripsDelailsScreen({ navigation, route }) {
    const { theme } = useContext(AppContext);
    const [currentPlace, setCurrentPlace] = useState({});
    const placeId = route.params.placeId;

    useEffect(() => {

        (async () => {

            try {
                const currentPlaceData = await tripsApi.getById(placeId);

                setCurrentPlace(currentPlaceData);
            } catch (error) {
                Alert.alert(getErrorMessage(error));
            };

        })();

    }, [placeId]);
    
    useFocusEffect(
        useCallback(() => {
            (async () => {
                try {
                    const currentPlaceData = await tripsApi.getById(placeId);
                    setCurrentPlace(currentPlaceData);
                } catch (error) {
                    Alert.alert(getErrorMessage(error));
                };
            })();
        }, [])
    );

    async function deleteTrip() {

        Alert.alert("Delete Trip", "Are you sure you want to delete this trip?", [
            { text: "Cancel", style: "cancel" },
            { text: "OK", onPress: async () => {
                await tripsApi.deleteById(placeId);
                navigation.goBack();
            }}
        ]);
    };

    return (
        <SafeAreaView
            style={[styles.screen, { backgroundColor: theme.colors.surface }]}
            edges={["top", "right", "bottom", "left"]}
        >
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={[styles.card, { backgroundColor: theme.colors.surface, shadowColor: theme.colors.shadowColor }]}>
                    <View style={styles.hero}>
                        <Image source={{ uri: currentPlace?.poster }} style={styles.poster} resizeMode="cover" />
                        <View style={styles.overlay} />

                        <View style={styles.topRow}>
                            <Pressable
                                onPress={() => navigation.goBack()}
                                style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
                            >
                                <Ionicons name="chevron-back" size={22} color="#FFFFFF" />
                            </Pressable>
                        </View>
                    </View>

                    <View style={[styles.details, { backgroundColor: theme.colors.surface }]}>
                        <View>
                            <Text style={[styles.region, { color: theme.colors.primary }]}>{currentPlace.location}</Text>
                            <Text style={[styles.title, { color: theme.colors.textPrimary }]} numberOfLines={1}>{currentPlace.name}</Text>
                        </View>
                        <View>
                            <Text style={[styles.star, { color: theme.colors.backgroundDarck }]}>★ {currentPlace.rating}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.amenitiesRow}>
                    <Amenity icon="calendar" label={currentPlace.startdate} theme={theme} text="start date" />
                    <Amenity icon="calendar-outline" label={currentPlace.enddate} theme={theme} text="end date" />
                </View>
                <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>About this place</Text>
                <Text style={[styles.description, { color: theme.colors.textPrimary }]}>
                    {currentPlace.description || 'No description yet.'}
                </Text>
                <View style={styles.buttonCtr}>
                    <ButtonIcon
                        icon="pen"
                        mode="contained"
                        color={theme.colors.primary}
                        size={24}
                        onPress={() => navigation.navigate("ManageTrip", { tripId: currentPlace.id })}
                    />
                    <ButtonIcon
                        icon="delete"
                        mode="contained"
                        color={theme.colors.error}
                        size={24}
                        onPress={deleteTrip}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

function Amenity({ icon, label, theme, text }) {
    return (
        <View style={[styles.amenity, { backgroundColor: theme.colors.LightBlue }]}>
            <Text style={[styles.amenityText, { color: theme.colors.textSecondary }]}>{text}</Text>
            <Ionicons name={icon} size={20} color={theme.colors.primary} />
            <Text style={[styles.amenityLabel, { color: theme.colors.textPrimary }]}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    content: {
        flexGrow: 1,
        justifyContent: "flex-start",
        paddingHorizontal: 16,
        paddingVertical: 18,
    },
    card: {
        width: Math.min(width - 32, 390),
        alignSelf: "center",
        borderRadius: 28,
        overflow: "hidden",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.16,
        shadowRadius: 14,
        elevation: 7,
    },
    hero: {
        height: 330,
        position: "relative",
        backgroundColor: "#DCE4E7",
    },
    poster: {
        width: "100%",
        height: "100%",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(15, 35, 42, 0.16)",
    },
    topRow: {
        position: "absolute",
        top: 18,
        left: 14,
        right: 14,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconButton: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: "rgba(30, 42, 48, 0.34)",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.12)",
    },
    pressed: {
        opacity: 0.72,
        transform: [{ scale: 0.96 }],
    },
    details: {
        paddingHorizontal: 18,
        paddingVertical: 4,
        marginTop: -18,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    region: {
        textAlign: "center",
        fontSize: 11,
        letterSpacing: 1.4,
        fontWeight: "900",
        marginBottom: 2,
    },
    title: {
        textAlign: "center",
        fontSize: 25,
        lineHeight: 29,
        fontWeight: "900",
        marginBottom: 9,
    },
    amenitiesRow: {
        flexDirection: "row",
        gap: 7,
        marginTop: 20
    },
    amenity: {
        flex: 1,
        borderRadius: 13,
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        padding: 10
    },
    amenityLabel: {
        fontSize: 10,
        fontWeight: "700",
    },
    amenityText: {
        fontSize: 10,
        textTransform: "uppercase"
    },
    description: {
        fontSize: 12,
        lineHeight: 24
    },
    sectionTitle: {
        marginTop: 24,
        marginBottom: 8,
        fontSize: 18,
        fontWeight: '600'
    },
    star: {
        fontSize: 30,
        marginTop: -4,
        fontWeight: 700
    },
    buttonCtr: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
});