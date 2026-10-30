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
            <View>
                <Image source={{ uri: poster }} style={styles.poster} resizeMode="cover" />
            <Pressable onPress={() => press(null)} style={styles.backButtonCtr}>
                <Text style={styles.backButton}>❮</Text>
            </Pressable>
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

            <ScrollView contentContainerStyle={styles.gallery} horizontal>
                <Image style={styles.image} source={{ uri: "https://cdn.getyourguide.com/image/format=avif%2Cfit=cover%2Cgravity=auto%2Cquality=60/dam/iStock-1855850613-2-Header%20Mobile.jpg"}}/>
                <Image style={styles.image} source={{ uri: "https://visitasevilla.es/en/wp-content/uploads/sites/2/2026/03/royal-alcazar-of-seville.jpg"}}/>
                <Image style={styles.image} source={{ uri: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=375%2Cheight=375%2Cdpr=2/tour_img/2aa009310af5c647b65b19c4359626cdeea853694cf3f10a8b9139522264d33c.jpg"}}/>
                <Image style={styles.image} source={{ uri: "https://www.r1hotels.com/data/fotos/1459356203_1127092828.jpg"}}/>
                <Image style={styles.image} source={{ uri: "https://media.istockphoto.com/id/537383379/photo/plaza-del-triunfo-in-seville-spain.jpg?s=612x612&w=0&k=20&c=caBGrjo_4uBveh-3-dvNqXWWjsTbqXB-JLJdUiTC1Kw="}}/>
            </ScrollView>
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
        borderRadius: 15,
        position: "absolute"
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 350
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
    backButtonCtr: {
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: colors.transperant,
        width: 40,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    backButton: {
        fontSize: 34,
        color: colors.accent
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
    gallery: {
        height: 100,
        marginTop: 10,
        padding: 10,
        flexDirection: "row",
        gap: 10
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 15,
        borderStyle: "solid",
        borderColor: colors.textOnPrimary,
        borderWidth: 1,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.29)"
    }
});