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
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
            <Stack.Screen name="Home" component={ChatHome} options={{headerTitle: 'Chat', headerStyle: {
                        backgroundColor: theme.colors.bluePrimary,
                        shadowColor: 'transparent',
                    },
                    headerTintColor: theme.colors.white,
                    headerLeft: () => <HeaderLeft />,
                    headerRight: () => <HeaderRight />,}}/>
        </Stack.Navigator>
    );
};

export default AppNavigator;