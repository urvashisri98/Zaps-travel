import React, { useState } from "react";
import { useSelector } from "react-redux";

export const usePassengers = () => {
  const { flightTotalTravellers: { flightAdultsCount, flightChildrenCount, flightInfantsCount }} = useSelector(state => state.searchFlight);

  const [adultCount, setAdultCount] = useState(flightAdultsCount);
  const [childrenCount, setChildrenCount] = useState(flightChildrenCount);
  const [infantCount, setInfantCount] = useState(flightInfantsCount); 

}