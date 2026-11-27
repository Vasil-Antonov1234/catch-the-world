import { View, Text, StyleSheet, FlatList } from "react-native";
import ButtonCustom from "../components/buttons/ButtonCustom.jsx";
import colors from "../theme/colors.js";
import { useContext } from "react";
import AppContext from "../contexts/AppContext.js";
import WishListCard from "../components/wishlist-card/WishListCard.jsx";
import SwipeablePlaceCard from "../components/SwipablePlace/SwipeablePlaceCard.jsx";

export default function WishlistScreen({ navigation }) {
    const { wishList } = useContext(AppContext);

    function selectDates(id, wishlistId) {
                
        navigation.navigate("WishListDetails", { placeId: id, wishlistId });
    }

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Wishlist</Text>
            {wishList.length === 0 ?
                <Text style={styles.text}>Your wishlist is empty</Text> :
                <FlatList
                    data={wishList}
                    renderItem={({ item, index }) => <SwipeablePlaceCard place={item} index={index} press={selectDates} />}
                    showsVerticalScrollIndicator={false}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
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