import { View, Text, Image, Pressable, ActivityIndicator, Alert, StyleSheet } from "react-native";
import ButtonSecondaty from "../components/buttons/ButtonSecondary.jsx";
import ButtonPrimary from "../components/buttons/ButtonPrimary.jsx";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext.js";
import colors from "../theme/colors.js";
import StatCard from "../components/stat-card/StatCard.jsx";
import ButtonBig from "../components/buttons/ButtonBig.jsx";

export default function ProfileScreen() {
    const { onLogout } = useContext(AuthContext);

    const loading = false;
    const stats = { trips: 0, visitedCountries: 0, visitedContinents: 0 };

    function onEditProfile() {
        alert("Edit profile")
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={[styles.avatar, styles.avatarPlaceholder]}>
                    <Text style={styles.avatarInitials}>PI</Text>
                </View>
                <Text style={styles.name}>Pesho Ivanov</Text>
                <Text style={styles.email}>Pesho@abv.bg</Text>
            </View>

            <View style={styles.statsRow}>
                {loading ? (
                    <View style={styles.statsLoading}>
                        <ActivityIndicator size="small" color={colors.accent} />
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

                <ButtonBig
                    text="Edit profile"
                    background={styles.filledButton}
                    textColor={styles.filledButtonText}
                    onPress={onEditProfile}
                />

                <ButtonBig
                    text="Log out"
                    background={styles.outlineButton}
                    textColor={styles.outlineButtonText}
                    onPress={onLogout}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        paddingTop: 48,
        paddingBottom: 48,
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 48,
        borderWidth: 3,
        borderColor: colors.surface,
    },
    avatarPlaceholder: {
        backgroundColor: colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarInitials: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.textOnPrimary,
    },
    name: {
        marginTop: 12,
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.textOnPrimary,
    },
    email: {
        marginTop: 4,
        fontSize: 14,
        color: colors.textOnPrimary,
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
        backgroundColor: colors.surface,
        borderRadius: 12,
    },
    actions: {
        marginTop: 32,
        marginHorizontal: 16,
        gap: 12,
    },
    filledButton: {
        backgroundColor: colors.accent
    },
    filledButtonText: {
        color: colors.textOnPrimary,
        fontSize: 16,
        fontWeight: 'bold',
    },
    outlineButton: {
        borderWidth: 2,
        borderColor: colors.primary
    },
    outlineButtonText: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
    }
})