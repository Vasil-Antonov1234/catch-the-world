import { Link } from "@react-navigation/native";
import colors from "../../theme/colors.js";
import { StyleSheet, Text, Pressable } from "react-native";
import { Button } from "@react-navigation/elements";

export default function ButtonSecondaty({ text, background, to }) {

    return (
        <Button screen={to}
            style={styles.btn}
            color={background}
            pressColor={colors.accent}
        >
            <Text style={styles.twxt}>{text}</Text>
        </Button>
    );
}

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    twxt: {
        color: colors.textSecondary,
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