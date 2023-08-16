
import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import ReservationPage from "../ReservationPage/ReservationPage";
import LandingPageOne from "../LandingPageOne/LandingPageOne";
import LandingPageTwo from "../LandingPageTwo/LandingPageTwo";
import AboutPage from "../AboutPage/AboutPage";
import ReservationDetails from "../ReservationDetails/ReservationDetails";
import CircularIndeterminate from "../CircularIndeterminate/CircularIndeterminate";
import axios from "axios";
import InternalServerError from "../errorHandling/InternalServerError";
import Status404 from "../errorHandling/Status404";
import AppContext from "../AppContext";

import { Route, Switch } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax, Mousewheel, Keyboard } from "swiper";

import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  const [allPlanets, setAllPlanets] = useState([]);
  // eslint-disable-next-line
  const [goToReservation, setGoToReservation] = useState(0);
  // eslint-disable-next-line
  const [gotToHome, setGoToHome] = useState(0);
  const [reservation, setReservation] = useState(
    JSON.parse(localStorage.getItem("reservationDetails")) ?? []
  );
  const [loading, setLoading] = useState(false);

  const globals = {
    allPlanets: allPlanets,
    setAllPlanets: setAllPlanets,
  };

  const nav = useRef(null);
  const onButtonClick = () => {
    nav.current.focus();
  };

  const authenticate = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds
  };

  useEffect(() => {
    window.localStorage.setItem(
      "reservationDetails",
      JSON.stringify(reservation)
    );
  }, [reservation]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: "https://api.le-systeme-solaire.net/rest/bodies/",
      data: "data",
      key: "data.id",
    })
      .then((res) => {
        setAllPlanets(res.data.bodies);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  }, []);

  const deletePost = (e) => {
    const filteredReservations = reservation.filter(
      (reservation) => reservation.id !== parseInt(e.target.id)
    );
    setReservation(filteredReservations);
  };

  const reserveFlight = (res) => {
    setReservation([...reservation, res]);
    console.log(`res`, [res]);
  };

  return (
    <AppContext.Provider value={globals}>
      <ChakraProvider>
      <main className="app-container">
        <Switch>
          {loading && (
            <CircularIndeterminate
              authenticate={authenticate}
              isLoading={true}
            />
          )}
          <Route
            exact
            path="/reservations"
            render={() => (
              <ReservationPage
                setGoToHome={setGoToHome}
                allPlanets={allPlanets}
                reserveFlight={reserveFlight}
                loading={loading}
              />
            )}
          />
          <Route
            exact
            path="/reservation-details"
            render={() => (
              <ReservationDetails
                reservationDetails={reservation}
                deletePost={deletePost}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <Swiper
                navigation={{
                  ref: { nav },
                  onClick: { onButtonClick },
                }}
                modules={[Parallax, Navigation, Mousewheel, Keyboard]}
                className="appSwiper"
                // loop={true}
                speed={800}
                parallax={true}
              >
                <SwiperSlide className="landingSwiper-1">
                  <LandingPageOne setGoToReservation={setGoToReservation} />
                </SwiperSlide>
                <SwiperSlide className="landingSwiper-2">
                  <LandingPageTwo setGoToReservation={setGoToReservation} />
                </SwiperSlide>
                <SwiperSlide className="landingSwiper-3">
                  <AboutPage setGoToReservation={setGoToReservation} />
                </SwiperSlide>
              </Swiper>
            )}
          />
          <Route component={Status404} />
          <Route component={InternalServerError} />
        </Switch>
      </main>
      </ChakraProvider>
    </AppContext.Provider>
  );
};

export default App;
