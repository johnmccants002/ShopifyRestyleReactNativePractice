import React from 'react';
import { StyleSheet } from 'react-native';
import { Box } from '../../theme'

interface SpacerProps {
    height?: number | string;
}

const Spacer = (props: SpacerProps) => {
    return (
        <Box
            backgroundColor="bluePrimary"
            height={
                props.height ? props.height : { phone: '15%', desktop: '5%' }
            }
            style={styles.spacer}
        />
    );
};

const styles = StyleSheet.create({
    spacer: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        zIndex: 1,
    },
});
export default Spacer;