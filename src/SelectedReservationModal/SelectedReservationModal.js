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
  currentSelections,
  planetName,
  moonOptions,
  handleClick,
  handleChange,
  id
}) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const [overlay, setOverlay] = React.useState(<OverlayOne />);
console.log('modal-moon', {moonOptions})
  return (
    <>
      <Button
        className="modal-select-planet-btn"
        onClick={(e) => {
          setOverlay(<OverlayOne />);
          onOpen();
          handleClick(e);
          
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
          <ModalCloseButton className="modal-close-btn" color="white" textShadow="2px 2px #020038" onClick={onClose} />
          <ModalBody>
           <Text className="modal-calendar-text">Calendar</Text>
            <img
              className="modal-background"
              src={backGroundImage}
              alt={planetName}
            />
           
            <Text className="moon-info-text" color="white">Moon Information</Text>
            <div className="calendar-input-wrapper">
                <input
                  name="date"
                  className="calendar"
                  type="date"
                  min="2145-09-25"
                  value={currentSelections.date}
                  onChange={(e) => handleChange(e)}
                />
                <p className="earth-calendar">Earth Calendar</p>
              </div>
              <div className="moon-selection-wrapper">
              <form>
              <select
                  className="moon-selections"
                  id={id}
                  value={currentSelections.moon}
                  name="moon"
                  onChange={(e) => console.log(92, handleChange(e))}
                >
                  <option value="" disabled>
                    MOON
                  </option>
                  {moonOptions}
                </select> 
            </form>
            </div>
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
