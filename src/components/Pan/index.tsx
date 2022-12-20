import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import { styles} from './styles';
import { Text } from '../Text';

export function Pan() {
    const position = useSharedValue(0)

    const rotationGesture = Gesture
        .Pan()
        .minPointers(2)
        .onUpdate((e) => {
            position.value = e.translationX
        })



    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{translateX: position.value}]
    }))
        
    return (
        <>
        <GestureDetector gesture={rotationGesture}>
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]}/>
            </View>
        </GestureDetector>   
        <Text>Pan Gesture</Text>  
        </>     
    )
}