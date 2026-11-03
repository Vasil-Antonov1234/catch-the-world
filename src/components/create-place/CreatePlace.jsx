import { Modal } from 'react-native-paper';
import Input from '../text-input/Input';
import { View } from 'react-native';
import ButtonIcon from '../buttons/ButtonIcon';
import { useState } from 'react';

export default function CreatePlace({
    visible,
    hideModal
}) {

    const [text, setText] = useState("");

    function textHandler(value) {
        setText(value);
    };

    const containerStyle = { backgroundColor: 'white', padding: 20 };

    return (
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <View style={{flexDirection: "row", justifyContent: "space-between", gap: 10}}>
                <Input text={text} textHandler={textHandler}/>
                <ButtonIcon text={text}/>
            </View>
        </Modal>
    );
};