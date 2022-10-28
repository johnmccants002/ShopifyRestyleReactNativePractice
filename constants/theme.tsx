// import { createBox, createText, createTheme } from '@shopify/restyle';

// const palette = {
//     blueLight: '#DAECFF',
//     bluePrimary: '#00428C',
//     blueDark: '#00254F',

//     greenLight: '#51DD9C1A',
//     greenPrimary: '#51DD9C',
//     greenDark: '#1A9771',

//     red: '#FB5A36',
//     redLight: '#FB5A3614',

//     black: '#0B0B0B',
//     gray: '#A8A8A8',
//     imageIcon: '#DCDCDC',
//     lightGray: '#DEDEDE',
//     grayDark: '#262626',
//     brightWhite: '#FFF',
//     white: '#F0F2F3',
//     whiteOpaque: 'rgba(240, 242, 243, .08)',

//     transparent: 'rgba(0,0,0,0)',
// };

// const theme = createTheme({
//     colors: {
//         backgroundLight: palette.white,
//         backgroundDark: palette.black,
//         cardPrimaryBackground: palette.bluePrimary,
//         buttonPrimaryBackground: palette.bluePrimary,
//         buttonSecondaryBackground: palette.greenPrimary,
//         buttonWhiteBackground: palette.white,
//         red: palette.red,
//         redLight: palette.redLight,

//         imageIcon: palette.imageIcon,

//         blueLight: palette.blueLight,
//         bluePrimary: palette.bluePrimary,
//         blueDark: palette.blueDark,

//         greenLight: palette.greenLight,
//         greenPrimary: palette.greenPrimary,
//         greenDark: palette.greenDark,

//         gray: palette.gray,
//         lightGray: palette.lightGray,
//         grayDark: palette.grayDark,
//         black: palette.black,

//         brightWhite: palette.brightWhite,
//         white: palette.white,
//         whiteOpaque: palette.whiteOpaque,

//         transparent: palette.transparent,
//     },
//     backgroundColors: {
//         backgroundLight: palette.white,
//         backgroundDark: palette.black,
//         cardPrimaryBackground: palette.bluePrimary,
//         buttonPrimaryBackground: palette.bluePrimary,
//         buttonSecondaryBackground: palette.greenPrimary,
//         buttonWhiteBackground: palette.white,
//         red: palette.red,
//         redLight: palette.redLight,

//         imageIcon: palette.imageIcon,

//         blueLight: palette.blueLight,
//         bluePrimary: palette.bluePrimary,
//         blueDark: palette.blueDark,

//         greenLight: palette.greenLight,
//         greenPrimary: palette.greenPrimary,
//         greenDark: palette.greenDark,

//         gray: palette.gray,
//         lightGray: palette.lightGray,
//         grayDark: palette.grayDark,
//         black: palette.black,

//         brightWhite: palette.brightWhite,
//         white: palette.white,
//         whiteOpaque: palette.whiteOpaque,

