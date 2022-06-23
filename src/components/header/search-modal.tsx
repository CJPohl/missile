import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef, useState, KeyboardEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import useSearch from '../../lib/hooks/useSearch';

// Searching component into spell store
const SearchModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const intiialRef = useRef(null);

  // Custom hook
  const { searchQuery, setSearchQuery, handleSearch } = useSearch();

  // reset searchbar
  const modalClose = () => {
    onClose();
    setSearchQuery('');
  };

  return (
    <>
      <Button
        onClick={onOpen}
        variant='outline'
        leftIcon={<FiSearch />}
        colorScheme='dark'
        gap='.5rem'
      >
        <Text>SEARCH</Text>
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={modalClose}
        initialFocusRef={intiialRef}
        isCentered
        motionPreset='slideInBottom'
        size='2xl'
      >
        <ModalOverlay />
        <ModalContent>
          <InputGroup color='dark'>
            <InputLeftElement
              color='dark'
              pointerEvents='none'
              children={<FiSearch />}
            />
            <Input
              ref={intiialRef}
              fontFamily='normal'
              fontSize='1rem'
              placeholder='Search the store'
              variant='unflushed'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== 'Enter' || searchQuery === '') return;
                handleSearch();
                modalClose();
              }}
            />
          </InputGroup>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
