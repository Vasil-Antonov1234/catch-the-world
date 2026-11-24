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
            // console.log(translationX);
        },
        onFinalize({x, absoluteX }) {
            if (translateX.value > -85) {
                console.log("test")
                translateX.value = withSpring(0)
            } else {
                console.log("test1")
                translateX.value = withSpring(-85)
            }
            
        }
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }]
        };
    });

    return (
        <GestureDetector gesture={pan}>
            <JourneyCard {...props} style={animatedStyle} />
        </GestureDetector>
    );
}