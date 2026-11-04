import colors from "../../theme/colors.js";
import { StyleSheet, Text, Pressable } from "react-native";

export default function ButtonSecondaty({ text, pressHandler, background, btnPressed }) {

    return (
        <Pressable
            style={({ pressed }) => [styles.btn, background, pressed ? btnPressed : ""]}
            onPress={pressHandler}>
            <Text style={styles.textWhite}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 16,
        width: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    textWhite: {
        color: colors.textOnPrimary,
        fontWeight: 900,
        fontSize: 10
    }
})