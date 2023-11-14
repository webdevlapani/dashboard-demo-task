// Importing necessary modules from React and React Router
import React, { FC } from "react";
import { Link } from "react-router-dom";

// Defining the type for the SideMenuItem component props
type Props = {
  to: string; // URL to navigate to
  title: string; // Title of the menu item
  icon?: string; // Icon for the menu item
  fontIcon?: string; // Font icon for the menu item
  hasBullet?: boolean; // Boolean indicating whether to display a bullet next to the menu item
  children?: React.ReactDOM; // Children components
};

// SideMenuItem component for rendering a menu item in the sidebar
const SideMenuItem: FC<Props> = ({
  to,
  title,
  fontIcon,
  hasBullet = false,
}) => {
  return (
    // Container for the menu item
    <div className="menu-item">
      {/* Link to navigate to the specified URL */}
      <Link className="menu-link without-sub" to={to}>
        {/* Displaying a bullet if specified */}
        {hasBullet && (
          <span className="menu-bullet">
            <span className="bullet bullet-dot"></span>
          </span>
        )}
        {/* Displaying a font icon if specified */}
        {fontIcon && <i className="bi fs-3"></i>}
        {/* Displaying the title of the menu item */}
        <span className="menu-title">{title}</span>
      </Link>
    </div>
  );
};

// Exporting the SideMenuItem component
export { SideMenuItem };
