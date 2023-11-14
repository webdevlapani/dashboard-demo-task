import { FC } from "react";
import Stepper from "../../../components/Stepper";
import { InfoViewProps } from "./types";

const InfoView: FC<InfoViewProps> = ({
  steps,
  setSteps,
  activeStep,
  setActiveStep,
}) => {
  return (
    <div className="d-flex flex-column flex-lg-row-fluid py-10">
      <div className="d-flex flex-center flex-column flex-column-fluid">
        <div className="w-lg-650px w-xl-700px p-10 p-lg-15 mx-auto">
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

export default InfoView;
