import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import colors from "../theme/colors.js";

export default function JourneyCard({ place: {
    id,
    name,
    poster,
    location,
    rating
}, press }) {

    return (
        <Pressable style={styles.container} onPress={() => press({
            id,
            name,
            poster,
            location,
            rating
        })}>
            <View>
                <Text style={styles.title}>{name}</Text>
            </View>
            <View style={styles.containerFit}>
                <Image
                    source={{ uri: poster }}
                    style={styles.poster}
                />
            </View>
            <View style={styles.containerSecondary}>
                <Text style={styles.text}>Location: <Text style={styles.textBold}>{location}</Text></Text>
                <Text style={styles.text}>Rating: <Text style={styles.textBold}>⭐ {rating}/5</Text></Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.surface,
        alignItems: 'flex-start',
        padding: 10,
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: 14,
        overflow: 'hidden',
        marginTop: 20
    },
    poster: {
        width: 300,
        height: 200,
        marginVertical: 10,
        borderRadius: 14
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.textPrimary
    },
    containerSecondary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
        paddingHorizontal: 10
    },
    containerFit: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.textSecondary
    },
    textBold: {
        fontWeight: 700
    }
})