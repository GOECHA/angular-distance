import React from "react";
import "./SelectedReservationModal.css";

import {
  Button,
  Flex,
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
  id,
  handleReset
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
        id={id}
        className="modal-select-planet-btn"
        onClick={(e) => {
          handleReset();
          handleClick(e);
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        More Info
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent className="planet-modal">
          <Flex justifyContent="center">
          <ModalHeader
          className="modal-planet-name"
            fontSize="3xl"
            color="white"
            textShadow="2px 2px #020038"
          >
            {planetName}
          </ModalHeader>
           </Flex>
          <ModalCloseButton className="modal-close-btn" color="white" textShadow="2px 2px #020038" onClick={onClose} />
          <ModalBody>
            <Grid 
             h='150px'
             templateRows='repeat(2, 1fr)'
             templateColumns='5, fr'>
         
            <GridItem colSpan={2} h='10'>
           <Text className="modal-calendar-text">Select Date </Text>
            
           </GridItem>
          

           <GridItem colStart={4} colEnd={6} h='10'>
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
              </GridItem>
            

           <GridItem colSpan={2} h='10'>
             
            <Text className="moon-info-text" color="white">Moon Information</Text>
            </GridItem>
           

            <GridItem colStart={4} colEnd={6} h='10'>
            
              {/* <div className="moon-selection-wrapper"> */}
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
            {/* </div> */}
            </GridItem>
          
            </Grid>
            <img
              className="modal-background"
              src={backGroundImage}
              alt={planetName}
            />
          </ModalBody>
          <Flex justifyContent="center">

          <ModalFooter >
                <Button
                  className="modal-reserve-btn"
                  onClick={(e) => {
                    handleChange(e)
                    onClose();

                  }}
                  
                >
                  Reserve Flight
                </Button>
              
          </ModalFooter>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SelectedReservationModal;
