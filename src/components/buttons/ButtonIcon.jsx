import { IconButton, MD3Colors } from 'react-native-paper';

export default function ButtonIcon({onAddPlace}) {
    return (
        <IconButton
            icon="plus"
            iconColor={MD3Colors.neutral0}
            size={20}
            onPress={onAddPlace}
            mode="contained"
        />
    );
};