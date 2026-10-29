import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import colors from "../theme/colors.js";

export default function JourneyCard({ place: {
    id,
    name,
    poster,
    location,
    rating,
    description
}, press }) {

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
                    <Text style={styles.text}>🧭<Text style={styles.textBold}>{location}</Text></Text>
                </View>
                <View style={styles.right}>
                    <Pressable
                        style={styles.btn}
                        onPress={() => press({
                            id,
                            name,
                            poster,
                            location,
                            rating,
                            description
                        })}>
                        <Text style={styles.textWhite}>Details</Text>
                    </Pressable>
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
        fontSize: 18,
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
        color: colors.textSecondary
    },
    btn: {
        backgroundColor: colors.accent,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16
    },
    textWhite: {
        color: colors.textOnPrimary,
        fontWeight: 900
    }
})