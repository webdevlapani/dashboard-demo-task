// Importing necessary modules from React
import { FC } from "react";

// Importing types for the InfoSidebar component
import { InfoSidebarProps } from "./types";

// Defining the InfoSidebar component, responsible for displaying step progress and navigation
const InfoSidebar: FC<InfoSidebarProps> = ({ steps, activeStep }) => {
  return (
    // Container for the InfoSidebar component with fixed width
    <div className="d-flex flex-column flex-lg-row-auto w-lg-350px w-xl-500px">
      {/* Sidebar container with background image */}
      <div
        className="d-flex flex-column position-lg-fixed top-0 bottom-0 w-lg-350px w-xl-500px scroll-y bgi-size-cover bgi-position-center"
        style={{ backgroundImage: "url(/auth-bg.png)" }}
      >
        {/* Logo section at the top of the sidebar */}
        <div className="d-flex flex-center py-10 py-lg-20 mt-lg-20">
          <a href="index.html">
            <img alt="Logo" src="/custom-1.png" className="h-70px" />
          </a>
        </div>

        {/* Navigation section displaying step progress */}
        <div className="d-flex flex-row-fluid justify-content-center p-10">
          <div className="stepper-nav">
            {/* Mapping through each step to display in the sidebar */}
            {steps.map((item: any, index: number) => (
              <div
                key={index}
                className={`stepper-item ${
                  activeStep === index ? "current" : ""
                }  ${item.isCompleted ? "completed" : ""}`}
              >
                <div className="stepper-wrapper">
                  <div className="stepper-icon rounded-3">
                    {/* Checkmark icon for completed steps */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      className="stepper-check"
                      fill="#17c653"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                    {/* Displaying the step number */}
                    <span className="stepper-number">{item.id}</span>
                  </div>

                  {/* Displaying the step title and subtitle */}
                  <div className="stepper-label">
                    <h3 className="stepper-title fs-2">{item.title}</h3>
                    <div className="stepper-desc fw-normal">
                      {item.subTitle}
                    </div>
                  </div>
                </div>
                {/* Displaying a line between steps */}
                {steps.length - 1 !== index && (
                  <div className="stepper-line h-40px"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Links section at the bottom of the sidebar */}
        <div className="d-flex flex-center flex-wrap px-5 py-10">
          <div className="d-flex fw-normal">
            {/* Placeholder links */}
            <a href="#" className="text-success px-5" target="_blank">
              Terms
            </a>
            <a href="#" className="text-success px-5" target="_blank">
              Plans
            </a>
            <a href="#" className="text-success px-5" target="_blank">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the InfoSidebar component
export default InfoSidebar;
