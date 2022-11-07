import React, {useState, useRef} from 'react';
import {
    View, StyleSheet, TouchableOpacity, Animated, LayoutAnimation, Image, Text
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import Rating from './Rating'
import {Box} from '../../constants/theme'




type Props = {
    reviews: Review[] | undefined;
    overallRating: number;
    setShowReviews: Function;
    showReviews: boolean;
}

export interface Review {
    jobId: number;
    rating: number;
    jobTitle: string;

}

const ProfileReviews = (props: Props) => {
    const { reviews, overallRating, showReviews, setShowReviews } = props;
    const animationController = useRef(new Animated.Value(0)).current;
    const newHeight = 400

    const data = [{
        rating: 4.0,
        job: "Forklift Operator (LO)"
    }, {rating: 4.0, job: "Forklift Operator (LF)"}, {rating: 5.0, job: "Forklift Operator (LO)"}]

    const toggleListItem = () => {
        const config = {
            duration: 300,
            toValue: showReviews ? 0 : 1,
            useNativeDriver: true
        };

        Animated.timing(animationController, config).start()
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setShowReviews(!showReviews)
    }

    const arrowTransform = animationController.interpolate({
        inputRange: [0,1],
        outputRange: ['0deg', '180deg']
    })

    return (
        <Box style ={styles.container} >
            <TouchableOpacity onPress={() => toggleListItem()}>
                <Box style={styles.topContainer} >

                    <Box style={{flexDirection: 'row', padding: 5}}>
                        <Rating color='bluePrimary' rating={overallRating} cap={5} size={16} />
                    </Box>

                    <Box style={{flexDirection: 'row', padding: 5,  justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={styles.titleContainer}>
                            {`${data.length} completed jobs`}
                        </Text>
                        <Box style={{width:10}}></Box>
                        <Animated.View style={{transform: [{rotateX: arrowTransform}]}}>
                            <Image style={{marginLeft:2}} source={require('../../assets/downarrow.png')}/>
                        </Animated.View>     
                    </Box>

                </Box>
            </TouchableOpacity>
            {showReviews && 
            <Box style={styles.body}>
                <Box
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: -8
            }}
            />
            <Box style={{height:10}}></Box>
                {reviews.map((review) => 
                <Box style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Box style={{flexDirection: 'row', padding: 5}}>
                    <Rating color='bluePrimary' rating={review.rating} cap={5} size={16} />
                    </Box>
                    <Box style={{marginRight:5}}>
                        <Text>
                            {review.jobTitle}
                        </Text>
                    </Box>             
                </Box>
               )}
            </Box>
            }
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 12,
        backgroundColor: 'white',
        marginBottom: '2%',
        overflow: 'hidden',
        flexDirection: 'column',
        // justifyContent: 'space-evenly'

    },
    topContainer: {
        width: '100%',
        padding: '2%',
        borderRadius: 12,
        backgroundColor: 'white',

        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    title: {
        fontSize: 16,
        color: '#2d2d2d',
        fontWeight: 'bold',

    },
    body: {
        paddingHorizontal: '2%',
        paddingBottom: 10,
        paddingTop: 2
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight:5
    }
})

export default ProfileReviews