import { View, Text, StyleSheet, FlatList } from "react-native";
import ButtonBig from "../components/buttons/ButtonBig.jsx";
import colors from "../theme/colors.js";
import { useContext } from "react";
import AppContext from "../contexts/AppContext.js";
import WishListCard from "../components/wishlist-card/WishListCard.jsx";

export default function WishlistScreen() {
    const { wishList } = useContext(AppContext);

    return (

        <View>
            <Text style={styles.title}>Wishlist</Text>
            {wishList.length === 0 ?
                <Text style={styles.text}>Your wishlist is empty</Text> :
                <FlatList
                    data={wishList}
                    renderItem={({ item, index }) => <WishListCard place={item} index={index} press={() => { }} />}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginVertical: 20,
        textAlign: 'center'
    },
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
    },
    text: {
        textAlign: "center",
        color: colors.primary
    }
})