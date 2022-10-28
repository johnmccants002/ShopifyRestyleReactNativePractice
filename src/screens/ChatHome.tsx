import React from 'react'
import { Box, Text} from '../../constants/theme'
import Layout from '../../constants/layout'
import Spacer from '../components/Spacer'
import {Card} from '../components/Card'
import {ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../constants/theme'


const ChatHome = () => {

    const messages = 5
    const read = false


    return (
    <SafeAreaView>
        <Box flex={1} padding={{phone: 'm', desktop: 'l'}} style={{}}>

            <Box style={styles.inboxContainer}>
            <ScrollView scrollEnabled={messages < 5} style={styles.scrollContainer}>

            <Box style={styles.readMessageContainer}>
            <Image style={styles.profileImage} source={{uri: 'https://i.imgur.com/MWTxxA6s.jpg'}}/>
            
            <Box style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Joe Thomas</Text>
            <Text style={{textAlign: 'center'}}>RE: Forklift Operator</Text>
            </Box>

            <Box style={styles.spacerBox}></Box>

            </Box>

            </ScrollView>

            </Box>

            </Box>

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    profileImage: {
        borderWidth: 5,
        borderColor: theme.colors.white,
        borderRadius: 50,
        height: 50,
        width: 50
    },
    unreadMessageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.blueLight
    },
    readMessageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.brightWhite

    },
    inboxContainer: {
        marginLeft: 1,
        marginRight: 1,
        borderWidth: 1,
        height: Layout.window.height,
        borderRadius: 20,

    },
    spacerBox: {
        width: 40,
        height: 40
    },
    scrollContainer: {

    }
});

export default ChatHome