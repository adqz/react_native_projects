import React from 'react';
import { TextInput, View, Text } from 'react-native';

const GetInput = ({ label, value, onChangeText, placeholder, secure }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>
                { label }
            </Text>
            <TextInput
                secureTextEntry={secure}
                placeholder={placeholder}
                autoCorrect={false} //turn off auto correct
                style={styles.inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        // height: 20,
        // width: 100,
        flex: 2 // 2/3rd of the place will be allocated
    },

    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1 // 1/3rd of space will be allocated
    },

    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { GetInput };
