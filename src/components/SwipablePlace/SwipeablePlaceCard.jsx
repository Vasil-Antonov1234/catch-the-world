import { GestureDetector, usePanGesture } from "react-native-gesture-handler";
import JourneyCard from "../journey-card/JourneyCard.jsx";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export default function SwipeablePlaceCard(props) {
    const translateX = useSharedValue(0);

    const pan = usePanGesture({
        onBegin() {
            console.log("begin")
        },
        onUpdate({ translationX }) {
            translateX.value = translationX;
        },
        onFinalize() {
            console.log("final")
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