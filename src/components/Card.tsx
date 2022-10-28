import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
    VariantProps,
    createRestyleComponent,
    createVariant,
    SpacingProps,
    PositionProps,
    LayoutProps,
    BorderProps,
    ResponsiveValue,
} from '@shopify/restyle';

import { Theme, Box } from '../../constants/theme';

type Props = VariantProps<Theme, 'cardVariants'> &
    SpacingProps<Theme> &
    PositionProps<Theme> &
    BorderProps<Theme> &
    LayoutProps<Theme> & {
        onPress?: () => void;
        children: React.ReactNode;
        style?: object;
        backgroundColor?: ResponsiveValue<keyof Theme['colors'], Theme>;
        testID?: string;
    };

const CardContainer = createRestyleComponent<
    VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>,
    Theme
>([createVariant({ themeKey: 'cardVariants' })], Box);

export const Card = ({ children, variant, ...rest }: Props) => (
    <CardContainer variant={variant} {...rest}>
        {children}
    </CardContainer>
);

export const TouchableCard = ({
    children,
    variant,
    onPress,
    testID,
    ...rest
}: Props) => (
    <CardContainer variant={variant} {...rest}>
        <TouchableOpacity testID={testID} onPress={onPress}>
            {children}
        </TouchableOpacity>
    </CardContainer>
);