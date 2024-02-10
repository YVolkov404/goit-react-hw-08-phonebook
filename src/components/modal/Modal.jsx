import { ModalForm } from 'components/form/ModalForm';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  ModalFooter,
} from '@chakra-ui/react';

export const ModalBox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button w="xs" onClick={onOpen}>
        Add Contact
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text>You can add a contact here</Text>
          </ModalHeader>

          <ModalCloseButton rounded="full" />
          <ModalBody>
            <ModalForm />
          </ModalBody>

          <ModalFooter>
            <Text as="copyright">fantom_ass 2014</Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
