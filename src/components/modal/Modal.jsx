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
  Box,
} from '@chakra-ui/react';

export const ModalBox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box w="100%" mb="1.5rem" textAlign="center">
        <Button w="auto" onClick={onOpen}>
          Add Contact
        </Button>
      </Box>

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
            <Text as="samp" variant="selected">
              fantom_ass 2024
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
