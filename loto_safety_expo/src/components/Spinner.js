import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size, spinnerColor }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} color={spinnerColor || 'red'}/>
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1, // to fill up full width of screen
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default Spinner;