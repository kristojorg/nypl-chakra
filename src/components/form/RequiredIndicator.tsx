import * as React from 'react';
import { useFormControlContext, Box } from '@chakra-ui/react';

/**
 * Used to show a "required" text to indicate that
 * a field is required.
 */
const RequiredIndicator = React.forwardRef<
  'span',
  React.ComponentPropsWithRef<'span'>
>((props, ref) => {
  const field = useFormControlContext();

  return (
    <Box
      as="span"
      {...field?.getRequiredIndicatorProps(props, ref)}
      __css={{ fontSize: '-2', fontWeight: 'regular' }}
    >
      {field?.isRequired ? 'Required' : 'Optional'}
    </Box>
  );
});

export default RequiredIndicator;
