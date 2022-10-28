import React from 'react'
import { Box, Text } from '../../constants/theme'
import Layout from '../../constants/layout'
import Spacer from '../components/Spacer'
import {Card} from '../components/Card'
import {ScrollView, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput, Button, ImageBackground, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../constants/theme'

const ApprovedModal = () => {


    return (
        <Box style={styles.container}>
            <Box style={styles.closeContainer}>
                <Image source={require('../../assets/CloseIcon.png')}/>
            </Box>
            <Box style={styles.textContainer}>
            <Text style={styles.title}>YOU'VE BEEN APPROVED!</Text>
            <Text style={styles.description}>Forklift Operator</Text>
                
            </Box>

            <Box style={styles.imageContainer}>

            <Image source={require('../../assets/Approved.png')} style={styles.image}/>


            </Box>

            <Box style={styles.descriptionContainer}>
            <Text style={styles.description}>Your application passed with flying colors. Company Name wecomes you aboard! We've highlighted the new events for you, but you can click “Lets Go” to review the job details.</Text>

            </Box>
            
            
            
            <TouchableOpacity>
                <Box style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Let's go!</Text>
                </Box>
            </TouchableOpacity>
        </Box>
        
    )
}

export default ApprovedModal

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: 550,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: theme.colors.white

    },
    closeContainer: {
        alignSelf: 'flex-end',
        marginRight: 20,
        marginBottom: 20
    },
    textContainer: {
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        height: 50

    },
    imageContainer: {
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center'

    },
    image: {
        height: 140,
        width: 140

    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center'

    },
    buttonContainer: {
        marginTop: 40,
        backgroundColor: theme.colors.blueDark,
        justifyContent: 'center',
        alignSelf: 'stretch',
        borderRadius: 20,
        height: 40,
        marginLeft: 20,
        marginRight: 20

    },
    buttonText: {
        color: theme.colors.white,
        textAlign: 'center'

    },
    descriptionContainer: {
        marginTop: 40,
        paddingLeft: 30,
        paddingRight: 30

    },
    description: {
        textAlign: 'center'

    }
});