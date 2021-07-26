import React from "react";
import MobileStepper from "@material-ui/core/MobileStepper";
import "./Bar.css";

const ProgressBar = ({ activeStep }) => {
  return (
    <MobileStepper
      className="Bar"
      variant="progress"
      steps={20}
      position="static"
      activeStep={activeStep}
    />
  );
};

export default ProgressBar;
