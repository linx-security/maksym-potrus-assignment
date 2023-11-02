
import {
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import  AccountSwitcherButton  from './AccountSwitcherButton'
import Link from 'next/link'
import { FC } from 'react';
import { User } from '../../../types/user';

type Props = {} & User

const AccountSwitcher: FC<Props> = (props) => {
  const {email} = props
  return (
    <Menu>
      <AccountSwitcherButton {...props} />
      <MenuList shadow="lg" py="4" color={useColorModeValue('gray.600', 'gray.200')} px="3">
        <Text fontWeight="medium" mb="2">
          {email}
        </Text>
        <MenuOptionGroup defaultValue="chakra-ui">
          <MenuItemOption value="chakra-ui" fontWeight="semibold" rounded="md">
            Chakra UI
          </MenuItemOption>
          <MenuItemOption value="careerlyft" fontWeight="semibold" rounded="md">
            CareerLyft
          </MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuItem rounded="md">Workspace settings</MenuItem>
        <MenuItem rounded="md" as={Link} href={`https://the-internet.herokuapp.com/login`}>Login (E2E)</MenuItem>
        <MenuDivider />
        <MenuItem rounded="md">Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default AccountSwitcher