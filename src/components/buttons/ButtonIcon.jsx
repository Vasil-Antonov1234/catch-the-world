import { IconButton, MD3Colors } from 'react-native-paper';

export default function ButtonIcon({placeId, onPress, icon, mode, color, size, style}) {

    return (
        <IconButton
            icon={icon}
            iconColor={color}
            size={size}
            onPress={() => onPress(placeId)}
            mode={mode}
            style={style}
        />
    );
};