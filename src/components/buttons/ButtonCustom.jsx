import { Pressable, Text, StyleSheet } from "react-native";

export default function ButtonCustom({ text, textColor, background, onPress }) {
    return (
        <Pressable
            style={({ pressed }) => [styles.container, background, pressed && styles.pressed]}
            onPress={onPress}
        >
            <Text style={textColor}>{text}</Text>
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
    }
})