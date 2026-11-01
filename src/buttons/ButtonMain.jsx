import { useContext } from "react";
import colors from "../theme/colors.js";
import { StyleSheet, Pressable, Text } from "react-native";
import AppContext from "../contexts/AppContext.js";

export default function ButtonMain({text}) {
    const { pressHandler } = useContext(AppContext);

    return (
        <Pressable onPress={() => pressHandler(null)} style={({ pressed }) => [styles.buttonCtr, pressed ? styles.pressed : ""]}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonCtr: {
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: colors.transperant,
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    buttonText: {
        fontSize: 24,
        color: colors.accent
    },
    pressed: {
        backgroundColor: colors.backgroundDarck,
        transform: [{ scale: 1.10 }]
    }
})