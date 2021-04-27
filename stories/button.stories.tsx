import {
  ArrowForwardIcon,
  EmailIcon,
  PhoneIcon,
  SearchIcon,
} from '@chakra-ui/icons';
import { Container, HStack, Stack } from '@chakra-ui/layout';
import * as React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { BeatLoader } from 'react-spinners';
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react';

export default {
  title: 'Button',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const primary = () => <Button colorScheme="blue">Button</Button>;

export const secondary = () => <Button variant="secondary">Button</Button>;

export const donation = () => (
  <Button colorScheme="red">Donate to this library</Button>
);

export const disabled = () => (
  <ButtonGroup>
    <Button isDisabled>Button</Button>
    <Button variant="outline" isDisabled>
      Secondary
    </Button>
    <Button variant="pill" isDisabled>
      Disabled
    </Button>
  </ButtonGroup>
);

export const pill = () => (
  <ButtonGroup>
    <Button variant="pill">Button</Button>
    <Button variant="pill" isDisabled>
      Disabled
    </Button>
  </ButtonGroup>
);

export const withVariants = () => (
  <ButtonGroup>
    <Button variant="solid" colorScheme="blue">
      Solid
    </Button>
    <Button colorScheme="red">Donate to this library</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
    <Button variant="pill" size="sm" colorScheme="gray">
      Pill
    </Button>
  </ButtonGroup>
);

export const withSizes = () => (
  <HStack>
    <Button colorScheme="blue" size="xs">
      Button
    </Button>
    <Button colorScheme="blue" size="sm">
      Button
    </Button>
    <Button colorScheme="blue" size="md">
      Button
    </Button>
    <Button colorScheme="blue" size="lg">
      Button
    </Button>
  </HStack>
);

export const WithIcon = () => (
  <Stack direction="row" spacing={4}>
    <Button leftIcon={<EmailIcon />} variant="solid" colorScheme="blue">
      Email
    </Button>
    <Button rightIcon={<ArrowForwardIcon />} variant="outline">
      Call us
    </Button>
  </Stack>
);

export const WithLoading = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button isLoading colorScheme="blue">
      Email
    </Button>

    <Button
      isLoading
      colorScheme="blue"
      spinner={<BeatLoader size={8} color="white" />}
    >
      Click me
    </Button>

    <Button isLoading loadingText="Submitting..." variant="outline">
      Submit
    </Button>
  </Stack>
);

export const WithLoadingSpinnerPlacement = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button
      isLoading
      loadingText="Loading"
      variant="outline"
      spinnerPosition="start"
    >
      Submit
    </Button>
    <Button
      isLoading
      loadingText="Loading"
      variant="outline"
      spinnerPlacement="end"
    >
      Continue
    </Button>
  </Stack>
);

export const iconButton = () => (
  <Stack direction="row">
    <IconButton
      borderRadius="sm"
      aria-label="Search database"
      icon={<SearchIcon />}
    />

    <IconButton
      borderRadius="sm"
      colorScheme="gray"
      aria-label="Search database"
      icon={<SearchIcon />}
    />

    <IconButton aria-label="Call Segun" size="lg" borderRadius="sm">
      <PhoneIcon />
    </IconButton>
  </Stack>
);

export const socialButton = () => (
  <Stack direction="row">
    <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
      Facebook
    </Button>
    <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
      Twitter
    </Button>
  </Stack>
);
