import { Modal } from 'react-native-paper';
import Input from '../text-input/Input';
import ButtonIcon from '../buttons/ButtonIcon';
import { useContext, useEffect, useState } from 'react';
import { Keyboard, View } from 'react-native';
import AppContext from '../../contexts/AppContext';
import ButtonPrimary from '../buttons/ButtonPrimary.jsx';

const initialValues = {
    name: "",
    poster: "",
    location: "",
    rating: "",
    description: ""
}

export default function CreatePlace({
    visible,
    hideModal,
    place
}) {

    const [newPlace, setNewPlace] = useState(initialValues);
    const { addPlaceHandler, setIsEdit } = useContext(AppContext);


    useEffect(() => {

        if (place) {
            setNewPlace({ ...place });
        };

    }, [])

    function textHandler(value, field) {
        setNewPlace({
            ...newPlace,
            [field]: value
        });
    };

    function addPlace() {
        addPlaceHandler(newPlace);
        setNewPlace(initialValues);
        Keyboard.dismiss();
        hideModal();
    }

    const containerStyle = { backgroundColor: 'white', padding: 20 };

    return (
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <View style={{ justifyContent: "center", gap: 10 }}>
                <Input text={newPlace["name"]} textHandler={textHandler} textLabel="Citi Name" fieldName="name" onAddPlace={addPlace} />
                <Input text={newPlace["location"]} textHandler={textHandler} textLabel="Location" fieldName="location" onAddPlace={addPlace} />
                <Input text={newPlace["poster"]} textHandler={textHandler} textLabel="Poster" fieldName="poster" onAddPlace={addPlace} />
                <Input text={newPlace["rating"]} textHandler={textHandler} textLabel="rating" fieldName="rating" onAddPlace={addPlace} />
                <Input text={newPlace["description"]} textHandler={textHandler} textLabel="description" fieldName="description" onAddPlace={addPlace} />
                <ButtonPrimary icon="plus" text="Add Place" mode="contained" onPress={addPlace} />
            </View>
        </Modal>
    );
};