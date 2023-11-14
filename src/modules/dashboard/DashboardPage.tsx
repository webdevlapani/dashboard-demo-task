import { faMagnifyingGlass, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import useDashboardPage from "./useDashboardPage";
import { Table } from "react-bootstrap";
import { flexRender } from "@tanstack/react-table";
import "./style.css";

const DashboardPage: FC = () => {
  const { table } = useDashboardPage();
  return (
    <div className="p-10 flex-fill">
      <div className="mb-10 d-flex flex-stack">
        <div className="card card-flush h-lg-100 strapped-border">
          <div className="card-header pt-5 gap-10">
            <div>
              <h3 className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">
                252
              </h3>
              <p className="text-muted pt-1 fw-semibold fs-6">Links Scraped</p>
            </div>
            <img src="/scraped.svg" />
          </div>
        </div>
        <div className="card card-flush h-lg-100 checked-border">
          <div className="card-header pt-5 gap-10">
            <div>
              <h3 className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">
                252
              </h3>
              <p className="text-muted pt-1 fw-semibold fs-6">
                Links Manually Checked
              </p>
            </div>
            <img src="/checked.svg" />
          </div>
        </div>
        <div className="card card-flush h-lg-100 violation-border">
          <div className="card-header pt-5 gap-10">
            <div>
              <h3 className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">
                252
              </h3>
              <p className="text-muted pt-1 fw-semibold fs-6">
                Link Violations
              </p>
            </div>
            <img src="/violation.svg" />
          </div>
        </div>
        <div className="card card-flush h-lg-100 removed-border">
          <div className="card-header pt-5 gap-10">
            <div>
              <h3 className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">
                252
              </h3>
              <p className="text-muted pt-1 fw-semibold fs-6">Links Removed</p>
            </div>
            <img src="/removed.svg" />
          </div>
        </div>
      </div>
      <div className="card w-full">
        <div className="card-header border-0 pt-6">
          <div className="card-title">
            <div className="d-flex align-items-center position-relative my-1">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="fs-4 position-absolute ms-3"
              />
              <input
                type="text"
                className="form-control form-control-solid w-250px ps-12"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="card-toolbar d-flex">
            <button
              type="button"
              className="btn btn-light-primary me-3 d-flex flex-fill"
            >
              <FontAwesomeIcon icon={faUpload} className="me-2" />
              Export
            </button>
            <select className="form-select form-select-solid me-3">
              <option value="today" selected>
                Today
              </option>
              <option value="yesterday">Yesterday</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
            <select className="form-select form-select-solid">
              <option value="status" selected>
                Status
              </option>
              <option value="removed">Removed</option>
              <option value="delisted">Delisted</option>
            </select>
          </div>
        </div>

        <div className="card-body pt-0">
          <Table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0"
                >
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none"
                              : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex flex-stack">
            <button className="btn btn-sm btn-flex btn-secondary fw-bold">
              Total Result: {table.getRowModel().rows.length}
            </button>
            <div className="d-flex gap-2">
              <button
                className="border rounded p-1 btn btn-secondary fs-2"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                {"<"}
              </button>
              <button
                className="border rounded p-1 btn btn-secondary fs-2"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
