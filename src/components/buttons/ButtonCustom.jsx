import { Pressable, Text, StyleSheet, View } from "react-native";
import { Icon } from "react-native-paper";

export default function ButtonCustom({ text, textColor, background, onPress, icon = null, iconSize = null }) {
    return (
        <Pressable
            style={({ pressed }) => [styles.container, background, pressed && styles.pressed]}
            onPress={onPress}
        >
            <View style={styles.buttonContentCtr}>
                {icon ? <Icon source={icon} size={iconSize} /> : ""}
                <Text style={textColor}>{text}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.7,
    },
    buttonContentCtr: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    }
})