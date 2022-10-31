import { ResponsiveValue } from '@shopify/restyle';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Box, Text, Theme } from '../../constants/theme';
import _ from 'lodash';
interface Props {
    labels: Array<string>;
    activeLabels?: Array<string>;
    handlePress?: (label) => void;
    color: ResponsiveValue<keyof Theme['colors'], Theme>;
    borderColor?: ResponsiveValue<keyof Theme['colors'], Theme>;
    textColor: ResponsiveValue<keyof Theme['colors'], Theme>;
}

const Labels = (props: Props) => {
    const { color, textColor, labels } = props;
    const renderLabels = () => {
        return labels.map((label, index) => {
            return (
                <Box
                    key={index}
                    minWidth={72}
                    style={styles.borderRadius}
                    borderColor={color}
                    borderWidth={1}
                    backgroundColor={color}
                    alignItems="center"
                    justifyContent="center"
                    marginRight="s">
                    <Text
                        variant="regular-12"
                        paddingVertical="xs"
                        color={textColor}>
                        {label}
                    </Text>
                </Box>
            );
        });
    };
    return (
        <Box flexDirection="row" alignItems="center">
            {renderLabels()}
        </Box>
    );
};

export const TouchableLabels = (props: Props) => {
    const { color, textColor, borderColor, labels, activeLabels, handlePress } =
        props;
    const renderLabels = () => {
        return labels.map((label, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    onPress={() => handlePress(label)}>
                    <Box
                        paddingVertical={'xs'}
                        minWidth={72}
                        style={styles.borderRadius}
                        borderColor={borderColor}
                        borderWidth={1}
                        backgroundColor={
                            _.includes(activeLabels, label)
                                ? borderColor
                                : color
                        }
                        alignItems="center"
                        justifyContent="center"
                        marginRight="s">
                        <Text
                            variant="regular-12"
                            paddingVertical="xs"
                            color={
                                _.includes(activeLabels, label)
                                    ? color
                                    : textColor
                            }>
                            {label}
                        </Text>
                    </Box>
                </TouchableOpacity>
            );
        });
    };
    return (
        <Box flexDirection="row" alignItems="center">
            {renderLabels()}
        </Box>
    );
};

const styles = StyleSheet.create({
    borderRadius: {
        borderRadius: 24,
    },
});

export default Labels;