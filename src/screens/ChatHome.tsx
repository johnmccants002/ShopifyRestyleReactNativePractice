import React from 'react'
import { Box, Text} from '../../theme'

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