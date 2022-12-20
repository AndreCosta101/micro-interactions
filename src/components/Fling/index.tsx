import { Dimensions, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';

import { styles} from './styles';
import { Text } from '../Text';

const START = 24;
const LIMIT = Dimensions.get('window').width -124;

export function Fling() {
    const position = useSharedValue(0)

    const directionRight = Gesture
        .Fling()
        .direction(Directions.RIGHT)
        .onStart((e) => {
            position.value = withTiming(LIMIT, {duration:500})
        })

    const directionLeft = Gesture
        .Fling()
        .direction(Directions.LEFT)
        .onStart(() => {
            position.value = withTiming(START, {duration:500})
        })



    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{translateX: position.value}]
    }))
        
    return (
        <View style={styles.outerContainer}>
            <>
            <GestureDetector gesture={Gesture.Exclusive(directionRight, directionLeft)}>
                <View style={styles.container}>
                    <Animated.View style={[styles.box, animatedStyle]}/>
                </View>
            </GestureDetector>   
            <Text>Fling</Text>  
            </>
        </View>     
    )
}