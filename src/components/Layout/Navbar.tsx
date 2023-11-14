// Importing necessary modules and components
import { Navbar, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// NavbarComponent for displaying the top navigation bar
const NavbarComponent = () => {
  return (
    // Bootstrap Navbar with white background and border at the bottom
    <Navbar
      bg="white"
      className="border-bottom"
      expand="lg"
      style={{ height: "84px" }}
    >
      {/* Container for the Navbar content */}
      <div className="container-fluid">
        {/* Navbar Brand with a logo */}
        <Navbar.Brand href="#home">
          <Image
            src="/logo.png"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        {/* Container for additional icons and user image */}
        <div className="d-flex flex-stack gap-4">
          {/* Search icon button */}
          <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-35px h-md-35px">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>

          {/* Bell icon button with notification badge */}
          <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-35px h-md-35px">
            <FontAwesomeIcon icon={faBell} />
            {/* Notification badge */}
            <div className="badge badge-circle badge-danger position-absolute translate-middle bottom-0 ms-10 mt-10 h-15px w-15px fs-9 text-white">
              5
            </div>
          </div>

          {/* User profile image */}
          <div className="cursor-pointer symbol symbol-30px symbol-md-35px">
            <img
              className="symbol symbol-circle symbol-30px symbol-md-35px"
              src="/300-1.jpg"
              alt="user"
            />
          </div>
        </div>
      </div>
    </Navbar>
  );
};

// Exporting the NavbarComponent
export default NavbarComponent;
