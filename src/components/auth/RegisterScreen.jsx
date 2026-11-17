import { Pressable, View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Platform, Keyboard, ActivityIndicator } from "react-native";
import ButtonPrimary from "../buttons/ButtonPrimary.jsx";
import colors from "../../theme/colors.js";
import { useContext, useState } from "react";
import ButtonCustom from "../buttons/ButtonCustom.jsx";
import AuthContext from "../../contexts/AuthContext.js";

const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

export default function RegisterScreen({ navigation }) {
    const { onRegister, isPending } = useContext(AuthContext);

    const [values, setValues] = useState(initialValues);

    function changeHandler(name, value) {
        setValues(state => ({
            ...state,
            [name]: value
        }));
    };

    async function submitHandler() {

        await onRegister(values.email, values.password, values.fullName);

        Keyboard.dismiss();
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setValues(initialValues);
    }

    return (
        <View>
            {isPending ? <ActivityIndicator size="large" /> : ""}
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "position"} style={styles.container} contentContainerStyle={styles.container}>
                <View style={styles.logoCtr}>
                    <Text style={styles.logoL}>Catch</Text>
                    <Text style={styles.LogoM}>the</Text>
                    <Text style={styles.logoR}>World</Text>
                </View>

                <Text style={styles.loginText}>Create an account</Text>
                <TextInput placeholder="FullName" value={values.fullName} onChangeText={(text) => changeHandler("fullName", text)} style={styles.input} />
                <TextInput placeholder="Email" value={values.email} onChangeText={(text) => changeHandler("email", text)} style={styles.input} />
                <TextInput placeholder="Password" value={values.password} onChangeText={(text) => changeHandler("password", text)} secureTextEntry style={styles.input} />
                <TextInput placeholder="Confirm Password" value={values.confirmPassword} onChangeText={(text) => changeHandler("confirmPassword", text)} secureTextEntry style={styles.input} />
                <ButtonCustom text="Register" background={styles.button} textColor={styles.buttonText} onPress={submitHandler} />
                <Pressable onPress={() => navigation.goBack()}>
                    <Text style={styles.link}>Already have an account? Go to login</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </View>
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
    },
    button: {
        backgroundColor: colors.accent,
        paddingVertical: 14
    },
    buttonText: {
        color: colors.textOnPrimary,
        fontWeight: 700
    }
})