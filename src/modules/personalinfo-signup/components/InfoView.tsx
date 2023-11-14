// Importing necessary modules from React
import { FC } from "react";

// Importing the Stepper component for displaying step progress
import Stepper from "../../../components/Stepper";

// Importing types for the InfoView component
import { InfoViewProps } from "./types";

// Defining the InfoView component, responsible for displaying step progress and content
const InfoView: FC<InfoViewProps> = ({
  steps,
  setSteps,
  activeStep,
  setActiveStep,
}) => {
  return (
    // Container for the main content of the InfoView component
    <div className="d-flex flex-column flex-lg-row-fluid py-10">
      {/* Centering and aligning content in the container */}
      <div className="d-flex flex-center flex-column flex-column-fluid">
        {/* Responsive container with a fixed width for the step progress and content */}
        <div className="w-lg-650px w-xl-700px p-10 p-lg-15 mx-auto">
          {/* Stepper component for displaying step progress */}
          <Stepper
            steps={steps}
            setSteps={setSteps}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
          />
        </div>
      </div>
    </div>
  );
};

// Exporting the InfoView component
export default InfoView;
