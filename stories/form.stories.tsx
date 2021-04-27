import { chakra, PropsOf, useMultiStyleConfig } from '@chakra-ui/system';
import * as React from 'react';
import {
  FormControlOptions,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormHelperText,
  useFormControl,
} from '@chakra-ui/react';
import FormLabel from '../src/components/form/Label';

export default {
  title: 'Form Input',
  decorators: [
    (story: Function) => (
      <chakra.div mx="auto" mt="40px" maxW="400px">
        {story()}
      </chakra.div>
    ),
  ],
};

type OmittedTypes = 'disabled' | 'required' | 'readOnly' | 'size';

type InputProps = Omit<PropsOf<'input'>, OmittedTypes> &
  FormControlOptions & {
    // Input component as `size` by default so it resolves to `never`
    // Omitted it from types in Line 16 and added back here.
    size?: string;
  };

// Create an input that consumes useFormControl
type Props = { focusBorderColor?: string; errorBorderColor?: string };

const Input = React.forwardRef<HTMLInputElement, InputProps & Props>(
  (props, ref) => {
    const styles = useMultiStyleConfig('Input', props);
    const inputProps = useFormControl<HTMLInputElement>(props);
    return <chakra.input ref={ref} __css={styles.field} {...inputProps} />;
  }
);

export const Default = () => (
  <FormControl id="first-name" isRequired>
    <FormLabel>Label</FormLabel>
    <Input placeholder="Input Placeholder" />
    <FormHelperText>Helper text</FormHelperText>
    <FormErrorMessage>Your First name is invalid</FormErrorMessage>
  </FormControl>
);

export const Optional = () => (
  <FormControl id="first-name">
    <FormLabel>Label</FormLabel>
    <Input placeholder="Input Placeholder" />
    <FormHelperText>Helper text</FormHelperText>
    <FormErrorMessage>Your First name is invalid</FormErrorMessage>
  </FormControl>
);

export const Errored = () => (
  <FormControl id="first-name" isRequired isInvalid>
    <FormLabel>Label</FormLabel>
    <Input placeholder="Input Placeholder" />
    <FormErrorMessage>Your First name is invalid</FormErrorMessage>
  </FormControl>
);

export const Disabled = () => (
  <FormControl id="first-name" isDisabled>
    <FormLabel>Disabled input</FormLabel>
    <Input placeholder="Input Placeholder" />
    <FormHelperText>Disabled Reasoning</FormHelperText>
  </FormControl>
);
