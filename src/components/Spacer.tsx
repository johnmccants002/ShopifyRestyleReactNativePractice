import React from 'react';
import { StyleSheet } from 'react-native';
import { Box } from '../../constants/theme'
import HeaderV2 from '../components/HeaderV2'

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

const Spacer2 = (props: SpacerProps) => {
    return (
        <Box flex={1} style={{overflow: 'hidden'}} >
            <Box style={{justifyContent: 'center', width: '200%'}}>
            <HeaderV2 style={{alignSelf: 'stretch'}}/>
        </Box>
        </Box>
          
    );
};