import { Pressable, Text, StyleSheet } from "react-native";

export default function ButtonBig({ text, textColor, background, onPress }) {
    return (
        <Pressable
            style={({ pressed }) => [background, pressed && styles.pressed]}
            onPress={onPress}
        >
            <Text style={textColor}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    }
})