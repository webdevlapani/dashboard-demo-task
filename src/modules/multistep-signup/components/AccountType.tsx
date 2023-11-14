import { Link } from "react-router-dom";

const AccountType = () => {
  return (
    <div className="current" data-kt-stepper-element="content">
      <div className="w-100">
        <div className="pb-10 pb-lg-15">
          <h2 className="fw-bold d-flex align-items-center text-gray-900">
            Choose Account Type
          </h2>

          <div className="text-muted fw-semibold fs-6">
            If you need more info, please check out{" "}
            <Link to="/support" className="link-primary fw-bold">
              Help Page
            </Link>
            .
          </div>
        </div>

        <div className="fv-row">
          <div className="row">
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

export default AccountType;
