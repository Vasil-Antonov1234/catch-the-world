import { View, Text, ScrollView, Pressable, StyleSheet, Image } from "react-native";
import colors from "../../theme/colors.js";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext.js";

export default function ContinentCard({ name, image, onPress }) {
    const { theme } = useContext(AppContext);
    
    return (
        <Pressable style={({ pressed }) => [{ elevation: pressed ? 0 : 3, opacity: pressed ? 0.7 : 1 }, styles.container, { backgroundColor: theme.colors.textOnPrimary }]} onPress={onPress}>
            <Text style={[styles.title, {color: theme.colors.textSecondary}]}>{name}</Text>
            <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // elevation: 3
    },
    title: {
        fontSize: 20,
        fontWeight: 900,
        padding: 10,
        flex: 1,
        textAlign: "center"
    },
    image: {
        width: 100,
        height: 100,
        flex: 2,
        marginRight: "4%"
    }
})
