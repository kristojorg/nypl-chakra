import * as React from 'react';
import { forwardRef } from '@chakra-ui/react';
import { useStyleConfig, Box, useFormControlContext } from '@chakra-ui/react';
import RequiredIndicator from './RequiredIndicator';

type FormLabelProps = React.ComponentProps<'label'> & {
  requiredIndicator?: boolean;
};

type LabelAttrs = {
  htmlFor: string;
  form: string;
  [key: string]: any;
};

/**
 * Used to enhance the usability of form controls.
 *
 * It is used to inform users as to what information
 * is requested for a form field.
 *
 * ♿️ Accessibility: Every form field should have a form label.
 */
const FormLabel = forwardRef<FormLabelProps, 'label'>((props, ref) => {
  const styles = useStyleConfig('FormLabel', props);

  const { className, children, requiredIndicator = true, ...rest } = props;

  const field = useFormControlContext();

  const labelProps = field.getLabelProps(rest, ref) as LabelAttrs;

  return (
    <Box
      as="label"
      {...labelProps}
      className={className}
      __css={{
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'start',
        alignItems: 'flex-end',
        ...styles,
      }}
    >
      {children}
      {requiredIndicator && <RequiredIndicator />}
    </Box>
  );
});

export default FormLabel;
