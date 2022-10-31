import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import theme from '../../theme'
import AccordionItem from '../components/AccordionItem'
import ProfileReviews from '../components/ProfileReviews'
import {Box, Text} from '../../constants/theme'

const ChatTest = () => {

    const data = {
        overallRating : 4.5,
        reviews: [{jobTitle: 'Forklift Operator', jobId: 1, rating: 4}]

    }


    return (
   
            <Box flex={1} style={{backgroundColor: 'black'}}>
                <Text style={{}}>JFoiwfjowfjowe</Text>
                <ProfileReviews {...data}/>
            </Box>
        
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 2,
    },
    scrollView: {
        overflow: 'visible',
    },
    cardContainer: {},
    card: {},
    profileImage: {
        marginRight: 8,
        borderWidth: 1,
        borderColor: theme.colors.mainBackground,
        borderRadius: 50,
    },
});

export default ChatTest