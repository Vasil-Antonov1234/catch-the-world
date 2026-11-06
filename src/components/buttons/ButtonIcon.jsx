import { IconButton, MD3Colors } from 'react-native-paper';

export default function ButtonIcon({placeId, onPress, icon, wantToVisit, mode, color}) {

    return (
        <IconButton
            icon={icon}
            iconColor={color ? color : wantToVisit ? MD3Colors.error70 : MD3Colors.neutral0}
            size={20}
            onPress={() => onPress(placeId)}
            mode={wantToVisit ? "contained" : mode}
        />
    );
};