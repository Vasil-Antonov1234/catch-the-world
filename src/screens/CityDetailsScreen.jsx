import { View, Text, Image, ScrollView, StyleSheet, Pressable, Modal, Alert } from 'react-native';
import colors from "../theme/colors.js";
import { useContext, useEffect, useState } from 'react';
import ButtonSecondaty from '../components/buttons/ButtonSecondary.jsx';
import ButtonIcon from '../components/buttons/ButtonIcon.jsx';
import AppContext from '../contexts/AppContext.js';
import CreatePlace from '../components/create-place/CreatePlace.jsx';
import { destinationsApi } from '../api/index.js';

export default function CityDetailsScreen({ navigation, route }) {
    const [showImageModal, setShowImageModal] = useState("");
    const { deletePlaceHandler, setIsEdit, cities, masterCities } = useContext(AppContext);
    const [showEditPlace, setShowEditPlace] = useState(false);
    const [currentPlace, setCurrentPlace] = useState({});
    const placeId = route.params.placeId;

    useEffect(() => {

        (async() => {
            
            try {
                const currentPlaceData = await destinationsApi.getById(placeId);

                setCurrentPlace(currentPlaceData);
            } catch (error) {
                Alert.alert(error.message);
            };

        })();

    }, [placeId]);

    function closeEditPlaceHandler() {
        setShowEditPlace(false);
    };

    function editHandler() {
        setShowEditPlace(true);
        setIsEdit(true);
    };

    function deleteHandler() {
        deletePlaceHandler(placeId);
        navigation.goBack();
    };

    return (
        <ScrollView contentContainerStyle={styles.content}>
            <View>
                <Image source={{ uri: currentPlace.poster }} style={styles.poster} resizeMode="cover" alt='Image'/>
            </View>


            <View style={styles.titleRow}>
                <Text style={styles.name}>{currentPlace.name}</Text>
                <View style={styles.ratingBadge}>
                    <Text style={styles.ratingText}>★ {currentPlace.rating}</Text>
                </View>
            </View>

            <Text style={styles.location}>{currentPlace.location}</Text>

            <Text style={styles.sectionTitle}>About this place</Text>
            <Text style={styles.description}>
                {currentPlace.description || 'No description yet.'}
            </Text>

            <ScrollView contentContainerStyle={styles.gallery} horizontal>
                <Pressable onPress={() => setShowImageModal("https://cdn.getyourguide.com/image/format=avif%2Cfit=cover%2Cgravity=auto%2Cquality=60/dam/iStock-1855850613-2-Header%20Mobile.jpg")}>
                    <Image style={styles.image} source={{ uri: "https://cdn.getyourguide.com/image/format=avif%2Cfit=cover%2Cgravity=auto%2Cquality=60/dam/iStock-1855850613-2-Header%20Mobile.jpg" }} />
                </Pressable>
                <Pressable onPress={() => setShowImageModal("https://visitasevilla.es/en/wp-content/uploads/sites/2/2026/03/royal-alcazar-of-seville.jpg")}>
                    <Image style={styles.image} source={{ uri: "https://visitasevilla.es/en/wp-content/uploads/sites/2/2026/03/royal-alcazar-of-seville.jpg" }} />
                </Pressable>
                <Pressable onPress={() => setShowImageModal("https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=375%2Cheight=375%2Cdpr=2/tour_img/2aa009310af5c647b65b19c4359626cdeea853694cf3f10a8b9139522264d33c.jpg")}>
                    <Image style={styles.image} source={{ uri: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=375%2Cheight=375%2Cdpr=2/tour_img/2aa009310af5c647b65b19c4359626cdeea853694cf3f10a8b9139522264d33c.jpg" }} />
                </Pressable>
                <Pressable onPress={() => setShowImageModal("https://www.r1hotels.com/data/fotos/1459356203_1127092828.jpg")}>
                    <Image style={styles.image} source={{ uri: "https://www.r1hotels.com/data/fotos/1459356203_1127092828.jpg" }} />
                </Pressable>
                <Pressable onPress={() => setShowImageModal("https://media.istockphoto.com/id/537383379/photo/plaza-del-triunfo-in-seville-spain.jpg?s=612x612&w=0&k=20&c=caBGrjo_4uBveh-3-dvNqXWWjsTbqXB-JLJdUiTC1Kw=")}>
                    <Image style={styles.image} source={{ uri: "https://media.istockphoto.com/id/537383379/photo/plaza-del-triunfo-in-seville-spain.jpg?s=612x612&w=0&k=20&c=caBGrjo_4uBveh-3-dvNqXWWjsTbqXB-JLJdUiTC1Kw=" }} />
                </Pressable>
            </ScrollView>
            <View style={styles.buttonsCtr}>
                <ButtonIcon
                    icon="pen"
                    mode="contained"
                    onPress={editHandler}
                    size={30}
                />
                <ButtonIcon
                    icon="delete"
                    mode="contained"
                    onPress={deleteHandler}
                    color="red"
                    size={30}
                />
            </View>
            <Modal
                visible={showImageModal !== ""}
                onRequestClose={() => setShowImageModal("")}
                style={styles.modal}
                animationType='slide'
                backdropColor={colors.transperant}
            >
                {showImageModal && <Image style={styles.modalImage} source={{ uri: showImageModal }} />}
                <View style={styles.buttonsCtr}>
                    <ButtonIcon
                        icon="close"
                        mode="contained"
                        onPress={() => setShowImageModal("")}
                        size={30}
                    />
                </View>
            </Modal>
            <CreatePlace visible={showEditPlace} hideModal={closeEditPlaceHandler} place={currentPlace} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingBottom: 24,
        paddingHorizontal: 10,
        paddingTop: 10
    },
    poster: {
        width: '100%',
        height: 340,
        borderRadius: 15,
        position: "absolute"
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 350
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginRight: 12,
    },
    ratingBadge: {
        backgroundColor: colors.accent,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16
    },
    ratingText: {
        color: colors.textOnPrimary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    location: {
        marginTop: 6,
        fontSize: 16,
        color: colors.textSecondary,
    },
    sectionTitle: {
        marginTop: 24,
        marginBottom: 8,
        fontSize: 18,
        fontWeight: '600',
        color: colors.primary,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: colors.textPrimary,
    },
    gallery: {
        height: 100,
        marginTop: 10,
        padding: 10,
        flexDirection: "row",
        gap: 10
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 15,
        borderStyle: "solid",
        borderColor: colors.textOnPrimary,
        borderWidth: 1,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.29)"
    },
    modal: {
        justifyContent: 'center',
        alignItems: "center"
    },
    modalImage: {
        width: 340,
        height: 540,
        marginTop: 100,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: colors.textOnPrimary
    },
    buttonsCtr: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10,
        marginTop: 10
    }
});