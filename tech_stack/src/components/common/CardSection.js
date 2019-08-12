import React from 'react';
import { View } from 'react-native';
import Card from './Card';

// CardSection component is just a pipe, so we use function
const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};


const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5, //provide padding b/w the border and card content
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'

    }
};

// export default CardSection
export { CardSection };
