import { View, Text, StyleSheet } from "react-native";
import colors from "../../theme/colors.js";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext.js";

export default function StatCard({ value, label1, label2 }) {
    const { theme } = useContext(AppContext);
    
    return (
        <View style={[styles.statCard, {backgroundColor: theme.colors.surface}]}>
            <Text style={[styles.statLabel, {color: theme.colors.textSecondary}]}>{label1}</Text>
            <Text style={[styles.statValue, {color: theme.colors.primary}]}>{value}</Text>
            <Text style={[styles.statLabel, {color: theme.colors.textSecondary}]}>{label2}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    statCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        borderRadius: 12,
        elevation: 4,
        shadowColor: colors.shadowColor,
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
    statValue: {
        fontSize: 24,
        fontWeight: 900
    },
    statLabel: {
        fontSize: 10,
        textAlign: 'center'
    }
})
