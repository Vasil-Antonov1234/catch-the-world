import { View, Text, StyleSheet, ScrollView, TextInput, Image, Pressable, KeyboardAvoidingView, Platform, Alert, ActivityIndicator } from 'react-native';
import ButtonCustom from '../components/buttons/ButtonCustom.jsx';
import colors from '../theme/colors.js';
import { useContext, useState } from 'react';
import { Icon } from 'react-native-paper';
import RatingSlider from '../components/rating-slider/RatingSlider.jsx';
import { tripsApi } from '../api/index.js';
import TripDatePicker from '../components/trip-date-picker/TripDatePicker.jsx';
import PickDurationModal from '../components/pick-duration-modal/PickDurationModal.jsx';
import * as ImagePicker from "expo-image-picker";
import ImagePreview from '../components/image-preview/ImagePreview.jsx';
import { File } from 'expo-file-system';
import ButtonIcon from '../components/buttons/ButtonIcon.jsx';
import * as Location from 'expo-location';
import AppContext from '../contexts/AppContext.js';

const posterPlaceholder = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop';

const initialValues = {
    name: "",
    poster: null,
    location: "",
    rating: 0,
    description: "",
    startdate: null,
    enddate: null
};

export default function ManageTripScreen() {

    const [values, setValues] = useState(initialValues);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isShowModal, setIsShowModal] = useState(false);
    const [isShowDurationModal, setIsShowDurationModal] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const { theme } = useContext(AppContext);

    function changeHandler(name, value) {
        setValues(state => ({
            ...state,
            [name]: value
        }));
    };

    function setDateHandler(selectedDate) {
        setIsShowModal(false);
        setSelectedDate(selectedDate);

        setIsShowDurationModal(true);
    };

    function cancelPlanning() {
        setSelectedDate(null);
        setIsShowDurationModal(false);
    };

    function confirmDateHandler({ days, startDate, endDate }) {

        changeHandler("startdate", startDate);
        changeHandler("enddate", endDate);

        setIsShowDurationModal(false);
        setSelectedDate(null);
    };

    async function pickFromGalleryHandler() {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            Alert.alert("Permission to access gallery is required!");
            return;
        };

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (result.canceled) {
            return;
        };

        changeHandler("poster", result.assets[0].uri);

    };

    async function pickFromCameraHandler() {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert('Permission to access the camera is required!');
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (result.canceled) {
            return;
        };

        changeHandler("poster", result.assets[0].uri);
    };

    function cancelImageHandler() {

        changeHandler("poster", null);
    };

    async function useLocationHandler() {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        };

        const location = await Location.getCurrentPositionAsync({});

        const reversedLocation = await Location.reverseGeocodeAsync({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        });

        changeHandler("location", `${reversedLocation[0].country}`);
    };

    async function submitHandler() {
        setIsPending(true);

        let imageUrl = values.poster;

        if (imageUrl) {
            const file = new File(imageUrl);
            const fileName = `${values.name}-${values.startdate}-${Date.now()}.jpg`;

            imageUrl = await tripsApi.uploadImage(file, fileName);
        }

        await tripsApi.create({
            ...values,
            poster: imageUrl
        });
        setValues(initialValues);

        setIsPending(false);
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "padding"} style={{ flex: 1 }}>
            <ScrollView style={[styles.screen, {backgroundColor: theme.colors.background}]} contentContainerStyle={styles.content}>
                <Text style={[styles.title, {color: theme.colors.textPrimary}]}>Create a Trip</Text>
                <Text style={[styles.subtitle, {color: theme.colors.textSecondary}]}>Add the main details for your next destination.</Text>

                <View style={styles.field}>
                    <Text style={[styles.label, {color: theme.colors.textPrimary}]}>Place name</Text>
                    <TextInput
                        style={[styles.input, {backgroundColor: theme.colors.surface, borderColor: theme.colors.LightBlue, color: theme.colors.textPrimary}]}
                        value={values.name}
                        onChangeText={(text) => changeHandler("name", text)}
                        placeholder="Enter trip name"
                        placeholderTextColor="#9CA3AF"
                    />
                </View>
                <View style={styles.field}>
                    <Text style={[styles.label, {color: theme.colors.textPrimary}]}>Poster</Text>
                    <View style={[styles.posterCard, {backgroundColor: theme.colors.surface, borderColor: theme.colors.LightBlue}]}>

                        {/* Image */}
                        <View style={styles.posterCtr}>
                            {values.poster ?
                                <ImagePreview imageUri={values.poster} onCancel={cancelImageHandler} /> :
                                <Icon source="image" size={240} color={theme.colors.backgroundDarck} />}
                        </View>
                        <View style={styles.posterButtonsCtr}>
                            <ButtonCustom
                                text="Camera"
                                background={[styles.posterButton, {backgroundColor: theme.colors.LightBlue}]}
                                textColor={[styles.posterButtonText, {color: theme.colors.primary}]}
                                icon="camera"
                                iconSize={20}
                                iconColor={colors.primary}
                                onPress={pickFromCameraHandler}
                            />
                            <ButtonCustom
                                text="Gallery"
                                background={[styles.posterButton, {backgroundColor: theme.colors.LightBlue}]}
                                textColor={[styles.posterButtonText, {color: theme.colors.primary}]}
                                icon="image"
                                iconSize={20}
                                iconColor={colors.primary}
                                onPress={pickFromGalleryHandler}
                            />
                        </View>
                        <View>
                            <Text style={[styles.text, {color: theme.colors.backgroundDarck}]}>or</Text>
                        </View>
                        <View>
                            <TextInput
                                style={[styles.input, {backgroundColor: theme.colors.surface, borderColor: theme.colors.LightBlue, color: theme.colors.textPrimary}]}
                                value={values.poster}
                                onChangeText={(text) => changeHandler("poster", text)}
                                placeholder="Image URL"
                                placeholderTextColor="#9CA3AF"
                            />
                        </View>
                    </View>
                </View>

                {/* Location */}
                <View style={styles.field}>
                    <Text style={[styles.label, {color: theme.colors.textPrimary}]}>Location</Text>
                    <TextInput
                        style={[styles.input, {backgroundColor: theme.colors.surface, borderColor: theme.colors.LightBlue, color: theme.colors.textPrimary}]}
                        value={values.location}
                        onChangeText={(text) => changeHandler("location", text)}
                        placeholder="Enter location"
                        placeholderTextColor="#9CA3AF"
                    />
                    <View style={styles.setLocationCtr}>
                        <Text style={[styles.text, {color: theme.colors.backgroundDarck}]}>or use my current location</Text>
                        <ButtonIcon
                            icon={{ uri: "https://cdn-icons-png.flaticon.com/512/5654/5654592.png" }}
                            color={theme.colors.primary}
                            mode={"contained"}
                            size={30}
                            onPress={useLocationHandler}
                        />
                    </View>
                </View>

                {/* Rating */}
                <View style={styles.field}>
                    <RatingSlider value={values.rating} onChange={(text) => changeHandler("rating", text)} />
                </View>

                {/* Description */}
                <View style={styles.field}>
                    <Text style={[styles.label, {color: theme.colors.textPrimary}]}>Description</Text>
                    <TextInput
                        style={[styles.input, styles.textArea, {backgroundColor: theme.colors.surface, borderColor: theme.colors.LightBlue, color: theme.colors.textPrimary}]}
                        value={values.description}
                        onChangeText={(text) => changeHandler("description", text)}
                        multiline
                        textAlignVertical="top"
                        placeholder="Enter trip description"
                        placeholderTextColor="#9CA3AF"
                    />
                </View>

                {/* Date */}
                <View style={styles.field}>
                    <Text style={[styles.label, {color: theme.colors.textPrimary}]}>Date</Text>
                    <View style={styles.dateButtonsCtr}>
                        {/* <Icon source={"calendar"} size={40} color={colors.backgroundDarck}/> */}
                        <ButtonCustom
                            text="Set date"
                            background={[styles.posterButton, {backgroundColor: theme.colors.LightBlue}]}
                            textColor={[styles.posterButtonText, {color: theme.colors.primary}]}
                            onPress={() => setIsShowModal(true)}
                            icon="calendar"
                            iconSize={20}
                            iconColor={theme.colors.primary}
                        />
                    </View>
                    {isShowModal ? <TripDatePicker onCancel={() => setIsShowModal(false)} onConfirm={setDateHandler} /> : ""}

                    {isShowDurationModal ? <PickDurationModal startDate={selectedDate} onCancel={cancelPlanning} onConfirm={confirmDateHandler} /> : ""}
                </View>

                <ButtonCustom
                    background={[styles.createButton, {backgroundColor: theme.colors.primary}]}
                    text="Create trip"
                    textColor={[styles.createButtonText, {color: theme.colors.textOnPrimary}]}
                    onPress={submitHandler}
                />

                {isPending ? <ActivityIndicator size={"large"} /> : ""}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    content: {
        padding: 20,
        paddingBottom: 32
    },
    title: {
        fontSize: 28,
        fontWeight: '700'
    },
    subtitle: {
        marginTop: 6,
        marginBottom: 18,
        fontSize: 12
    },
    field: {
        marginBottom: 16
    },
    label: {
        marginBottom: 8,
        fontSize: 14,
        fontWeight: '600'
    },
    input: {
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 15
    },
    textArea: {
        minHeight: 120
    },
    posterCard: {
        borderWidth: 1,
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
        alignItems: 'center',
        paddingHorizontal: 20
    },
    posterButtonText: {
        fontWeight: '600',
        fontSize: 12
    },
    createButton: {
        marginTop: 6,
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center'
    },
    createButtonText: {
        fontSize: 15,
        fontWeight: '700'
    },
    dateButtonsCtr: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    text: {
        fontSize: 12,
        textAlign: "center"
    },
    setLocationCtr: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    }
});