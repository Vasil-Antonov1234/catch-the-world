import { Modal } from 'react-native-paper';
import Input from '../text-input/Input';
import ButtonIcon from '../buttons/ButtonIcon';
import { useContext, useState } from 'react';
import { View } from 'react-native';
import AppContext from '../../contexts/AppContext';

const initialValues = {
    name: "",
    poster: "",
    location: "",
    rating: "",
    description: ""
}

export default function CreatePlace({
    visible,
    hideModal
}) {

    const [newPlace, setNewPlace] = useState(initialValues);
    const { addPlaceHandler } = useContext(AppContext);

    function textHandler(value, field) {
        setNewPlace({
            ...newPlace,
            [field]: value
        });
    };

    function addPlace() {
        addPlaceHandler(newPlace);
        setNewPlace(initialValues);
        hideModal();
    }

    const containerStyle = { backgroundColor: 'white', padding: 20 };

    return (
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <View style={{ justifyContent: "center", gap: 10 }}>
                <Input text={newPlace["name"]} textHandler={textHandler} textLabel="Citi Name" fieldName="name" />
                <Input text={newPlace["location"]} textHandler={textHandler} textLabel="Location" fieldName="location" />
                <Input text={newPlace["poster"]} textHandler={textHandler} textLabel="Poster" fieldName="poster" />
                <Input text={newPlace["rating"]} textHandler={textHandler} textLabel="rating" fieldName="rating" />
                <Input text={newPlace["description"]} textHandler={textHandler} textLabel="description" fieldName="description" />
                <ButtonIcon onAddPlace={addPlace} />
            </View>
        </Modal>
    );
};