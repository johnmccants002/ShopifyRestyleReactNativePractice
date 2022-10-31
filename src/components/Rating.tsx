import React from 'react';
import {Text} from 'react-native'
import theme, { Box} from '../../constants/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    rating: number;
    cap: number;
    size: number;
    color: string;
}

const Rating = (props: Props) => {
    const renderStars = (rating: number, cap: number) => {
        return Array.from(Array(cap).keys()).map((_, i) => {
            let star_name = i < rating ? 'star' : 'star-outline';
            return (
                <MaterialCommunityIcons
                    key={i}
                    name={star_name}
                    size={props.size}
                    color={theme.colors.black}
                />
            );
        });
    };
    const textVariant = 'regular-16';
    // let variant = theme.textVariants[textVariant];
    return (
        <Box flexDirection="row" alignItems="center">
            <Text variant={textVariant} marginRight="xs" marginTop="xs">
                {props.rating}
            </Text>
            {renderStars(props.rating, props.cap)}
        </Box>
    );
};

export default Rating;
