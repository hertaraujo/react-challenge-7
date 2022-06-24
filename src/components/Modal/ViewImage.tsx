import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Link,
  Image,
  Box,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />

        <ModalContent
          mx="auto"
          w="auto"
          h="auto"
          maxW="900px"
          maxH="600px"
          bg="transparent"
          borderRadius="8"
        >
          <ModalBody p="0" textAlign="center">
            <Image src={imgUrl} maxW="900px" maxH="600px" borderTopRadius="8" />
          </ModalBody>

          <ModalFooter
            h="32px"
            justifyContent="start"
            bg="pGray.800"
            borderBottomRadius={8}
          >
            <Link href={imgUrl} isExternal>
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
