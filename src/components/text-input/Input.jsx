import { TextInput } from 'react-native-paper';

export default function Input({text, textHandler}) {

    return (
        <TextInput
            label="Add Place"
            value={text}
            onChangeText={text => textHandler(text)}
            style={{flex: 1}}
        />
    );
};