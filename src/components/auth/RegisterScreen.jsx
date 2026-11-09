import { Pressable, View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Platform, Keyboard } from "react-native";
import ButtonPrimary from "../buttons/ButtonPrimary.jsx";
import colors from "../../theme/colors.js";
import { useState } from "react";

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function submitHandler() {
        alert(`email: ${email}, password: ${password}`);
        Keyboard.dismiss();
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return (
        <View>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
                <View style={styles.logoCtr}>
                    <Text style={styles.logoL}>Catch</Text>
                    <Text style={styles.LogoM}>the</Text>
                    <Text style={styles.logoR}>World</Text>
                </View>

                <Text style={styles.loginText}>Create an account</Text>
                <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
                <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
                <TextInput placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry style={styles.input} />
                <ButtonPrimary text="Register" mode="contained" icon="key" onPress={submitHandler} />
                <Pressable onPress={() => navigation.goBack()}>
                    <Text style={styles.link}>Already have an account? Go to login</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
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