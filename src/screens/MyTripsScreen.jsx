import { StyleSheet, View } from "react-native";
import colors from "../theme/colors.js";
import ButtonCustom from "../components/buttons/ButtonCustom.jsx";

export default function MyTripsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ButtonCustom
                text="+"
                background={styles.addButton}
                textColor={styles.addButtonText}
                onPress={() => navigation.navigate("ManageTrip")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    addButton: {
        width: 30,
        height: 30,
        backgroundColor: colors.backgroundDarck
    },

    addButtonText: {
        color: colors.primary
    }
})