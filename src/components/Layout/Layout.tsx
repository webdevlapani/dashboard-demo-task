// Importing necessary modules from React
import { FC } from "react";

// Importing styles for the layout component
import "./layout.css";

// Importing sidebar options and Navbar component
import { sidebarOptions } from "./menu";
import NavbarComponent from "./Navbar";

// Importing components for routing
import { NavLink, Outlet } from "react-router-dom";

// Layout component for the application
const Layout: FC = () => {
  return (
    // Main container for the entire page
    <div className="page">
      {/* Navbar component for the top navigation */}
      <NavbarComponent />

      {/* Container for the main content and sidebar */}
      <div className="d-flex main-container" id="kt_wrapper">
        {/* Sidebar container with border on the right */}
        <div className="sidebar-container border-end">
          {/* Mapping through sidebar options to generate navigation links */}
          {sidebarOptions.map((option) => {
            return (
              <NavLink
                to={option.url}
                className={({ isActive }) =>
                  `menu-item d-flex gap-2 ${isActive && "active"}`
                }
              >
                {/* Icon for the sidebar option */}
                {option.icon}
                {/* Title for the sidebar option */}
                <p className="m-0">{option.title}</p>
              </NavLink>
            );
          })}
        </div>

        {/* Container for the main content */}
        <div
          className="post d-flex flex-column-fluid layout-content"
          id="kt_post"
        >
          {/* Outlet for rendering nested routes */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

// Exporting the Layout component
export default Layout;
