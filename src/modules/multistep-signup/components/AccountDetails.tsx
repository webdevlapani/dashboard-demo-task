const AccountDetails = () => {
  return (
    <div>
      <div className="w-100">
        <div className="pb-10 pb-lg-15">
          <h2 className="fw-bold text-gray-900">Account Details</h2>

          <div className="text-muted fw-semibold fs-6">
            If you need more info, please check out
            <a href="#" className="link-primary fw-bold">
              Help Page
            </a>
            .
          </div>
        </div>

        <div className="mb-10 fv-row">
          <div className="row mb-2">
            <div className="col">
              <label className="btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4">
                <input
                  type="radio"
                  className="btn-check"
                  name="account_team_size"
                />
                <span className="fw-bold fs-3">1-1</span>
              </label>
            </div>

            <div className="col">
              <label className="btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4 active">
                <input
                  type="radio"
                  className="btn-check"
                  name="account_team_size"
                />
                <span className="fw-bold fs-3">2-10</span>
              </label>
            </div>

            <div className="col">
              <label className="btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4">
                <input
                  type="radio"
                  className="btn-check"
                  name="account_team_size"
                />
                <span className="fw-bold fs-3">10-50</span>
              </label>
            </div>

            <div className="col">
              <label className="btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4">
                <input
                  type="radio"
                  className="btn-check"
                  name="account_team_size"
                />
                <span className="fw-bold fs-3">50+</span>
              </label>
            </div>
          </div>

          <div className="form-text">
            Customers will see this shortened version of your statement
            descriptor
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
