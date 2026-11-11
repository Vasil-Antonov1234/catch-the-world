import { View, Text, StyleSheet } from "react-native";
import colors from "../../theme/colors.js";

export default function StatCard({ value, label }) {
    return (
        <View style={styles.statCard}>
            <Text style={styles.statValue}>{value}</Text>
            <Text style={styles.statLabel}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    statCard: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 14,
        backgroundColor: colors.surface,
        borderRadius: 12,
        elevation: 3,
        shadowColor: colors.shadowColor,
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
    statValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.primary,
    },
    statLabel: {
        marginTop: 2,
        fontSize: 13,
        color: colors.textSecondary,
    }
})