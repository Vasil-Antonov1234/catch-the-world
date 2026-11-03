import { Button } from 'react-native-paper';

export default function ButtonPrimary({icon, text, mode, onPress}) {

    return (
        <Button 
            icon={icon} 
            mode={mode} 
            onPress={onPress}>
            {text}
        </Button>
    );
}