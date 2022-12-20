import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import { styles} from './styles';
import { Text } from '../Text';

export function Rotation() {
    const rotation = useSharedValue(100)

    const rotationGesture = Gesture
        .Rotation()
        .onUpdate((e) =>{
            rotation.value = e.rotation
        })


    const animatedStyle = useAnimatedStyle(() => ({
        // supostamente, dividir por Math.PI deixaria a animação mais lenta
        transform: [{rotateZ: `${(rotation.value / Math.PI) * 360}deg`}]
    }))
        
    return (
        <>
        <GestureDetector gesture={rotationGesture}>
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]}/>
            </View>
        </GestureDetector>   
        <Text>Rotation</Text>  
        </>     
    )
}