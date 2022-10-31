import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    VariantProps,
    createRestyleComponent,
    createVariant,
    BorderProps,
    LayoutProps,
    useRestyle,
    spacing,
    border,
    color,
    ResponsiveValue,
} from '@shopify/restyle';

import { Theme, Text, Box } from '../../constants/theme';

type Props = VariantProps<Theme, 'buttonVariants'> & {
    style?: object;
    testID?: string;
    label?: string;
    icon?: string;
    onPress?: () => void;
    children?: React.ReactNode;
    textVariant?: ResponsiveValue<keyof Theme['textVariants'], Theme>;
    textColor?: ResponsiveValue<keyof Theme['colors'], Theme>;
    backgroundColor?: ResponsiveValue<keyof Theme['colors'], Theme>;
    iconColor?: ResponsiveValue<keyof Theme['colors'], Theme>;
    containerBackgroundColor?: ResponsiveValue<keyof Theme['colors'], Theme>;
    size?: number;
    width?: number | string;
    height?: number | string;
    disabled?: boolean;
};

// type ButtonProps = VariantProps<Theme, 'buttonVariants'> & {
//     testID?: string;

// }

const ButtonContainer = createRestyleComponent<
    VariantProps<Theme, 'buttonVariants'> &
        BorderProps<Theme> &
        LayoutProps<Theme> &
        React.ComponentProps<typeof Box>,
    Theme
>([createVariant({ themeKey: 'buttonVariants' })], Box);

export const Button = ({
    label,
    variant,
    children,
    textColor,
    containerBackgroundColor,
    testID,
    onPress,
    ...props
}: Props) => {
    return (
        <ButtonContainer
            variant={variant}
            backgroundColor={containerBackgroundColor}
            testID={testID}
            {...props}>
            <TouchableOpacity onPress={onPress} style={styles.touchable}>
                {variant === 'iconButton' ? (
                    <View style={styles.buttonInner}>{children}</View>
                ) : (
                    <Text variant="buttonLabel" color={textColor}>
                        {label}
                    </Text>
                )}
            </TouchableOpacity>
        </ButtonContainer>
    );
};

export const TextButton = ({
    label,
    variant,
    textColor,
    backgroundColor,
    textVariant,
    onPress,
    ...rest
}: Props) => {
    const props = useRestyle([spacing, border, color], rest);
    return (
        <ButtonContainer
            variant={variant}
            backgroundColor={backgroundColor}
            {...props}>
            <TouchableOpacity onPress={onPress} style={styles.touchable}>
                <Text variant={textVariant} color={textColor}>
                    {label}
                </Text>
            </TouchableOpacity>
        </ButtonContainer>
    );
};

export const IconButton = ({
    variant,
    icon,
    iconColor,
    size,
    onPress,
    ...rest
}: Props) => {
    const props = useRestyle([spacing, border, color], rest);
    return (
        <ButtonContainer variant={variant} {...props}>
            <TouchableOpacity onPress={onPress} style={styles.touchable}>
                <MaterialCommunityIcons
                    name={icon}
                    size={size}
                    // color={iconColor}
                />
            </TouchableOpacity>
        </ButtonContainer>
    );
};
const styles = StyleSheet.create({
    buttonInner: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchable: { width: '100%' },
});