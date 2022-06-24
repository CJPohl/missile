import {
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import schoolList from '../../lib/common/school-list';

// Drop down for header links
const LinkMenu = ({ type }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  // Create links depending on link type
  const links = schoolList.map((school: string) => (
    <MenuItem key={school} fontFamily='normal' color='dark'>
      <NextLink
        href={
          type === 'store'
            ? `/store/spells/${school}`
            : `/store/schools/${school}`
        }
      >
        <Text textTransform='capitalize'>{school}</Text>
      </NextLink>
    </MenuItem>
  ));

  return (
    <Menu isOpen={isOpen}>
      <MenuButton
      fontSize={{base: '1rem', lg: '1.2rem'}}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        onClick={
          type === 'store'
            ? () => router.push('/store/spells/all')
            : () => router.push('/store/schools/abjuration')
        }
      >
        {type.toUpperCase()}
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        {type === 'store' ? (
          <MenuItem fontFamily='normal' color='dark'>
            <NextLink href='/store/spells/all' passHref>
              All
            </NextLink>
          </MenuItem>
        ) : (
          ''
        )}
        {links}
      </MenuList>
    </Menu>
  );
};

export default LinkMenu;
