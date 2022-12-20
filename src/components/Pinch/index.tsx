import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import { styles} from './styles';
import { Text } from '../Text';

export function Pinch() {
    const scale = useSharedValue(1)

    const pinchGesture = Gesture
        .Pinch()
        .onUpdate((e) => {
            scale.value = e.scale
        })



    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{scale: scale.value}]
    }))
        
    return (
        <>
        <GestureDetector gesture={pinchGesture}>
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]}/>
            </View>
        </GestureDetector>   
        <Text>Pinch</Text>  
        </>     
    )
}