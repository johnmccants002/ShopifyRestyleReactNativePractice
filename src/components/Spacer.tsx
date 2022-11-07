import React from 'react';
import { StyleSheet } from 'react-native';
import { Box } from '../../constants/theme'
import HeaderV2 from '../components/HeaderV2'
import Header2 from '../../assets/header2.svg'

interface SpacerProps {
    height?: number | string;
}

const Spacer = (props: SpacerProps) => {
    return (
    <Box style={styles.spacer}  >
        <Box aspectRatio={375 / 176}>
            <Header2 width='100%' height='100%'/>
        </Box>
    </Box>
          
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

