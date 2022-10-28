import React from 'react'
import theme from '../../theme'
import Box from '../../Box'
import Text from '../../Text'
import {ScrollView, SafeAreaView } from 'react-native'


const ChatHome = () => {


    return (
    <SafeAreaView>
        <Box>
            <ScrollView>
            <Box>
                <Text>
                    John McCants
                </Text>

            </Box>
            </ScrollView>
        </Box>
        </SafeAreaView>
    )

}

export default ChatHome