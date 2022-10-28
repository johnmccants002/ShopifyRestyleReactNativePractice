import React from 'react'
import { Box, Text} from '../../constants/theme'
import Layout from '../../constants/layout'
import Spacer from '../components/Spacer'
import {Card} from '../components/Card'
import {ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../constants/theme'


const ChatHome = () => {


    return (
    <SafeAreaView>
        <Box padding={{phone: 'm', desktop: 'l'}} style={{}}>

            <Box style={styles.inboxContainer}>

            <Box style={styles.messageContainer}>
            <Image style={styles.profileImage} source={{uri: 'https://i.imgur.com/MWTxxA6s.jpg'}}/>
            
            <Box style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Joe Thomas</Text>
            <Text style={{textAlign: 'center'}}>RE: Forklift Operator</Text>
            </Box>

            <Box style={styles.spacerBox}></Box>

            </Box>



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
        height: 40,
        width: 40
    },
    messageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
        

    },
    inboxContainer: {
        marginLeft: 20,
        marginRight: 20

    },
    spacerBox: {
        width: 40,
        height: 40
    }
});

export default ChatHome