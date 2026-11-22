import { View, Text, ScrollView, Pressable, StyleSheet, Alert, RefreshControl } from "react-native";
import ContinentCard from "../components/continent-card/ContinentCard.jsx";
import { useEffect, useState } from "react";
import { continentApi, destinationsApi } from "../api/index.js";
import { useContext } from "react";
import AppContext from "../contexts/AppContext.js";
import TripCard from "../components/trip-card/TripCard.jsx";

export default function HomeScreen({ navigation }) {
    const [continents, setContinents] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [topDestinations, setTopDestinations] = useState([]);
    const { theme, isDarkTheme } = useContext(AppContext);

    useEffect(() => {

        (async () => {
            try {
                const continentsData = await continentApi.getAll();
                setContinents(continentsData);

                const topDestinationsData = await destinationsApi.getTopDestinations();
                setTopDestinations(topDestinationsData);
            } catch (error) {
                Alert.alert("Error", error.message);
            };

        })()

    }, []);

    async function refreshHandler() {
        setRefreshing(true);

        try {
            const continentData = await continentApi.getAll();
            const topDestinationsData = await destinationsApi.getTopDestinations();

            setContinents(continentData);
            setTopDestinations(topDestinationsData);
        } catch (error) {
            Alert.alert("Error", error.message)
        } finally {
            setRefreshing(false);
        };
    };

    return (
        <ScrollView
            style={[styles.container, {backgroundColor: theme.colors.background}]}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />}
        >
            {topDestinations.length ?
                <>
                    <Text style={[styles.title, {color: theme.colors.primary}]}>Top Destinations</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.topDestinationsContainer}>
                        {topDestinations.map((x) => (
                            <TripCard
                                key={x.id}
                                destination={x}
                                icon="heart"
                                goTo="TopDestinationDetails"
                            />
                        ))}
                    </ScrollView>
                </> : ""
            }
            <Text style={[styles.title, {color: theme.colors.primary}]}>Area</Text>
            <View style={styles.continentContainer} >
                {continents.map((c) => <ContinentCard
                    key={c.id}
                    name={c.name}
                    image={isDarkTheme ? c.image_black : c.image}
                    onPress={() => navigation.navigate("CitiesCatalog", { continentName: c.name, continentId: c.id })}
                />)}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: "100%"
    },
    topDestinationsContainer: {
        paddingRight: 4,
        marginBottom: 20,
        gap: 20
    },
    continentContainer: {
        gap: 10,
        paddingBottom: 40
    },
    title: {
        width: "100%",
        textAlign: "center",
        fontSize: 12,
        fontWeight: 900,
        marginBottom: 10
    }
})