//         transparent: palette.transparent,
//     },
//     textVariants: {
//         header: {
//             fontFamily: 'Metropolis-Bold',
//             fontWeight: 'bold',
//             fontSize: 34,
//             lineHeight: 42.5,
//             color: 'black',
//         },
//         buttonLabel: {
//             fontFamily: 'Metropolis-Bold',
//             fontStyle: 'normal',
//             fontWeight: '800',
//             fontSize: 16,
//             lineHeight: 16,
//             alignSelf: 'center',
//             color: 'backgroundLight',
//         },
//         'light-12': {
//             fontFamily: 'Metropolis-Light',
//             fontStyle: 'normal',
//             fontWeight: '400',
//             fontSize: 12,
//             lineHeight: 12,
//         },
//         'light-14': {
//             fontFamily: 'Metropolis-Light',
//             fontStyle: 'normal',
//             fontWeight: '400',
//             fontSize: 14,
//             lineHeight: 14,
//         },
//         'light-16': {
//             fontFamily: 'Metropolis-Light',
//             fontStyle: 'normal',
//             fontWeight: '400',
//             fontSize: 16,
//             lineHeight: 16,
//         },
//         'medium-10': {
//             fontFamily: 'Metropolis-Medium',
//             fontStyle: 'normal',
//             fontWeight: '400',
//             fontSize: 10,
//             lineHeight: 10,
//         },
//         'medium-12': {
//             fontFamily: 'Metropolis-Medium',
//             fontStyle: 'normal',
//             fontWeight: '600',
//             fontSize: 12,
//             lineHeight: 12,
//         },
//         'medium-14': {
//             fontFamily: 'Metropolis-Medium',
//             fontStyle: 'normal',
//             fontWeight: '600',
//             fontSize: 14,
//             lineHeight: 14,
//         },
//         'regular-12': {
//             fontFamily: 'Metropolis-Regular',
//             fontStyle: 'normal',
//             fontWeight: '400',
//             fontSize: 12,
//             lineHeight: 12,
//         },
//         'regular-14': {
//             fontFamily: 'Metropolis-Regular',
//             fontStyle: 'normal',
//             fontWeight: '400',
//             fontSize: 14,
//             lineHeight: 14,
//         },
//         'regular-16': {
//             fontFamily: 'Metropolis-Regular',
//             fontStyle: 'normal',
//             fontWeight: '400',
//             fontSize: 16,
//             lineHeight: 16,
//         },
//         'regular-18': {
//             fontFamily: 'Metropolis-Regular',
//             fontStyle: 'normal',
//             fontWeight: '400',
//             fontSize: 18,
//             lineHeight: 18,
//         },
//         'bold-12': {
//             fontFamily: 'Metropolis-Bold',
//             fontStyle: 'normal',
//             fontWeight: '800',
//             fontSize: 12,
//             lineHeight: 12,
//         },
//         'bold-14': {
//             fontFamily: 'Metropolis-Bold',
//             fontStyle: 'normal',
//             fontWeight: '800',
//             fontSize: 14,
//             lineHeight: 14,
//         },
//         'semiBold-12': {
//             fontFamily: 'Metropolis-Bold',
//             fontStyle: 'normal',
//             fontWeight: '600',
//             fontSize: 12,
//             lineHeight: 12,
//         },
//         'semiBold-14': {
//             fontFamily: 'Metropolis-Bold',
//             fontStyle: 'normal',
//             fontWeight: '600',
//             fontSize: 14,
//             lineHeight: 14,
//         },
//         'semiBold-16': {
//             fontFamily: 'Metropolis-Medium',
//             fontStyle: 'normal',
//             fontWeight: '600',
//             fontSize: 16,
//             lineHeight: 16,
//         },
//         'semiBold-18': {
//             fontFamily: 'Metropolis-Medium',
//             fontStyle: 'normal',
//             fontWeight: '600',
//             fontSize: 18,
//             lineHeight: 18,
//         },
//         'semiBold-22': {
//             fontFamily: 'Metropolis-Medium',
//             fontStyle: 'normal',
//             fontWeight: '600',
//             fontSize: 22,
//             lineHeight: 22,
//         },
//         subText: {
//             fontFamily: 'Metropolis-Regular',
//             fontStyle: 'normal',
//             fontWeight: '500',
//             fontSize: 16,
//             lineHeight: 16,
//             textAlign: 'center',
//             color: 'gray',
//         },
//     },
//     cardVariants: {
//         defaults: {
//             shadowColor: 'backgroundDark',
//             shadowOpacity: 0.2,
//             shadowOffset: { width: 0, height: 1 },
//             shadowRadius: 15,
//             shadowBlur: 15,
//             elevation: 5,
//             borderRadius: 20,
//         },
//         buttonContainer: {
//             height: '100%',
//             padding: 's',
//             flexDirection: 'column',
//             justifyContent: 'space-around',
//             backgroundColor: 'white',
//         },
//     },
//     buttonVariants: {
//         defaults: {
//             // We can define defaults for the variant here.
//             // This will be applied after the defaults passed to createVariant and before the variant defined below.
//             alignItems: 'center',
//             justifyContent: 'center',
//         },
//         large: {
//             height: 42,
//             spacing: 'l',
//             borderRadius: 100,
//             justifyContent: 'center',
//             alignItems: 'center',
//         },
//         largeInverse: {
//             height: 42,
//             spacing: 'l',
//             borderWidth: 1,
//             borderRadius: 100,
//             justifyContent: 'center',
//             alignItems: 'center',
//         },
//         small: {
//             width: 48,
//             height: 48,
//             borderRadius: 24,
//         },
//         iconButton: {
//             borderRadius: 50,
//             shadowColor: 'backgroundDark',
//             shadowOpacity: 0.2,
//             shadowOffset: { width: 0, height: 5 },
//             shadowRadius: 15,
//             elevation: 5,
//             padding: 'xxs',
//         },
//         textButton: {},
//     },
//     breakpoints: {
//         phone: 0,
//         longPhone: {
//             width: 0,
//             height: 812,
//         },
//         tablet: 768,
//         largeTablet: 1024,
//         desktop: 1025,
//     },
//     layout: {
//         xs: 4,
//         s: 8,
//         m: 16,
//         l: 24,
//         xl: 48,
//         os: -10,
//         om: -16,
//         ol: -24,
//         oxl: -40,
//     },
//     spacing: {
//         xxs: 2,
//         xs: 4,
//         s: 8,
//         m: 16,
//         l: 24,
//         xl: 48,
//         os: -8,
//         om: -16,
//         ol: -48,
//         oxl: -80,
//     },
//     // zIndices: {
//     //     back: 0,
//     //     mid: 1,
//     //     front: 2,
//     //     front2: 3,
//     // },
// });

// export type Theme = typeof theme;
// // Text Props: variant, color
// export const Text = createText<Theme>();

// export const Box = createBox<Theme>();

// export default theme;