// src/components/StatePageWrapper.jsx
import React from "react";
import { useParams } from "react-router-dom";
import StatePage from "../components/statePage"; // Import your StatePage component

const StatePageWrapper = () => {
  const { stateId } = useParams();

  return <StatePage id={stateId} />;
};

export default StatePageWrapper;
