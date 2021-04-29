import * as React from 'react';
import {
  Input,
  Button,
  FormControl,
  FormHelperText,
  Box,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Icon, IconNames } from '@nypl/design-system-react-components';

type SearchBarProps = React.ComponentProps<typeof FormControl> &
  React.ComponentProps<typeof Input> & {
    helpText?: string;
    errorText?: string;
  };

const Searchbar: React.FC<SearchBarProps> = ({
  helpText,
  errorText,
  value,
  onChange,
  placeholder = 'Search for something...',
  isDisabled,
  ...rest
}) => {
  return (
    <FormControl isDisabled={isDisabled} {...rest}>
      <Box display="flex" alignItems="stretch">
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          borderRight="none"
        />
        <Button
          colorScheme="blue"
          px={4}
          // move the button left so there is not a gap in the border
          // caused by the rounded corners
          ml="-2px"
          height="auto"
          isDisabled={isDisabled}
          leftIcon={
            <Box
              as={Icon}
              width={4}
              fill="white"
              decorative
              modifiers={['small', 'icon-left']}
              name={IconNames.search}
            />
          }
        >
          Search
        </Button>
      </Box>
      <FormHelperText>{helpText}</FormHelperText>
      <FormErrorMessage>{errorText}</FormErrorMessage>
    </FormControl>
  );
};

export default Searchbar;
