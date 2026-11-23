import { GestureDetector, usePanGesture } from "react-native-gesture-handler";
import JourneyCard from "../journey-card/JourneyCard.jsx";
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function SwipeablePlaceCard(props) {
    const translateX = useSharedValue(0);

    const pan = usePanGesture({
        onBegin() {
            
        },
        onUpdate({ translationX }) {
            translateX.value = Math.min(translationX, 0);
        },
        onFinalize() {
            translateX.value = withSpring(0);
        }
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }]
        };
    });

    return (
        <GestureDetector gesture={pan}>
            <JourneyCard {...props} style={animatedStyle}/>
        </GestureDetector>
    );
}