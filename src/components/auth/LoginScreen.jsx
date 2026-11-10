import { Pressable, View, Text, StyleSheet, TextInput, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import colors from "../../theme/colors.js";
import { useState } from "react";
import ButtonPrimary from "../buttons/ButtonPrimary.jsx";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submitHandler() {
        alert(`email: ${email}, password: ${password}`);
        Keyboard.dismiss();
        setEmail("");
        setPassword("");
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "position"} style={styles.container} contentContainerStyle={styles.container}>
            <View style={styles.logoCtr}>
                <Text style={styles.logoL}>Catch</Text>
                <Text style={styles.LogoM}>the</Text>
                <Text style={styles.logoR}>World</Text>
            </View>
            
            <Text style={styles.loginText}>Login to continue</Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input}/>
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input}/>
            <ButtonPrimary text="Login" mode="contained" icon="key" onPress={submitHandler}/>
            <Pressable onPress={() => navigation.navigate("Register")}>
                <Text style={styles.link}>Don't have an account? Go to register</Text>
            </Pressable>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        height: "100%",
        backgroundColor: colors.background,
        gap: 20,
        justifyContent: "center"
    },
    input: {
        padding: 10,
        borderRadius: 15,
        borderColor: colors.textSecondary,
        borderWidth: 1,
        backgroundColor: colors.surface
    },
    link: {
        textAlign: "center",
        color: "blue",
        fontSize: 10
    },
    loginText: {
        textAlign: "center",
        color: colors.textPrimary,
        fontSize: 10,
        marginBottom: 20,
        marginTop: -20
    },
    logoCtr: {
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        alignItems: "baseline"
    },
    logoL: {
        fontSize: 50,
        fontWeight: 900,
        color: colors.primary
    },
    LogoM: {
        color: colors.textPrimary
    },
    logoR: {
        fontSize: 50,
        fontWeight: 900,
        color: colors.accent
    }
})