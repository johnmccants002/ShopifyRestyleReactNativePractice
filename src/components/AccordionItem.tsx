import React, {useState, useRef} from 'react';
import {
    View, StyleSheet, TouchableOpacity, Animated, LayoutAnimation, Image
} from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import toggleAnimation from "../animations/toggleAnimation"
import {Box, Text} from '../../constants/theme'



const AccordionItem = ({})=> {
    const [showContent, setShowContent] = useState(false)
    const animationController = useRef(new Animated.Value(0)).current;
    const newHeight = 400

    const data = [{
        rating: 4.0,
        job: "Forklift Operator (LO)"
    }, {rating: 4.0, job: "Forklift Operator (LF)"}, {rating: 5.0, job: "Forklift Operator (LO)"}]

    const toggleListItem = () => {
        const config = {
            duration: 300,
            toValue: showContent ? 0 : 1,
            useNativeDriver: true
        };

        Animated.timing(animationController, config).start()
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setShowContent(!showContent)
    }

    const arrowTransform = animationController.interpolate({
        inputRange: [0,1],
        outputRange: ['0deg', '180deg']
    })

    return (
        <Box style ={styles.container}>
            <TouchableOpacity onPress={() => toggleListItem()}>
                <Box style={styles.topContainer} >

                    <Box style={{flexDirection: 'row', padding: 5}}>
                        <Text marginRight='xs'>{4.5}</Text>
                        <Box width={10}></Box>
                        <Image marginTop={5} width={200} height={200} source={require('../../assets/stars.png')} />
                    </Box>

                    <Box style={{flexDirection: 'row', padding: 5,  justifyContent: 'space-between'}}>
                        <Text marginRight='xs' style={styles.titleContainer}>
                            {`${data.length} completed jobs`}
                        </Text>
                        <Box width={10}></Box>
                        <Animated.Box style={{transform: [{rotateX: arrowTransform}]}}>
                            <MaterialCommunityIcons name='chevron-down' />
                        </Animated.Box>     
                    </Box>

                </Box>
            </TouchableOpacity>
            {showContent && 
            <Box style={styles.body}>
                <Box
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: -8
            }}
            />
            <Box height={10}></Box>
                {data.map((object) => 
                <Box style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Box style={{flexDirection: 'row', padding: 5}}>
                        <Text>{object.rating.toFixed(1)}</Text>
                        <Box width={10}></Box>
                        <Image marginTop={5} width={200} height={200} source={require('../../assets/stars.png')} />
                    </Box>
                    <Box marginRight={5}>
                        <Text>
                            {object.job}
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
        marginBottom: '2%',
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
        paddingVertical: '1%'
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default AccordionItem;