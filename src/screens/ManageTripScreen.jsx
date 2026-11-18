// import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import ButtonCustom from '../components/buttons/ButtonCustom.jsx';
import colors from '../theme/colors.js';
import { useState } from 'react';
import { Icon } from 'react-native-paper';
import RatingSlider from '../components/rating-slider/RatingSlider.jsx';

const posterPlaceholder = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop';

export default function ManageTripScreen() {
    const initialValues = {
        name: "",
        poster: "",
        location: "",
        rating: 0,
        description: ""
    };

    const [values, setValues] = useState(initialValues);

    function changeHandler(name, value) {
        setValues(state => ({
            ...state,
            [name]: value
        }));
    };

    function submitHandler() {
        console.log(values);
        setValues(initialValues);
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "padding"} style={{ flex: 1 }}>
            <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
                <Text style={styles.title}>Create a Trip</Text>
                <Text style={styles.subtitle}>Add the main details for your next destination.</Text>

                <View style={styles.field}>
                    <Text style={styles.label}>Place name</Text>
                    <TextInput
                        style={styles.input}
                        value={values.name}
                        onChangeText={(text) => changeHandler("name", text)}
                        placeholder="Enter trip name"
                        placeholderTextColor="#9CA3AF"
                    />
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Poster</Text>
                    <View style={styles.posterCard}>
                        {/* Image Preview */}
                        <View style={styles.posterCtr}>
                            {values.poster ? <Image source={{ uri: posterPlaceholder }} style={styles.posterImage} /> : <Icon source="image" size={240} color={colors.backgroundDarck} />}
                        </View>
                        <View style={styles.posterButtonsCtr}>
                            <ButtonCustom
                                text="Camera"
                                background={styles.posterButton}
                                textColor={styles.posterButtonText}
                                icon="camera"
                                iconSize={20}
                            />
                            <ButtonCustom
                                text="Gallery"
                                background={styles.posterButton}
                                textColor={styles.posterButtonText}
                                icon="image"
                                iconSize={20}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Location</Text>
                    <TextInput
                        style={styles.input}
                        value={values.location}
                        onChangeText={(text) => changeHandler("location", text)}
                        placeholder="Enter location"
                        placeholderTextColor="#9CA3AF"
                    />
                </View>

                <View style={styles.field}>
                    <RatingSlider value={values.rating} onChange={(text) => changeHandler("rating", text)} />
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={values.description}
                        onChangeText={(text) => changeHandler("description", text)}
                        multiline
                        textAlignVertical="top"
                        placeholder="Enter trip description"
                        placeholderTextColor="#9CA3AF"
                    />
                </View>

                <ButtonCustom
                    background={styles.createButton}
                    text="Create trip"
                    textColor={styles.createButtonText}
                    onPress={submitHandler}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background
    },
    content: {
        padding: 20,
        paddingBottom: 32
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: colors.textPrimary
    },
    subtitle: {
        marginTop: 6,
        marginBottom: 18,
        fontSize: 12,
        color: colors.textSecondary
    },
    field: {
        marginBottom: 16
    },
    label: {
        marginBottom: 8,
        fontSize: 14,
        fontWeight: '600',
        color: colors.textPrimary
    },
    input: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.LightBlue,
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 15,
        color: colors.textPrimary
    },
    textArea: {
        minHeight: 120
    },
    posterCard: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.LightBlue,
        borderRadius: 12,
        padding: 10
    },
    posterCtr: {
        position: "relative",
        width: "100%",
        height: 240,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    },
    posterImage: {
        minWidth: '100%',
        minHeight: "100%",
        borderRadius: 10,
        backgroundColor: colors.background,
        position: "absolute"
    },
    posterButtonsCtr: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    posterButton: {
        marginTop: 10,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: colors.LightBlue,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    posterButtonText: {
        color: colors.primary,
        fontWeight: '600',
        fontSize: 12
    },
    createButton: {
        marginTop: 6,
        backgroundColor: colors.primary,
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center'
    },
    createButtonText: {
        color: colors.textOnPrimary,
        fontSize: 15,
        fontWeight: '700'
    }
});