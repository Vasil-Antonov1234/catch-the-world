import { useContext } from "react";
import useNetInfo from "../../hooks/useNetInfo.js";
import { StyleSheet, View, Text } from "react-native";
import AppContext from "../../contexts/AppContext.js";
import { Icon } from "react-native-paper";

export default function Banner({ text, style = {}, icon = undefined }) {
    const { theme } = useContext(AppContext);

    const { isOffline } = useNetInfo();

    if (!isOffline) {
        return null;
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.error }, style]}>
            <Text style={styles.text}>{text}</Text>
            <Icon source={icon} size={14} color="white" />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.8,
        position: "absolute",
        zIndex: 1,
        width: "100%",
        top: "10%",
        left: "50%",
        transform: [{ translateX: "-50%" }],
        flexDirection: "row",
        gap: 4
    },
    text: {
        color: "white",
        fontSize: 10,
        fontWeight: 700
    }
})