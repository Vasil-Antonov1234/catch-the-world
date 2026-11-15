import { useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import colors from '../../theme/colors.js';

const MIN_DAYS = 1;
const MAX_DAYS = 60;

function formatDate(date) {
    return date.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function PickDurationModal({ startDate, onConfirm, onCancel }) {
    const [days, setDays] = useState(1);

    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + days - 1);

    return (
        <Modal transparent animationType="fade" onRequestClose={onCancel}>
            <View style={styles.backdrop}>
                <View style={styles.box}>
                    <Text style={styles.title}>How long will you stay?</Text>

                    <View style={styles.stepper}>
                        <Pressable
                            style={styles.stepButton}
                            onPress={() => setDays((d) => Math.max(MIN_DAYS, d - 1))}
                        >
                            <Text style={styles.stepText}>-</Text>
                        </Pressable>
                        <Text style={styles.daysText}>
                            {days} {days === 1 ? 'day' : 'days'}
                        </Text>
                        <Pressable
                            style={styles.stepButton}
                            onPress={() => setDays((d) => Math.min(MAX_DAYS, d + 1))}
                        >
                            <Text style={styles.stepText}>+</Text>
                        </Pressable>
                    </View>

                    <Text style={styles.range}>
                        {formatDate(startDate)} - {formatDate(endDate)}
                    </Text>

                    <View style={styles.buttons}>
                        <Pressable style={styles.cancelButton} onPress={onCancel}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </Pressable>
                        <Pressable style={styles.confirmButton} onPress={() => onConfirm({days, startDate: formatDate(startDate), endDate: formatDate(endDate)})}>
                            <Text style={styles.confirmText}>Plan trip</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    box: {
        width: '100%',
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.textPrimary,
        textAlign: 'center',
    },
    stepper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        marginTop: 20,
    },
    stepButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepText: {
        color: colors.textOnPrimary,
        fontSize: 22,
        fontWeight: 'bold',
    },
    daysText: {
        minWidth: 90,
        textAlign: 'center',
        fontSize: 18,
        color: colors.textPrimary,
    },
    range: {
        marginTop: 16,
        textAlign: 'center',
        fontSize: 14,
        color: colors.textSecondary,
    },
    buttons: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 24,
    },
    cancelButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: colors.primary,
        alignItems: 'center',
    },
    cancelText: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    confirmButton: {
        flex: 1,
        paddingVertical: 14,
        borderRadius: 12,
        backgroundColor: colors.accent,
        alignItems: 'center',
    },
    confirmText: {
        color: colors.textOnPrimary,
        fontWeight: 'bold',
        fontSize: 16,
    },
});