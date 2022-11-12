// import { useState } from "react";
import React, { useState, useEffect } from "react";

export function useUserHook() {
  const [reservationHook, setreservationHook] = useState([]);
  const [change, setChange] = useState(false);


React.useEffect(() => {
    const loadSaved = async () => {
      setreservationHook(localStorage.getItem("reservationHook"));
    };
    loadSaved();
  }, [reservationHook, change]);
  
  const saveData = async (name) => {
    setChange(!change);
    setreservationHook(localStorage.getItem("reservationHook"));
    await localStorage.setItem("reservationHook", reservationHook);
  };
  
  const removeData = async () => {
    setChange(!change);
    await localStorage.removeItem("reservationHook");
  };
  
  return {
    reservationHook,
    saveData,
    removeData
  };
  }

// export const useLocalStorage = (key, initialValue) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (err) {
//       console.error(err);
//       return initialValue;
//     }
//   });

//   const setValue = value => {
//     try {
//       const valueToStore =
//         value instanceof Function ? value(storedValue) : value;
//       setStoredValue(valueToStore);
//       window.localStorage.setItem(key, JSON.stringify(valueToStore));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return [storedValue, setValue];
// };

// export default useLocalStorage;