import { Image, View, StyleSheet } from "react-native";
import colors from "../../theme/colors.js";
import ButtonIcon from "../buttons/ButtonIcon.jsx";

export default function ImagePreview({ imageUri, onCancel, onRefresh }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <View style={styles.buttonsCtr}>
                <ButtonIcon
                    icon="delete"
                    mode="contained"
                    onPress={onCancel}
                    color="red"
                    size={20}
                />
                {/* <ButtonIcon
                    icon="refresh"
                    mode="contained"
                    onPress={() => {}}
                    color="green"
                    size={20}
                /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        height: 240,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        minWidth: '100%',
        minHeight: "100%",
        borderRadius: 10,
        backgroundColor: colors.background,
        position: "absolute"
    },
    buttonsCtr: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 10
    }
});