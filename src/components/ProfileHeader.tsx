import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import theme from '../../theme';


const ProfileHeader = () => {


    //   const link = props.navigation.navigate("Profile", { userId: user.userId });

    return (
        <TouchableOpacity
            style={[
                styles.profileContainer,
                // { paddingLeft: props.paddingLeft },
                // { width: props.width, height: props.height },
            ]}
            >
            <Image
                style={[
                    styles.profileImage,
                    // { width: props.width, height: props.height },
                ]}
                source={{}
                }
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        marginBottom: 10,
    },
    profileImage: {
        borderWidth: 1,
        borderColor: theme.colors.mainBackground,
        borderRadius: 50,
    },
});

export default ProfileHeader;