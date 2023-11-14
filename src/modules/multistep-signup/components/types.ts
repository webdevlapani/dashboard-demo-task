export type FlowStep = {
  id: number;
  title: string;
  subTitle: string;
  component: React.ReactElement; // You might need to import React from 'react'
  isCompleted: boolean;
};

export type InfoViewProps = {
  steps: FlowStep[];
  activeStep: number;
  setSteps: React.Dispatch<React.SetStateAction<FlowStep[]>>;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

export type InfoSidebarProps = Omit<
  InfoViewProps,
  "setSteps" | "setActiveStep"
>;
