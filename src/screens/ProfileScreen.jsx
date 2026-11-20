import { View, Text, Image, Pressable, ActivityIndicator, Alert, StyleSheet, Switch } from "react-native";
import ButtonSecondaty from "../components/buttons/ButtonSecondary.jsx";
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext.js";
import AppContext from "../contexts/AppContext.js";
// import colors from "../theme/colors.js";
import StatCard from "../components/stat-card/StatCard.jsx";
import ButtonCustom from "../components/buttons/ButtonCustom.jsx";

export default function ProfileScreen({ navigation }) {
    const { onLogout } = useContext(AuthContext);
    const { isDarkTheme, toggleTheme, theme } = useContext(AppContext);

    const loading = false;
    const stats = { trips: 0, visitedCountries: 0, visitedContinents: 0 };

    function onEditProfile() {
        alert("Edit profile")
    }

    return (
        <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
            <View style={[styles.header, {backgroundColor: theme.colors.backgroundDarck}]}>
                <View style={[styles.avatar, styles.avatarPlaceholder, {backgroundColor: theme.colors.accent}, {borderColor: theme.colors.textOnPrimary}]}>
                    <Text style={[styles.avatarInitials, {color: theme.colors.textOnPrimary}]}>PI</Text>
                </View>
                <Text style={[styles.name, {color: theme.colors.textPrimary}]}>Pesho Ivanov</Text>
                <Text style={[styles.email, {color: theme.colors.textOnSecondary}]}>Pesho@abv.bg</Text>
            </View>

            <View style={styles.statsRow}>
                {loading ? (
                    <View style={[styles.statsLoading, {backgroundColor: theme.colors.surface}]}>
                        <ActivityIndicator size="small" color={theme.colors.accent} />
                    </View>
                ) : (
                    <>
                        <StatCard value={stats.trips} label1="Trips" label2="Counter" />
                        <StatCard value={stats.visitedCountries} label1="Visited" label2="Countries" />
                        <StatCard value={stats.visitedContinents} label1="Visited" label2=" Continents" />
                    </>
                )}
            </View>

            <View style={styles.actions}>
                <Pressable onPress={() => navigation.navigate("MyTrips")}>
                    <Text style={[styles.link, {color: theme.colors.link}]}>Go to my trips</Text>
                </Pressable>

                <ButtonCustom
                    text="Edit profile"
                    background={[styles.filledButton, {backgroundColor: theme.colors.accent}]}
                    textColor={[styles.filledButtonText, {color: theme.colors.textOnPrimary}]}
                    onPress={onEditProfile}
                />

                <ButtonCustom
                    text="Log out"
                    background={[styles.outlineButton, {borderColor: theme.colors.primary}]}
                    textColor={[styles.outlineButtonText, {color: theme.colors.primary}]}
                    onPress={onLogout}
                />

                <Switch
                    value={isDarkTheme}
                    onValueChange={toggleTheme}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        alignItems: 'center',
        paddingTop: 96,
        paddingBottom: 48,
        marginTop: -48
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 48,
        borderWidth: 3,
    },
    avatarPlaceholder: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarInitials: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    name: {
        marginTop: 12,
        fontSize: 22,
        fontWeight: 'bold',
    },
    email: {
        marginTop: 4,
        fontSize: 14,
        opacity: 0.8,
    },
    statsRow: {
        flexDirection: 'row',
        gap: 12,
        marginTop: -28,
        marginHorizontal: 16,
        minHeight: 76,
    },
    statsLoading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    actions: {
        marginTop: 32,
        marginHorizontal: 16,
        gap: 12,
    },
    filledButton: {
        paddingVertical: 14
    },
    filledButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    outlineButton: {
        borderWidth: 2,
        paddingVertical: 14
    },
    outlineButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        textAlign: "center",
        fontSize: 10
    }
})