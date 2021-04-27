import { CheckIcon, PhoneIcon } from '@chakra-ui/icons';
import { Stack } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import * as React from 'react';
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from '@chakra-ui/react';

export default {
  title: 'Input',
  decorators: [
    (story: Function) => (
      <chakra.div maxW="560px" mx="auto" mt="40px">
        {story()}
      </chakra.div>
    ),
  ],
};

export const Basic = () => <Input placeholder="Basic input" />;

export const WithSizes = () => (
  <Stack align="start">
    {['xs', 'sm', 'md', 'lg'].map(size => (
      <Input key={size} size={size} placeholder="This is an input component" />
    ))}
  </Stack>
);

export const WithStates = () => (
  <Stack align="start">
    <Input placeholder="Idle" />
    <Input isInvalid placeholder="isInvalid" />
    <Input isDisabled placeholder="isDisabled" />
    <Input isReadOnly placeholder="isReadonly" />
  </Stack>
);

export const WithInputAddon = () => (
  <Stack align="start">
    <InputGroup>
      <InputLeftAddon children="+234" />
      <Input placeholder="Phone number..." />
    </InputGroup>

    <InputGroup size="sm">
      <InputLeftAddon children="https://" />
      <Input placeholder="website.com" />
      <InputRightAddon children=".com" />
    </InputGroup>
  </Stack>
);

export const WithInputElement = () => (
  <Stack align="start">
    <InputGroup>
      <InputLeftElement children={<PhoneIcon color="gray.300" />} />
      <Input paddingStart="60px" type="tel" placeholder="Phone number" />
    </InputGroup>

    <InputGroup size="sm">
      <InputLeftElement color="gray.300" fontSize="1.2em" children="$" />
      <Input placeholder="Enter amount" />
      <InputRightElement children={<CheckIcon color="green.500" />} />
    </InputGroup>
  </Stack>
);

export function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        paddingEnd="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
      />
      <InputRightElement width="4.5rem">
        <chakra.button onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </chakra.button>
      </InputRightElement>
    </InputGroup>
  );
}
