import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface HeaderProps {
    color: string;
}

const CustomHeaderButton = () => {
    return (
        <HeaderButton
            title=""
            IconComponent={MaterialCommunityIcons}
            iconSize={23}
            color={'blue'}
        />
    );
};

export default CustomHeaderButton;