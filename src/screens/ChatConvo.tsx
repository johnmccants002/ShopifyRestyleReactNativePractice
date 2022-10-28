import React from 'react'
import { Box, Text } from '../../constants/theme'
import Layout from '../../constants/layout'
import Spacer from '../components/Spacer'
import {Card} from '../components/Card'
import {ScrollView, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput, Button, ImageBackground, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../constants/theme'


const ChatConvo = () => {

    return (
        <KeyboardAvoidingView behavior={'padding'}
        style={{
          flex: 1,
        }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>

            <Box style={styles.mainContainer}>
                <Box style={styles.titleContainer}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Joe Thomas</Text>
                    <Text style={{textAlign: 'center'}}>RE: Forklift Operator</Text>
                </Box>
                <ScrollView>
                    <Box style={styles.senderContainer}>
                        <Image style={styles.profileImage} source={{uri: 'https://i.imgur.com/MWTxxA6s.jpg'}}/>
                        <Box style={styles.senderMessageContainer}>
                            <Text style={{fontWeight: '500'}}>Hey whats up</Text>
                        </Box>

                    </Box>


                    <Box style={styles.recipientContainer}>
                        <Image style={styles.profileImage} source={{uri: 'https://i.imgur.com/MWTxxA6s.jpg'}}/>
                        <Box style={styles.recipientMessageContainer}>
                            <Text style={{fontWeight: '500'}}>Hey whats up</Text>
                        </Box>

                    </Box>


                </ScrollView>
                


            </Box>
            
        
            <Box>
                <Box style={styles.sendMessageContainer}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/PlusIcon.png')} style={styles.plusIcon} />
                    </TouchableOpacity>
                    <ImageBackground source={require('../../assets/MessageInput.png')} style={styles.messageInputBackground}>
                        <TextInput 
                        placeholderTextColor={theme.colors.bluePrimary} 
                        placeholder={'Send Message'}
                        style={styles.messageInput}
                        />
                        <TouchableOpacity>
                            <Image source={require('../../assets/HappyIcon.png')} style={styles.happyImage}/>
                        </TouchableOpacity>
                    </ImageBackground>
                </Box>
            </Box>
            
            
           
        
        {/* </Box> */}
        </SafeAreaView>
        </TouchableWithoutFeedback>

        </KeyboardAvoidingView>

    )

}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'column', 
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 20

    },
    mainContainer: {
        borderRadius: 20,
        height: Layout.window.height - 150,
        width: Layout.window.width,
        
    },
    senderMessageContainer: {
        backgroundColor: theme.backgroundColors.lightGray,
        borderRadius: 5,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,

    },
    senderContainer: {
        flexDirection: 'row',
        marginLeft: 10

    },
    recipientContainer: {
        flexDirection: 'row-reverse',
        marginRight: 10

    },
    recipientMessageContainer: {
        backgroundColor: theme.backgroundColors.blueLight,
        borderRadius: 5,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    profileImage: {
        borderWidth: 5,
        borderColor: theme.colors.white,
        borderRadius: 50,
        height: 50,
        width: 50
    },
    sendMessageContainer: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 0,
        height: 20,
        width: Layout.window.width - 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    messageInput: {
        marginLeft: 10,
        marginTop: 10
    },
    messageInputBackground: {
        flexGrow: 1,
        marginLeft: 5,
        height: 40,
        borderRadius: 100
        
    },
    happyImage: {
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 5,
        marginTop: -18

    },
    plusIcon: {
        height: 35,
        width: 35
    },
    container: {
        flex: 1
      },


})

export default ChatConvo