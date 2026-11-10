import { View, Text } from "react-native";
import ButtonSecondaty from "../components/buttons/ButtonSecondary.jsx";
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext.js";

export default function ProfileScreen() {
    const { onLogout } = useContext(AuthContext);

    return (
        <View>
            <Text>Profile</Text>
            <ButtonPrimary text="Logout" mode="contained" icon="logout" onPress={onLogout}/>
        </View>
    );
}