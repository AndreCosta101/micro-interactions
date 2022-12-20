import { ScrollView } from 'react-native';
import { Fling } from '../Fling';
import { LongPress } from '../LongPress';
import { Pan } from '../Pan';
import { Pinch } from '../Pinch';
import { Rotation } from '../Rotation';
import { Touches } from '../Touches';

export function Menu(){
    return (
        <ScrollView contentContainerStyle={{
            paddingTop: 100,
            paddingBottom: 300,
            justifyContent: 'center',
            alignItems: 'center'}}>
                
                <Touches />  
                <LongPress />  
                <Rotation />  
                <Pinch /> 
                <Pan />  
                <Fling /> 
        </ScrollView>
    )
}