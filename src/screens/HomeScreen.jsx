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
            image: require("../../assets/europe.jpg"),
            id: 1
        },
        {
            name: "Africa",
            image: require("../../assets/africa.jpg"),
            id: 2
        },
        {
            name: "Asia",
            image: require("../../assets/asia.jpg"),
            id: 3
        },
        {
            name: "North America",
            image: require("../../assets/northAmerica.jpg"),
            id: 4
        },
        {
            name: "South America",
            image: require("../../assets/southAmerica.jpg"),
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
                {continents.map((c) => <ContinentCard
                    key={c.id}
                    name={c.name}
                    image={c.image}
                    onPress={() => navigation.navigate("CitiesCatalog", { continentName: c.name })}
                />)}
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