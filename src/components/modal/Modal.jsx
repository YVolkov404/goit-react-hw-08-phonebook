import { ModalForm } from 'components/form/ModalForm';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from '@chakra-ui/react';

export const ModalBox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button w='xs' onClick={onOpen}>
        Add Contact
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text>You can add a contact here</Text>
          </ModalHeader>

          <ModalCloseButton rounded='full' />
          <ModalBody>
            <ModalForm />
          </ModalBody>

          <ModalFooter>
            <Button type='submit' onClick={onClose}>
              Add Contact
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
