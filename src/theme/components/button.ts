const ButtonStyle = {
  // style object for base or default style
  baseStyle: {
    borderRadius: 'sm',
    fontWeight: 'light',
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    pill: {
      border: '1px solid',
      borderColor: 'gray.200',
      borderRadius: '2xl',
    },
  },
  // default values for `size`, `variant`, `colorScheme`
  defaultProps: {
    size: 'md',
    variant: 'solid',
    colorScheme: 'blue',
  },
};

export default ButtonStyle;
