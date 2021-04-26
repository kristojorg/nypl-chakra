const Checkbox = {
  // style object for base or default style
  baseStyle: {
    control: {
      borderColor: 'gray.500',
      _hover: {
        bg: 'white',
      },
      _checked: {
        bg: 'white',
        color: 'gray.800',

        _hover: {
          bg: 'white',
          borderColor: 'gray.600',
        },
      },
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size`, `variant`, `colorScheme`
  defaultProps: {
    size: 'md',
    colorScheme: 'gray',
  },
};

export default Checkbox;
