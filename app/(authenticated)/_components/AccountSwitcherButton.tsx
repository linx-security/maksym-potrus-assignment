import { Box, Flex, FlexProps, HStack, Img, useMenuButton } from '@chakra-ui/react'
import { HiSelector } from 'react-icons/hi'
import { User } from '../../../types/user'
import { FC } from 'react';
import { getFullName } from '../../_lib/string-helpers';

type Props = FlexProps & User;

const AccountSwitcherButton: FC<Props> = (props) => {
  const {email, first_name,last_name, ...rest} = props
  const buttonProps = useMenuButton(rest)
  return (
    <Flex
      as="button"
      {...buttonProps}
      w="full"
      display="flex"
      alignItems="center"
      rounded="lg"
      bg="gray.700"
      px="3"
      py="2"
      fontSize="sm"
      userSelect="none"
      cursor="pointer"
      outline="0"
      transition="all 0.2s"
      _active={{ bg: 'gray.600' }}
      _focus={{ shadow: 'outline' }}
    >
      <HStack flex="1" spacing="3">
        <Img
          w="8"
          h="8"
          rounded="md"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fG1hbiUyMHNpbWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=100"
          alt="Chakra UI"
        />
        <Box textAlign="start">
          <Box noOfLines={1} fontWeight="semibold">
            {getFullName({first_name, last_name})}
          </Box>
          <Box fontSize="xs" color="gray.400">
            Linx Security
          </Box>
        </Box>
      </HStack>
      <Box fontSize="lg" color="gray.400">
        <HiSelector />
      </Box>
    </Flex>
  )
}

export default AccountSwitcherButton;