import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  HStack,
  Icon,
  StackProps,
  Stack,
} from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icons";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest} alignItems='start'>
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text textAlign={['left', 'left', 'center']}>{children}</Text>
    </HStack>
  );
};

export function Pricing() {
  return (
    <Box mx='6'>
      <Box maxW="994px"
        margin="auto"
        mt="-216px"
        borderRadius='12px'
        overflow='hidden'
        boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'

      >
        <Flex direction={['column', 'column', 'row']}>
          <Box bg="#F0EAFB" p="60px">
            <Text fontSize="24px" fontWeight='extrabold'>
              Premium PRO
            </Text>
            <Heading as="h3" fontSize="48px">
              $329
            </Heading>
            <Text
              color="#171923"
              fontSize="18px"
              fontWeight="medium"
              mt="8px"
              mb="8px"
            >
              billed just once
            </Text>
            <Button colorScheme="purple" w={['auto', '282px', '282px']} size="lg" mt="24px">
              Get Started
            </Button>
          </Box>
          <Box p={['32px', '32px', '60px']} fontSize='lg' bg='white'>
            <Text textAlign='left'>
              Access these features when you get the pricing package for
              business.
            </Text>
            <Stack as="ul" spacing="20px" pt="24px">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
