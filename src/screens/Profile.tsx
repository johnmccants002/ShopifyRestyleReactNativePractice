import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Card } from '../components/Card';
import Layout from '../../constants/layout';
import theme, { Box, Text } from '../../constants/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Spacer from '../components/Spacer';
import Labels from '../components/Labels'




const Profile = ({ route, navigation }: any) => {

    const isLoading = true
    const[img, setImg] = useState('')


    const labels = ['Part-Time', 'Skilled', 'Gig'];
    return (
        <Box flex={1} padding={{ phone: 'm', desktop: 'l' }}>
            <Spacer />
            <Card
                flex={5}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{ zIndex: 1 }}
                backgroundColor="white"
                padding="m"
                marginVertical="l">
                {isLoading ? (
                    <Box flex={1} justifyContent="center" alignItems="center">
                        <ActivityIndicator size={50} />
                    </Box>
                ) : (
                    <>
                        <Box
                            flex={1.2}
                            backgroundColor="blueLight"
                            marginTop="xl"
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{ borderRadius: 12 }}>
                            <Image
                                style={[styles.profileImage]}
                                width={100}
                                height={100}
                                source={
                         
                                        require('../../assets/images/ProfileIcon.png')
                               
                                }
                                onError={() => {
                                    // setImgSrc('https://i.imgur.com/DDd17Aos.png')
                                }}
                            />
                            <Box
                                flex={4}
                                alignItems="center"
                                justifyContent="center"
                                marginTop="xl">
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
                            <Box
                                flex={1}
                                backgroundColor="white"
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{ borderRadius: 24 }}
                                alignSelf="center"
                                paddingVertical="xs"
                                paddingHorizontal="s"
                                width="95%"
                                marginBottom="s"
                                justifyContent="space-between"
                                flexDirection="row">
                                <Box flex={1}>
                            {/* Ratings here */}
                                </Box>
                                <Box
                                    flex={1}
                                    alignItems="center"
                                    justifyContent="flex-end"
                                    flexDirection="row">
                                    <Text variant="regular-14">
                                        5 completed jobs
                                    </Text>
                                    <MaterialCommunityIcons
                                        name="chevron-down"
                                        size={16}
                                        color={theme.colors.black}
                                    />
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            flex={0.2}
                            borderBottomWidth={0.5}
                            borderBottomColor="lightGray"
                            paddingVertical="m">
                            <Labels
                                labels={labels}
                                color="blueLight"
                                textColor="bluePrimary"
                            />
                        </Box>
                        <Box flex={1.6} paddingVertical="m" paddingRight="l">
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
                                alignItems="center">
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
});

export default Profile;