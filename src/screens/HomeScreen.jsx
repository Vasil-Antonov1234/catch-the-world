import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import ContinentCard from "../components/continent-card/ContinentCard.jsx";
import colors from "../theme/colors.js";
import TopDestinationCard from "../components/top-destination-card/TopDestinationCard.jsx";
import places from "../../data.json";

export default function HomeScreen({ navigation }) {
    const topDestinations = places.slice(0, 5);

    const continents = [
        {
            name: "Europe",
            image: "https://img.magnific.com/premium-vector/high-quality-grey-map-europe-with-borders-regions_601298-14154.jpg",
            id: 1
        },
        {
            name: "Africa",
            image: "https://img.magnific.com/premium-vector/graphic-vector-africa-countries-map_92497-369.jpg",
            id: 2
        },
        {
            name: "Asia",
            image: "https://img.magnific.com/premium-vector/map-asia-with-countries_842931-1220.jpg",
            id: 3
        },
        {
            name: "North America",
            image: "https://img.magnific.com/premium-vector/north-central-america-map-map-central-north-america-map-grey-color_1091279-3689.jpg",
            id: 4
        },
        {
            name: "South America",
            image: "https://img.magnific.com/premium-vector/map-south-america-with-countries-borders_47243-1658.jpg",
            id: 5
        }
    ]

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Top Destinations</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.topDestinationsContainer}>
                {topDestinations.map((x) => (
                    <TopDestinationCard
                        key={x.id}
                        destination={x}
                    />
                ))}
            </ScrollView>
            <Text style={styles.title}>Area</Text>
            <View style={styles.continentContainer} >
                {continents.map((c) => <ContinentCard key={c.id} name={c.name} image={c.image} onPress={() => navigation.navigate("CitiesCatalog")}/>)}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        padding: 10,
        height: "100%"
    },
    topDestinationsContainer: {
        paddingRight: 4,
        marginBottom: 20
    },
    continentContainer: {
        gap: 10,
        paddingBottom: 40
    },
    title: {
        width: "100%",
        textAlign: "center",
        color: colors.primary,
        fontSize: 12,
        fontWeight: 900,
        marginBottom: 10
    }
})