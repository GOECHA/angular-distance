import React from 'react'
import './SelectedReservationModal.css'

import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    useDisclosure,
  } from '@chakra-ui/react'



const SelectedReservationModal = ({backGroundImage, planetName, moonOptions}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const OverlayOne = () => (
      <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
      />
      )
      
      const [overlay, setOverlay] = React.useState(<OverlayOne />)
      
  
  return (
    <>
     <Button
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        More Info
      </Button>
      
      <Modal  isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent className="planet-modal">
          <ModalHeader fontSize='3xl' color='white' textShadow='2px 2px #020038' >{planetName} </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <img className="cardBackground" src={backGroundImage} alt={planetName} />
            <Text >Custom backdrop filters!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SelectedReservationModal