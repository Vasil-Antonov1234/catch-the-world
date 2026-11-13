import { View, Text, StyleSheet } from "react-native";
import ButtonBig from "../components/buttons/ButtonBig.jsx";
import colors from "../theme/colors.js";
import { useContext } from "react";
import AppContext from "../contexts/AppContext.js";

export default function TripsScheduleScreen() {
    const { wishList } = useContext(AppContext);

    return (

        <View>
            <Text>Your trips schedule</Text>
            <View style={styles.buttonCtr}>
                <ButtonBig text="Show wishlist" background={styles.button} textColor={styles.buttonText} onPress={() => console.log(wishList)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.LightBlue,
    },
    buttonText: {
        color: colors.textPrimary,
        fontWeight: 700
    },
    buttonCtr: {
        marginTop: 30,
        paddingHorizontal: 40
    }
})