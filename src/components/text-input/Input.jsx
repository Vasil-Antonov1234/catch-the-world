import { TextInput } from 'react-native-paper';

export default function Input({text, textHandler, textLabel, fieldName}) {

    return (
        <TextInput
            label={textLabel}
            value={text}
            onChangeText={text => textHandler(text, fieldName)}
            // style={{flex: 1}}
        />
    );
};