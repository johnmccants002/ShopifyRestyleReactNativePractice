import {
    ThemeProvider,
    createBox,
    createText,
    createRestyleComponent,
    createVariant,
    spacing,
    SpacingProps,
    VariantProps,
  } from '@shopify/restyle';
  
  // See the "Defining Your Theme" readme section below
  import theme, {Theme} from './theme';
  
  const Box = createBox<Theme>();
  const Text = createText<Theme>();
  

  
  const Example = () => {
    return (
      <Box
        flex={1}
        backgroundColor="mainBackground"
        paddingVertical="xl"
        paddingHorizontal="m"
      >
        <Text variant="header">Welcome</Text>
        <Box
          flexDirection={{
            phone: 'column',
            tablet: 'row',
          }}
        >
        </Box>
      </Box>
    );
  };
  
export default Example