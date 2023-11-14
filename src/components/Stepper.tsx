// Stepper component for handling step navigation in the multi-step signup process
const Stepper = ({ steps, setSteps, activeStep, setActiveStep }: any) => {
  // Function to handle the "Next" button click
  const handleNext = () => {
    // Incrementing the active step, but not exceeding the total number of steps
    setActiveStep((prevStep: any) => Math.min(prevStep + 1, steps.length - 1));

    // Updating the steps data to mark the current step as completed
    const updatedData = steps.map((item: any) => {
      if (item.id === activeStep + 1) {
        return { ...item, isCompleted: true };
      }
      return item;
    });

    // Setting the updated steps data
    setSteps(updatedData);
  };

  // Function to handle the "Previous" button click
  const handlePrev = () => {
    // Decrementing the active step, but not going below the first step
    setActiveStep((prevStep: any) => Math.max(prevStep - 1, 0));

    // Updating the steps data to mark the previous step as incomplete
    const updatedData = steps.map((item: any) => {
      if (item.id === activeStep) {
        return { ...item, isCompleted: false };
      }
      return item;
    });

    // Setting the updated steps data
    setSteps(updatedData);
  };

  // Rendering the current step's component and navigation buttons
  return (
    <>
      <div>{steps[activeStep].component}</div>
      <div className="d-flex flex-stack pt-15 ">
        {/* "Previous" button with conditional disabled state */}
        <button
          onClick={handlePrev}
          disabled={activeStep === 0}
          className="btn btn-lg btn-light-primary"
        >
          Previous
        </button>
        {/* "Continue" button with conditional disabled state */}
        <button
          className="btn btn-lg btn-primary"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Continue
        </button>
      </div>
    </>
  );
};

// Exporting the Stepper component
export default Stepper;
