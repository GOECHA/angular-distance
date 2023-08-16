import React from "react";
import "./SelectedReservationModal.css";

import {
  Button,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const SelectedReservationModal = ({
  backGroundImage,
  planetName,
  moonOptions,
  handleClick,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        className="modal-select-planet-btn"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        More Info
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent className="planet-modal">
          <ModalHeader
          className="modal-planet-name"
            fontSize="3xl"
            color="white"
            textShadow="2px 2px #020038"
          >
            {planetName}
          </ModalHeader>
          <ModalCloseButton color="white" textShadow="2px 2px #020038" />
          <ModalBody>
            <img
              className="cardBackground"
              src={backGroundImage}
              alt={planetName}
            />
            <Text color="white">Moon Information</Text>
          </ModalBody>
          <ModalFooter>
            <Grid templateColumns="repeat(2,1fr)" gap={3}>
              <GridItem colSpan={1} h="10" bg="none">
                <Button
                  className="modal-reserve-btn"
                  onClick={(e) => {
                    handleClick(e);
                  }}
                >
                  Reserve Flight
                </Button>
              </GridItem>
              <GridItem colStart={4} colEnd={6} h="10" bg="none">
                <Button className="close-modal-btn" onClick={onClose}>
                  Close
                </Button>
              </GridItem>
            </Grid>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SelectedReservationModal;
