import React from 'react';
import { ParallaxImage } from 'react-native-snap-carousel';
import {SafeAreaView, Platform, StyleSheet, Dimensions} from 'react-native';

function CarouselView({item}, props) {
    return (
        <SafeAreaView style={styles.item}>
        <ParallaxImage 
          source={{ uri: item.source }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          {...props}
        />
      </SafeAreaView>
    );
}

const {width: screenWidth} = Dimensions.get('window');
const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: screenWidth - 5
    },
    imageContainer: {
        flex: 1,
        paddingTop: 60,
        borderRadius: 5,
        marginBottom: Platform.select({ios: 0, android: 1})
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'contain'
    }
});

export default CarouselView;