import { Link } from "react-router-dom";

const Verification = () => {
  return (
    <div>
      <div className="w-100">
        <div className="pb-10 pb-lg-15 text-center">
          <h2 className="fw-bold text-success">Verification</h2>

          <h1 className="fw-bolder text-gray-900 mb-5">Verify your email</h1>
          <div className="mt-11">
            <Link to="/dashboard" className="btn btn-sm btn-primary">
              Skip for now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
