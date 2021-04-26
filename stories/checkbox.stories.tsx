/* eslint-disable jsx-a11y/label-has-associated-control */
import { Container, Stack } from '@chakra-ui/layout';
import * as React from 'react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';

export default {
  title: 'Checkbox',
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
};

export const Basic = () => <Checkbox>Hello</Checkbox>;

export const Disabled = () => <Checkbox isDisabled>Disabled</Checkbox>;

export const Readonly = () => <Checkbox isReadOnly>Readonly</Checkbox>;

export const Invalid = () => <Checkbox isInvalid>Invalid</Checkbox>;

export const Sizes = () => {
  const sizes = ['sm', 'md', 'lg'];

  return (
    <Stack direction="row">
      {sizes.map(size => (
        <Checkbox key={size} size={size} />
      ))}
    </Stack>
  );
};

export const CheckboxGroupExample = () => {
  return (
    <CheckboxGroup
      defaultValue={['one', 'two']}
      onChange={value => console.log(value)}
    >
      <Stack align="start" direction={['column', 'row']} spacing={[2, 4, 6]}>
        <Checkbox value="one">One</Checkbox>
        <Checkbox value="two">Two</Checkbox>
        <Checkbox value="three">Three</Checkbox>
      </Stack>
    </CheckboxGroup>
  );
};

export const ResponsiveCheckboxGroup = () => {
  return (
    <CheckboxGroup
      defaultValue={['one', 'two']}
      onChange={value => console.log(value)}
    >
      <Stack spacing={[2, 4, 6]} direction={['column', 'row']}>
        <Checkbox value="one">One</Checkbox>
        <Checkbox value="two">Two</Checkbox>
        <Checkbox value="three">Three</Checkbox>
      </Stack>
    </CheckboxGroup>
  );
};
