'use client';
import { User } from '../../../types/user';
import AccountSwitcher from './AccountSwitcher';
import NavGroup from './NavGroup';
import NavItem from './NavItem';

import { Box, Circle, Flex, Stack } from '@chakra-ui/react';
import {
  BiAnalyse,
  BiBookContent,
  BiBuoy,
  BiCog,
  BiCommentAdd,
  BiHome,
  BiLink,
  BiNews,
  BiRuler
} from 'react-icons/bi';

const currentUser: User = {
  email: `joe.biden@linxsecurity.com`,
  first_name: `Joe`,
  last_name: `Biden`,
}

const Sidebar = () => {

    return (
    <Box w="64" bg="gray.900" color="white" fontSize="sm">
    <Flex h="full" direction="column" px="4" py="4">
      <AccountSwitcher {...currentUser} />
      <Stack spacing="8" flex="1" overflow="auto" pt="8">
        <Stack spacing="1">
          <NavItem active icon={<BiHome />} label="Get Started" />
          <NavItem icon={<BiCommentAdd />} label="Inbox" />
        </Stack>
        <NavGroup label="Integrations">
          <NavItem icon={<BiLink />} label="Connections" />
          <NavItem icon={<BiBookContent />} label="Complience" />
        </NavGroup>

        <NavGroup label="Insights">
          <NavItem icon={<BiNews />} label="Reports" />
          <NavItem icon={<BiAnalyse />} label="Automations" />
          <NavItem icon={<BiRuler />} label="Rules" />
        </NavGroup>
      </Stack>
      <Box>
        <Stack spacing="1">
          <NavItem subtle icon={<BiCog />} label="Settings" />
          <NavItem
            subtle
            icon={<BiBuoy />}
            href=''
            label="Help & Support"
            endElement={<Circle size="2" bg="purple.400" />}
          />
        </Stack>
      </Box>
    </Flex>
  </Box>)
}

export default Sidebar