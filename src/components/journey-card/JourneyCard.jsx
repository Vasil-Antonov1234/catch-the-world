import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext.js";
import colors from "../../theme/colors.js";
import ButtonSecondaty from "../buttons/ButtonSecondary.jsx";
import ButtonIcon from "../buttons/ButtonIcon.jsx";
import Animated from 'react-native-reanimated';

export default function JourneyCard({ place: {
    id,
    name,
    poster,
    location,
    rating,
    description,
    wantToVisit
},
    press: pressHandler,
    style
}) {
    const { theme } = useContext(AppContext);

    function wantToVisitHandler() {
        alert(`I want to visit ${name}`);
    };

    return (
        <Animated.View style={style}>
            <View style={[styles.container, { backgroundColor: theme.colors.surface, shadowColor: colors.shadowColor }]}>
                <View style={styles.posterCtr}>
                    <Image
                        source={{ uri: poster }}
                        style={styles.poster}
                    />
                </View>
                <View style={styles.containerSecondary}>
                    <View style={styles.containerSecondaryHeader}>
                        <Text style={[styles.title, { color: theme.colors.textPrimary }]}>{name}</Text>
                        <Text style={[styles.textBold, { color: theme.colors.textSecondary }]}>⭐ {rating}/5</Text>
                    </View>
                    <View>
                        <Text style={{ color: theme.colors.textSecondary }}>🧭 <Text style={[styles.textBold, { color: theme.colors.textSecondary }]}>{location}</Text></Text>
                    </View>
                    <View style={styles.containerSecondaryHeader}>
                        <ButtonIcon
                            placeId={id}
                            onPress={wantToVisitHandler}
                            icon="airplane"
                            wantToVisit={wantToVisit}
                            mode="default"
                            size={20}
                        />
                        <ButtonSecondaty
                            toScreen="TopDestinationDetails"
                            text="Details"
                            background={theme.colors.primary}
                            params={{ placeId: id }}
                        />
                    </View>
                </View>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 5,
        borderRadius: 15,
        marginTop: 20,
        height: 110,
        gap: 10,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 3,
        alignSelf: "center"
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
        fontSize: 10,
        fontWeight: 'bold',
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
    textBold: {
        fontWeight: 700,
        fontSize: 10
    }
})