import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FormControl,FormLabel,Input} from "@chakra-ui/react";
import { PlusSquareIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export default function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef<HTMLInputElement>(null)
  // const finalRef = React.useRef<HTMLInputElement>(null)

  return (
    <>
      <button onClick={onOpen}><PlusSquareIcon fontSize='xx-large' sx={{ position: 'absolute' , top: '22%' , right: '22%'}}></PlusSquareIcon></button>

      <Modal
        initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} placeholder='your title' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input placeholder='description' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}