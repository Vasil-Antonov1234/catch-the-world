import { View, Text, Image, ScrollView, StyleSheet, Pressable } from 'react-native';
import colors from "../theme/colors.js";

export default function PlaceDetails({ place: {
    poster,
    name,
    location,
    rating,
    description
}, press }) {

    return (
        <ScrollView contentContainerStyle={styles.content}>
            <Pressable onPress={() => press(null)}>
                <Text style={styles.backButton}>⬅️</Text>
            </Pressable>
            <View>
                <Image source={{ uri: poster }} style={styles.poster} resizeMode="cover" />
            </View>


            <View style={styles.titleRow}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.ratingBadge}>
                    <Text style={styles.ratingText}>★ {rating}</Text>
                </View>
            </View>

            <Text style={styles.location}>{location}</Text>

            <Text style={styles.sectionTitle}>About this place</Text>
            <Text style={styles.description}>
                {description || 'No description yet.'}
            </Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingBottom: 24
    },
    poster: {
        width: '100%',
        height: 340,
        borderRadius: 15
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginRight: 12,
    },
    ratingBadge: {
        backgroundColor: colors.accent,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16
    },
    backButton: {
        fontSize: 24,
        marginBottom: 5
    },
    ratingText: {
        color: colors.textOnPrimary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    location: {
        marginTop: 6,
        fontSize: 16,
        color: colors.textSecondary,
    },
    sectionTitle: {
        marginTop: 24,
        marginBottom: 8,
        fontSize: 18,
        fontWeight: '600',
        color: colors.primary,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.textPrimary,
    },
});