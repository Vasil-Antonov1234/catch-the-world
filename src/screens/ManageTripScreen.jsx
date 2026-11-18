// import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, Pressable } from 'react-native';

const posterPlaceholder = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop';

export default function ManageTripScreen() {
    return (
        <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
            <Text style={styles.title}>Create a Trip</Text>
            <Text style={styles.subtitle}>Add the main details for your next destination.</Text>

            <View style={styles.field}>
                <Text style={styles.label}>Trip name</Text>
                <TextInput
                    style={styles.input}
                    value="Summer in Lisbon"
                    editable={false}
                    placeholder="Enter trip name"
                    placeholderTextColor="#9CA3AF"
                />
            </View>

            <View style={styles.field}>
                <Text style={styles.label}>Poster</Text>
                <View style={styles.posterCard}>
                    <Image source={{ uri: posterPlaceholder }} style={styles.posterImage} />
                    <Pressable style={styles.posterButton}>
                        <Text style={styles.posterButtonText}>Choose poster</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.field}>
                <Text style={styles.label}>Location</Text>
                <TextInput
                    style={styles.input}
                    value="Lisbon, Portugal"
                    editable={false}
                    placeholder="Enter location"
                    placeholderTextColor="#9CA3AF"
                />
            </View>

            <View style={styles.field}>
                <Text style={styles.label}>Rating</Text>
                <View style={styles.ratingRow}>
                    <Text style={styles.ratingStars}>★★★★☆</Text>
                    <Text style={styles.ratingValue}>4.0 / 5</Text>
                </View>
            </View>

            <View style={styles.field}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    value="A sunny city break with historic neighborhoods, ocean views, and amazing food."
                    editable={false}
                    multiline
                    textAlignVertical="top"
                    placeholder="Enter trip description"
                    placeholderTextColor="#9CA3AF"
                />
            </View>

            <Pressable style={styles.createButton}>
                <Text style={styles.createButtonText}>Create trip</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F8FAFC',
    },
    content: {
        padding: 20,
        paddingBottom: 32,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#0F172A',
    },
    subtitle: {
        marginTop: 6,
        marginBottom: 18,
        fontSize: 14,
        color: '#64748B',
    },
    field: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 8,
        fontSize: 14,
        fontWeight: '600',
        color: '#1E293B',
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 15,
        color: '#0F172A',
    },
    textArea: {
        minHeight: 120,
    },
    posterCard: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 12,
        padding: 10,
    },
    posterImage: {
        width: '100%',
        height: 170,
        borderRadius: 10,
        backgroundColor: '#E2E8F0',
    },
    posterButton: {
        marginTop: 10,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#EEF2FF',
        alignItems: 'center',
    },
    posterButtonText: {
        color: '#3730A3',
        fontWeight: '600',
        fontSize: 14,
    },
    ratingRow: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ratingStars: {
        fontSize: 18,
        letterSpacing: 1,
        color: '#F59E0B',
    },
    ratingValue: {
        fontSize: 14,
        fontWeight: '600',
        color: '#334155',
    },
    createButton: {
        marginTop: 6,
        backgroundColor: '#0F172A',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
    },
    createButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
    },
});