import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import { styles} from './styles';
import { Text } from '../Text';

export function LongPress() {
    const size = useSharedValue(100)

 // very buggy.   

    const longPressGesture = Gesture
        .LongPress()
        .onTouchesDown(()=>{
            size.value = withTiming(size.value + 200, { duration: 1500})
        })
        .onEnd((e, success)=> {
            // if(success) {
                console.log(`Duração: ${e.duration} ms`)
                size.value = withTiming(100, {duration:500})
                console.log('ACABOU')
            // }
        })

    const animatedStyle = useAnimatedStyle(() => ({
        width: size.value,
        height: size.value,
    }))
        
    return (
        <>
        <GestureDetector gesture={longPressGesture}>
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]}/>
            </View>
        </GestureDetector>   
        <Text> LongPress(bug)</Text>  
        </>     
    )
}