// Importing necessary module from React Router
import { Link } from "react-router-dom";

// Component for selecting the account type in the multi-step signup process
const AccountType = () => {
  return (
    // Container for the content related to the account type step
    <div className="current" data-kt-stepper-element="content">
      <div className="w-100">
        <div className="pb-10 pb-lg-15">
          {/* Heading for the account type selection */}
          <h2 className="fw-bold d-flex align-items-center text-gray-900">
            Choose Account Type
          </h2>

          {/* Information about the account type selection */}
          <div className="text-muted fw-semibold fs-6">
            If you need more info, please check out{" "}
            {/* Link to the Help Page */}
            <Link to="/support" className="link-primary fw-bold">
              Help Page
            </Link>
            .
          </div>
        </div>

        {/* Radio buttons for selecting the account type */}
        <div className="fv-row">
          <div className="row">
            {/* Option for signing up as a creator */}
            <div className="col-lg-6">
              <input
                type="radio"
                className="btn-check"
                name="account_type"
                value="personal"
                id="kt_create_account_form_account_type_personal"
              />
              <label className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-10">
                <img src="/creator.svg" className="me-5" />

                {/* Information about the creator account type */}
                <span className="d-block fw-semibold text-start">
                  <span className="text-gray-900 fw-bold d-block fs-4 mb-1">
                    Creator
                  </span>
                  <span className="text-muted fw-semibold fs-6">
                    Sign-up as a creator
                  </span>
                </span>
              </label>
            </div>

            {/* Option for signing up as an agency */}
            <div className="col-lg-6">
              <input
                type="radio"
                className="btn-check"
                name="account_type"
                value="corporate"
                id="kt_create_account_form_account_type_corporate"
              />
              <label className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center">
                <img src="/briefcase.svg" className="me-5" />

                {/* Information about the agency account type */}
                <span className="d-block fw-semibold text-start">
                  <span className="text-gray-900 fw-bold d-block fs-4 mb-1">
                    Agency
                  </span>
                  <span className="text-muted fw-semibold fs-6">
                    Sign-up as an agency
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the AccountType component
export default AccountType;
