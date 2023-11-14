const CreatorInfo = () => {
  return (
    <div>
      <div className="w-100">
        <div className="pb-10 pb-lg-12">
          <h2 className="fw-bold text-gray-900">Creator Info</h2>

          <div className="text-muted fw-semibold fs-6">
            If you need more info, please check out
            <a href="#" className="link-primary fw-bold">
              Help Page
            </a>
            .
          </div>
        </div>

        <div className="fv-row mb-10">
          <label className="form-label required">Business Name</label>

          <input
            name="business_name"
            className="form-control form-control-lg form-control-solid"
            value="Keenthemes Inc."
          />
        </div>

        <div className="fv-row mb-10">
          <label className="d-flex align-items-center form-label">
            <span className="required">Shortened Descriptor</span>
            <span
              className="lh-1 ms-1"
              data-bs-toggle="popover"
              data-bs-trigger="hover"
              data-bs-html="true"
              data-bs-content='&lt;div className=&#039;p-4 rounded bg-light&#039;&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-4&#039;&gt; &lt;i className="ki-duotone ki-bank fs-3 me-3"&gt;&lt;span className="path1"&gt;&lt;/span&gt;&lt;span className="path2"&gt;&lt;/span&gt;&lt;/i&gt; &lt;div className=&#039;fw-bold&#039;&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack fw-semibold text-gray-600&#039;&gt; &lt;div&gt;Amount&lt;/div&gt; &lt;div&gt;Transaction&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;separator separator-dashed my-2&#039;&gt;&lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-gray-900 fw-bold mb-2&#039;&gt; &lt;div&gt;USD345.00&lt;/div&gt; &lt;div&gt;KEENTHEMES*&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-2&#039;&gt; &lt;div&gt;USD75.00&lt;/div&gt; &lt;div&gt;Hosting fee&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted&#039;&gt; &lt;div&gt;USD3,950.00&lt;/div&gt; &lt;div&gt;Payrol&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;'
            >
              <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
              </i>
            </span>
          </label>

          <input
            name="business_descriptor"
            className="form-control form-control-lg form-control-solid"
            value="KEENTHEMES"
          />

          <div className="form-text">
            Customers will see this shortened version of your statement
            descriptor
          </div>
        </div>

        <div className="fv-row mb-10">
          <label className="form-label required">Corporation Type</label>

          <select
            name="business_type"
            className="form-select form-select-lg form-select-solid"
            data-control="select2"
            data-placeholder="Select..."
            data-allow-clear="true"
            data-hide-search="true"
          >
            <option></option>
            <option value="1">S Corporation</option>
            <option value="1">C Corporation</option>
            <option value="2">Sole Proprietorship</option>
            <option value="3">Non-profit</option>
            <option value="4">Limited Liability</option>
            <option value="5">General Partnership</option>
          </select>
        </div>

        <div className="fv-row mb-10">
          <label className="form-label">Business Description</label>

          <textarea
            name="business_description"
            className="form-control form-control-lg form-control-solid"
            rows={3}
          ></textarea>
        </div>

        <div className="fv-row mb-0">
          <label className="fs-6 fw-semibold form-label required">
            Contact Email
          </label>

          <input
            name="business_email"
            className="form-control form-control-lg form-control-solid"
            value="corp@support.com"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatorInfo;
