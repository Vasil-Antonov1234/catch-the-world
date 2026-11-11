import { View, Text, StyleSheet } from "react-native";
import colors from "../../theme/colors.js";

export default function StatCard({ value, label1, label2 }) {
    return (
        <View style={styles.statCard}>
            <Text style={styles.statLabel}>{label1}</Text>
            <Text style={styles.statValue}>{value}</Text>
            <Text style={styles.statLabel}>{label2}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    statCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        backgroundColor: colors.surface,
        borderRadius: 12,
        elevation: 4,
        shadowColor: colors.shadowColor,
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
    statValue: {
        fontSize: 24,
        fontWeight: 900,
        color: colors.primary,
    },
    statLabel: {
        fontSize: 10,
        color: colors.textSecondary,
        textAlign: 'center'
    }
})