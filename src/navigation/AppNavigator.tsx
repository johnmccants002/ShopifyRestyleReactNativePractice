import ProfileHeader from '../components/ProfileHeader'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton'
import { Button } from '../components/Button';
import theme from '../../constants/theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {
    getFocusedRouteNameFromRoute,
    useNavigationState,
} from '@react-navigation/native';
import ChatHome from '../screens/ChatHome'
import ChatConvo from '../screens/ChatConvo'
import ApprovedModal from '../components/ApprovedModal'
import Profile from '../screens/Profile'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ChatTest from '../screens/ChatTest'
import ProfileReviews from '../components/ProfileReviews'
import { TouchableOpacity, Image } from 'react-native';
import {Box, Text} from '../../constants/theme'

type AppStackParamList = {
    Home: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const HeaderLeft = () => {
    return <ProfileHeader width={40} height={40} paddingLeft={15}  />;
};
const HeaderRight = () => {
    return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            {/* <Item
                title="Menu"
                iconName="menu"
                color={theme.colors.blueLight}
                onPress={() => {
                    // props.navigation.toggleDrawer();
                }}
            /> */}
        </HeaderButtons>
    );
};

const AppNavigator = () => {
    // const isWorker = true;
    // props.jobs.length ? null : props.getJobs();

    

    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={ChatHome} options={{
                headerTransparent: true,
                headerTitle: '',
                headerLeft: () => (
                    <Box style={{flexDirection: 'row'}}marginLeft='m'>
                    <TouchableOpacity>
                        <Image style={{height: 20, width: 20}} source={require('../../assets/headericon.png')}/>           
                    </TouchableOpacity>
                        <Text color='white' marginLeft='m' style={{marginTop:-3, fontFamily: 'Metropolis-SemiBold', fontSize: 26, } }>Chat</Text>
                    </Box>
                ),
                headerRight: () => (
                    <Box marginRight='m'>
                        <Image source={{uri: 'https://i.imgur.com/MWTxxA6s.jpg'}} style={{
                            height: 44, 
                            width: 44,
                            borderWidth: 1,
                            borderColor: theme.colors.white,
                            borderRadius: 50
                            }}/>
                    </Box>
                )
            }} />
             
        </Stack.Navigator>
    );
};

export default AppNavigator;