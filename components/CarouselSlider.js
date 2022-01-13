import React from 'react';
import { Dimensions, View, StyleSheet} from 'react-native';
import Carousel from "react-native-snap-carousel";
import CarouselView from './CarouselView';

const {width} = Dimensions.get("window");
export default function CarouselSlider({data}) {

    const settings = {
        sliderWidth: width,
        sliderHeight: width,
        itemWidth: width - 80,
        data: data,
        renderItem: CarouselView,
        hasParallaxImages: true
    };
    return (
        <View styles={styles.container}>
            <Carousel 
            {...settings}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    }
});