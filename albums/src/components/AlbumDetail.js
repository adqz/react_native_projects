import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// import console = require('console');
/* This component is only taking some data as input and displaying to the user
so we will use a functioncal component, not class component
*/

const AlbumDetail = ({ record }) => {

    const { title, artist, thumbnail_image, image, url } = record;

    return (
        <Card>
            
            {/* Image */}
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image 
                    style={styles.thumbnailStyle}
                    source={{ uri: thumbnail_image }} 
                    />
                </View>
            
            {/* Text */}
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
            
            {/* Album art */}
            <CardSection>
                <Image
                style={styles.imageStyle}
                source={{ uri: image }}
                />
            </CardSection>

            {/* Button */}
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerTextStyle: {
        fontSize: 18
    },

    thumbnailStyle: {
        height: 50,
        width: 50
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;

/*
With Images, we always need to specify heigh and width in style
*/