import { FC, useState } from "react";
import InfoSidebar from "./components/InfoSidebar";
import InfoView from "./components/InfoView";
import AccountType from "./components/AccountType";
import AccountDetails from "./components/AccountDetails";
import CreatorInfo from "./components/CreatorInfo";
import Completed from "./components/Completed";
import { FlowStep } from "./components/types";

const flowSteps: FlowStep[] = [
  {
    id: 1,
    title: "Account Type",
    subTitle: "Select your account type",
    component: <AccountType />,
    isCompleted: false,
  },
  {
    id: 2,
    title: "Account Details",
    subTitle: "Add your personal info",
    component: <AccountDetails />,
    isCompleted: false,
  },
  {
    id: 3,
    title: "Creator Info",
    subTitle: "Setup your business details",
    component: <CreatorInfo />,
    isCompleted: false,
  },
  {
    id: 4,
    title: "Completed",
    subTitle: "Your account is created",
    component: <Completed />,
    isCompleted: false,
  },
];

const MultiStepSignupPage: FC = () => {
  const [steps, setSteps] = useState<FlowStep[]>(flowSteps);
  const [activeStep, setActiveStep] = useState(0);
  console.log(steps, "steps");
  return (
    <div className="d-flex flex-column flex-root" id="kt_app_root">
      <div
        className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep"
        id="kt_create_account_stepper"
      >
        <InfoSidebar steps={steps} activeStep={activeStep} />
        <InfoView
          steps={steps}
          setSteps={setSteps}
          setActiveStep={setActiveStep}
          activeStep={activeStep}
        />
      </div>
    </div>
  );
};

export default MultiStepSignupPage;
