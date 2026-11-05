import { Link } from "@react-navigation/native";
import colors from "../../theme/colors.js";
import { StyleSheet, Text, Pressable } from "react-native";

export default function ButtonSecondaty({ text, pressHandler, background, btnPressed, to }) {

    return (
        <Link screen={to}
            style={styles.link}
            // style={({ pressed }) => [styles.btn, background, pressed ? btnPressed : ""]}
            onPress={pressHandler}>
            <Text style={styles.textWhite}>{text}</Text>
        </Link>
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
        fontSize: 7
    },
    link: {
        backgroundColor: colors.backgroundDarck,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        height: 30
    }
})