const PersonalInfo = () => {
  return (
    <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
      <div className="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10">
        <div className="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
          <div className="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
            <form
              className="form w-100"
              data-kt-redirect-url="authentication/layouts/overlay/sign-in.html"
              action="#"
            >
              <div className="text-center mb-11">
                <h1 className="text-gray-900 fw-bolder mb-3">Personal Info</h1>

                <div className="text-gray-500 fw-semibold fs-6">
                  Add your personal info
                </div>
              </div>

              <div className="row g-3 mb-9">
                <div className="col-md-6">
                  <a
                    href="#"
                    className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                  >
                    <img alt="Logo" src="/google.svg" className="h-15px me-3" />
                    Sign in with Google
                  </a>
                </div>

                <div className="col-md-6">
                  <a
                    href="#"
                    className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                  >
                    <img
                      alt="Logo"
                      src="/apple.svg"
                      className="theme-light-show h-15px me-3"
                    />
                    Sign in with Apple
                  </a>
                </div>
              </div>

              <div className="separator separator-content my-14">
                <span className="w-125px text-gray-500 fw-semibold fs-7">
                  Or with email
                </span>
              </div>

              <div className="row mb-8">
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    className="form-control bg-transparent"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    className="form-control bg-transparent"
                  />
                </div>
              </div>

              <div className="row mb-8">
                <div className="col-md-12">
                  <input
                    type="text"
                    placeholder="Creator Name"
                    name="cname"
                    className="form-control bg-transparent"
                  />
                </div>
              </div>
              <div className="row mb-8">
                <div className="col-md-12">
                  <input
                    type="text"
                    placeholder="E-mail"
                    name="cname"
                    className="form-control bg-transparent"
                  />
                </div>
              </div>
              <div className="row mb-8">
                <div className="col-md-12">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="cname"
                    className="form-control bg-transparent"
                  />
                </div>
              </div>
              <div className="row mb-8">
                <div className="col-md-12">
                  <input
                    type="password"
                    placeholder="Password"
                    name="cname"
                    className="form-control bg-transparent"
                  />
                </div>
              </div>
              <div className="row mb-8">
                <div className="col-md-12">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="cname"
                    className="form-control bg-transparent"
                  />
                </div>
              </div>

              <div className="fv-row mb-8">
                <label className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="toc"
                    value="1"
                  />
                  <span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">
                    I Accept the
                    <a href="#" className="ms-1 link-primary">
                      Terms
                    </a>
                  </span>
                </label>
              </div>

              <div className="d-grid mb-10">
                <button type="submit" className="btn btn-primary text-white">
                  <span className="indicator-label">Sign up</span>
                </button>
              </div>

              <div className="text-gray-500 text-center fw-semibold fs-6">
                Already have an Account?
                <a
                  href="authentication/layouts/overlay/sign-in.html"
                  className="link-primary fw-semibold"
                >
                  Sign in
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
