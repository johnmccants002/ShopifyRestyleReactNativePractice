import React, { useEffect, useState, useRef  } from 'react';
import { StyleSheet, Image, ActivityIndicator, Animated, Easing, LayoutAnimation, View } from 'react-native';
import { Card } from '../components/Card';
import Layout from '../../constants/layout';
import theme, { Box, Text } from '../../constants/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Spacer from '../components/Spacer';
import Labels from '../components/Labels'
import ProfileReviews from '../components/ProfileReviews'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Profile = ({ route, navigation }: any) => {

    const isLoading = true
    const[img, setImg] = useState('')
    const [showReviews, setShowReviews] = useState(false)
    // const aController = useRef(new Animated.Value(0)).current;
    // const newHeight = 400

    // const toggleListItem = () => {
    //     console.log("jfoiwjfioewjfweiofjewoifji")
    //     const config = {
    //         duration: 300,
    //         toValue: showReviews ? 0 : 1,
    //         useNativeDriver: true
    //     };

    //     Animated.timing(aController, config).start()
    //     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
   
    // }

    // useEffect(() => {
        
    //     toggleListItem()
        

    // }, [showReviews])



    const labels = ['Part-Time', 'Skilled', 'Gig'];
    return (
        <Box flex={1} padding={{ phone: 'm', desktop: 'l' }} >
            <Spacer />
            <View>

            </View>
            <Card
                flexGrow={4}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{ zIndex: 1}}
                backgroundColor="white"
                padding="m"
                marginVertical="l">
                {!isLoading ? (
                    <Box flex={1} justifyContent="center" alignItems="center">
                        <ActivityIndicator size={50} />
                    </Box>
                ) : (
                    <>
                        <Box
                            flexGrow={0.9}
                            backgroundColor="blueLight"
                            marginTop="xl"
                            paddingBottom='xs'
                      
                            onLayout={(event) => {
                                console.log(event.nativeEvent.layout);
                                console.log('on layout')
                              }}
                            

                          // eslint-disable-next-line react-native/no-inline-styles
                          style={{ borderRadius: 12}}>
                            
                            <Image
                                style={[styles.profileImage]}
                                width={100}
                                height={100}
                                source={
                                        require('../../assets/splash.png')
                                }
                                onError={() => {
                                    // setImgSrc('https://i.imgur.com/DDd17Aos.png')
                                }}
                            />
                            <Box
                               
                                alignItems="center"
                                justifyContent="center"
                                marginTop='xl'
                                >
                                <Text variant="semiBold-16" color="grayDark">
                                    Joe Schmo
                                </Text>
                                
                                <Box
                                    flexDirection="row"
                                    alignItems="center"
                                    marginTop="s">
                                    <MaterialCommunityIcons
                                        name="map-marker-outline"
                                        size={18}
                                        color={theme.colors.bluePrimary}
                                    />
                                        <Text
                                            variant="regular-14"
                                            color="grayDark"
                                            marginLeft="xs">
                                            {'Sacramento'},{' '}
                                            {'California'}
                                            ~3km
                                        </Text>
                                </Box>
                            </Box>

                            <Box  marginTop='m' onLayout={(event) => {
                                console.log(event.nativeEvent.layout);
                                console.log('on layout')
                              }}>
                                <ProfileReviews reviews={[{jobId: 1, rating: 5, jobTitle: "Forklift Operator"}, {jobId: 1, rating: 4, jobTitle: "Forklift Operator"}, {jobId: 1, rating: 5, jobTitle: "Forklift Operator"}, {jobId: 1, rating: 4, jobTitle: "Forklift Operator"}, {jobId: 1, rating: 5, jobTitle: "Forklift Operator"}, {jobId: 1, rating: 4, jobTitle: "Forklift Operator"}]} overallRating={5} setShowReviews={setShowReviews} showReviews={showReviews}/>
                            </Box>
                               
                        </Box>
                     

                        <Box
                            marginTop='xs'
                            borderBottomWidth={0.5}
                            borderBottomColor="lightGray"
                            paddingVertical="m">
                            <Labels
                                labels={labels}
                                color="blueLight"
                                textColor="bluePrimary"
                            />
                        </Box>
                        <Box marginTop='xs' paddingVertical="m" paddingRight="l">
                            <Box
                                flexDirection="row"
                                marginVertical="s"
                                alignItems="center">
                                <MaterialCommunityIcons
                                    name="card-account-details-outline"
                                    size={22}
                                />
                                <Text marginLeft="s" variant="light-14">
                                    {/* TODO: Need User card types here */}
                                    White Card, Green Card
                                </Text>
                            </Box>
                            <Box
                                flexDirection="row"
                                marginVertical="s"
                                alignItems="center">
                                <MaterialCommunityIcons
                                    name="tshirt-crew-outline"
                                    size={22}
                                />
                                <Text marginLeft="s" variant="light-14">
                                    PPE, high visibility clothing, steel-toe
                                    shoes, hard hat, ear plugs, face mask
                                </Text>
                            </Box>
                            <Box
                                flexDirection="row"
                                marginVertical="s"
                                alignItems="center">
                                <MaterialCommunityIcons
                                    name="certificate-outline"
                                    size={22}
                                />
                                <Text marginLeft="s" variant="light-14">
                                  Name
                                </Text>
                            </Box>
                            <Box
                                flexDirection="row"
                                marginVertical="s"
                           
                                
                                style={{height: 150}}
                                >
                                <MaterialCommunityIcons
                                    name="account-outline"
                                    size={22}
                                />
                                <Text marginLeft="s" variant="light-14">
                                   About section
                                </Text>
                            </Box>
                        </Box>
                    </>
                )}
            </Card>

            <Box flex={1} />
        </Box>
    );
};

const styles = StyleSheet.create({
    profileImage: {
        position: 'absolute',
        top: -50,
        left: Layout.window.width * 0.5 - 80,
        borderWidth: 5,
        borderColor: theme.colors.white,
        borderRadius: 50,
    },
    box: {
        height: 2000
    }
});

export default Profile;