import {StyleSheet, Text as TextComponent} from 'react-native';

export function Text({children}){
    return (
        <TextComponent style={styles.text}>{children}</TextComponent>
    )
}


const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        marginBottom: 40,
        color: '#000',
        fontSize: 12

    },
})