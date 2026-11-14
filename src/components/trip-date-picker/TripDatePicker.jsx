import { useState } from 'react';
import { Modal, View, Text, Pressable, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from "../../theme/colors.js";

export default function TripDatePicker({ onConfirm, onCancel }) {
    const [date, setDate] = useState(new Date());

    if (Platform.OS === 'android') {
        return (
            <DateTimePicker
                value={date}
                mode="date"
                minimumDate={new Date()}
                onValueChange={(event, selectedDate) => onConfirm(selectedDate)}
                onDismiss={onCancel}
            />
        );
    }

    return (
        <Modal transparent animationType="slide" onRequestClose={onCancel}>
            <View style={styles.backdrop}>
                <View style={styles.sheet}>
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="spinner"
                        themeVariant="light"
                        minimumDate={new Date()}
                        onValueChange={(event, selectedDate) => setDate(selectedDate)}
                    />
                    <View style={styles.buttons}>
                        <Pressable style={styles.cancelButton} onPress={onCancel}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </Pressable>
                        <Pressable style={styles.confirmButton} onPress={() => onConfirm(date)}>
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
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    sheet: {
        backgroundColor: colors.surface,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
        paddingBottom: 32,
    },
    buttons: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 8,
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