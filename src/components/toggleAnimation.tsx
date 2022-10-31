import {LayoutAnimation} from 'react-native'

export const toggleAnimation = {
    duration: 300,
    update: {
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut
    },
    delete: {
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut
    }
}
