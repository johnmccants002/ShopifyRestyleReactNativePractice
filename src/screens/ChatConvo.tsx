import React, {useRef, useState} from 'react'
import { Box, Text } from '../../constants/theme'
import Layout from '../../constants/layout'
import Spacer from '../components/Spacer'
import {Card} from '../components/Card'
import {ScrollView, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput, Button, ImageBackground, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../constants/theme'



const ChatConvo = () => {

    const [inputHeight, setInputHeight] = useState(0)

    const dummyMessages = [{sender: true, message: "Hey whats up?"}, {sender: true, message: 'Just following up about the job'}, {sender: false, message: 'Hey hows it going? Yeah we will pay you $50'}]
    const [messages, setMessages] = useState(dummyMessages)
    const messageInput = useRef
    ()

    const sendMessage = (e) => {
        const newMessage = {sender: false, message: e.nativeEvent.text}
        setMessages([...messages, newMessage])
        messageInput.current.clear()
    }

    const displayMessages = () => {

        return messages.map((message) => {
          return <Box style={message.sender ? styles.senderContainer : styles.recipientContainer}>
                        <TouchableOpacity>
                        <Image style={styles.profileImage} source={message.sender ? {uri: 'https://i.imgur.com/hCwHtRc.png'} : {uri: 'https://i.imgur.com/MWTxxA6s.jpg'}}/>
                        </TouchableOpacity>
                        <Box style={message.sender ? styles.senderMessageContainer : styles.recipientMessageContainer}>
                            <Text style={{fontWeight: '500'}}>{message.message}</Text>
                        </Box>
                    </Box>
        })
    }



    return (

        <KeyboardAvoidingView behavior="padding"
        style={{ flex: 1 }}
        >
        <Box flex={1} style={{backgroundColor: 'white'}} >
            <Spacer />

            <Card
                flex={5}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{ zIndex: 1, marginTop: 110, }}
                backgroundColor="white"
                padding="m"
                marginTop="xl"
                
                >
            
                <Box style={styles.titleContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('JobDetail', { id: 1 })}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Joe Thomas</Text>
                    <Text style={{textAlign: 'center'}}>RE: Forklift Operator</Text>
                    </TouchableOpacity>
                </Box>
    
                <ScrollView>

                    
            {displayMessages()}

                </ScrollView>

                


            </Card>
        
            <Box style={[styles.flexify, styles.positAtBottom, styles.shadow]}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/PlusIcon.png')} style={styles.plusIcon} />
                    </TouchableOpacity>
                    <ImageBackground source={require('../../assets/MessageInput.png')} style={styles.messageInputBackground}>
                        <TextInput 
                        placeholderTextColor={theme.colors.bluePrimary} 
                        multiline={true}
                        placeholder={'Send Message'}
                        style={[styles.messageInput, {height: Math.max(35, inputHeight)}]}
                        returnKeyType='send'
                        onSubmitEditing={(e) => sendMessage(e)}
                        onContentSizeChange={(event) => {
                            setInputHeight(event.nativeEvent.contentSize.height)
                        }}
                        
                        ref={messageInput}
                        />
                        <TouchableOpacity>
                            <Image source={require('../../assets/HappyIcon.png')} style={styles.happyImage}/>
                        </TouchableOpacity>
                    </ImageBackground>
                </Box>
           
        </Box>
        </KeyboardAvoidingView>

    )

}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'column', 
        justifyContent: 'center',
        marginBottom: 20

    },
    mainContainer: {
        borderWidth: 1,
        borderColor: 'white',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 120,
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        height: Layout.window.height - 240,
        borderRadius: 20,
        zIndex: 2,
        backgroundColor: theme.colors.brightWhite,
        
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
        marginBottom: 10,

    },
    recipientContainer: {
        flexDirection: 'row-reverse',
        marginBottom: 10,
       
 

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
        bottom: 40,
        height: 20,
        width: Layout.window.width - 10,
        paddingLeft: 10,
        paddingRight: 10,
        zIndex: 2
        
    },
    messageInput: {
        marginLeft: 10,
        marginTop: 10,
  
    },
    messageInputBackground: {
        flexGrow: 1,
        marginLeft: 5,
        height: 40,
        borderRadius: 100,
        backgroundColor: 'white'
    },
    happyImage: {
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 5,
        marginTop: -40

    },
    plusIcon: {
        height: 35,
        width: 35
    },
    container: {
        flex: 1
      },
      shadow: {
        shadowColor: '#171717',
        shadowOffsetWidth: 0,
        shadowOffsetHeight: 2,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: 'white',
      },
      positAtBottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 100,
        paddingHorizontal: 15,
        paddingVertical: 15,
      },
      flexify: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },


})

export default ChatConvo




