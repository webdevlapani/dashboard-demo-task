// Importing necessary modules from React
import { FC, useState } from "react";

// Importing components for the multi-step signup process
import InfoSidebar from "./components/InfoSidebar";
import InfoView from "./components/InfoView";
import AccountType from "./components/AccountType";
import CreatorInfo from "./components/CreatorInfo";
import Completed from "./components/Completed";
import { FlowStep } from "./components/types";
import PersonalInfo from "./components/PersonalInfo";
import Verification from "./components/Verification";

// Defining the flow steps for the multi-step signup process
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
    title: "Personal Info",
    subTitle: "Setup your personal Info",
    component: <PersonalInfo />,
    isCompleted: false,
  },
  {
    id: 3,
    title: "Verification",
    subTitle: "Verify your account.",
    component: <Verification />,
    isCompleted: false,
  },
  {
    id: 4,
    title: "Creator Info",
    subTitle: "Setup your business details",
    component: <CreatorInfo />,
    isCompleted: false,
  },
  {
    id: 5,
    title: "Completed",
    subTitle: "Your account is created",
    component: <Completed />,
    isCompleted: false,
  },
];

// Defining the main component for the Personal Info Signup Page
const PersonalInfoSignupPage: FC = () => {
  // Setting up state for steps and active step
  const [steps, setSteps] = useState<FlowStep[]>(flowSteps);
  const [activeStep, setActiveStep] = useState(0);

  return (
    // Main container for the Personal Info Signup Page
    <div className="d-flex flex-column flex-root" id="kt_app_root">
      {/* Stepper container for the multi-step signup process */}
      <div
        className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep"
        id="kt_create_account_stepper"
      >
        {/* Sidebar component displaying step information */}
        <InfoSidebar steps={steps} activeStep={activeStep} />
        {/* Main view component for handling step content and navigation */}
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

// Exporting the main component
export default PersonalInfoSignupPage;
