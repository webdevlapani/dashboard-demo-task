// Importing necessary modules from React and React Router
import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components and pages
import MultiStepSignup from "../pages/multistep-singup";
import App from "../App";
import PersonlaInfoSignup from "../pages/personalinfo-signup";
import Layout from "../components/Layout/Layout";
import Dashboard from "../pages/dashboard";

// Defining the main component for handling application routes
const AppRoutes: FC = () => {
  return (
    // Using BrowserRouter for client-side routing
    <BrowserRouter>
      {/* Defining route structure using the Routes component */}
      <Routes>
        {/* Route for the main App component */}
        <Route element={<App />}>
          {/* Nested routes for authentication-related pages */}
          <Route path="/auth/multistep-signup" element={<MultiStepSignup />} />
          <Route
            path="/auth/personalinfo-signup"
            element={<PersonlaInfoSignup />}
          />
        </Route>

        {/* Route for the Layout component, used for authenticated pages */}
        <Route element={<Layout />}>
          {/* Nested routes for authenticated dashboard and submission pages */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// Exporting the main component
export default AppRoutes;
