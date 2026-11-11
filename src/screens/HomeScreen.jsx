import { View, Text, ScrollView, Pressable, StyleSheet, Alert, RefreshControl } from "react-native";
import ContinentCard from "../components/continent-card/ContinentCard.jsx";
import colors from "../theme/colors.js";
import TopDestinationCard from "../components/top-destination-card/TopDestinationCard.jsx";
import places from "../../data.json";
import { useEffect, useState } from "react";
import { continentApi } from "../api/index.js";

export default function HomeScreen({ navigation }) {
    const [continents, setContinents] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const topDestinations = places.slice(0, 5);

    useEffect(() => {

        (async () => {
            try {
                const continentsData = await continentApi.getAll();

                setContinents(continentsData);
            } catch (error) {
                Alert.alert(error.message);
            };

        })()

    }, []);

    async function refreshHandler() {
        setRefreshing(true);

        try {
            const contonentData = await continentApi.getAll();

            setContinents(contonentData);
        } catch (error) {
            Alert.alert(error.message)
        } finally {
            setRefreshing(false);
        };
    };

    return (
        <ScrollView
            style={styles.container}
            refreshControl={<RefreshControl refreshing={false} onRefresh={refreshHandler} />}
        >
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