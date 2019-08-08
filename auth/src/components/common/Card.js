import React from 'react';
import { View } from 'react-native';

// Card component is just a pipe, so we use function
const Card = (props) => {
    return(
        <View style={styles.containerStyle}>
            { props.children }
        </View>
    );
};


const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2, //round off edges a bit
        borderColor: '#ddd', // light gray color
        borderBottomWidth: 0, //hide the bottom border
        shadowColor: '#000',
        shadownOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

// export default Card;
export { Card };
