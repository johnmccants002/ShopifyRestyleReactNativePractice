import ProfileHeader from '../components/ProfileHeader'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton'
import { Button } from '../components/Button';
import theme from '../../theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {
    getFocusedRouteNameFromRoute,
    useNavigationState,
} from '@react-navigation/native';

const HeaderLeft = () => {
    return <ProfileHeader width={40} height={40} paddingLeft={15}  />;
};
const HeaderRight = () => {
    return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title="Menu"
                iconName="menu"
                color={theme.colors.mainBackground}
                onPress={() => {
                    // props.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>
    );
};