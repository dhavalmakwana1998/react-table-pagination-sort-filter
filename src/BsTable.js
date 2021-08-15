import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
// Pagination
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import cellEditFactory from "react-bootstrap-table2-editor";

const BsTable = () => {
  const { SearchBar, ClearSearchButton } = Search;

  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="btn btn-warning" onClick={handleClick}>
          Export to CSV
        </button>
      </div>
    );
  };
  const products = [
    { id: 1, name: "George", animal: "Monkey" },
    { id: 2, name: "Jeffrey", animal: "Giraffe" },
    { id: 3, name: "Alice", animal: "Giraffe" },
    { id: 4, name: "Foster", animal: "Tiger" },
    { id: 5, name: "Tracy", animal: "Bear" },
    { id: 6, name: "Joesph", animal: "Lion" },
    { id: 7, name: "Tania", animal: "Deer" },
    { id: 8, name: "Chelsea", animal: "Tiger" },
    { id: 9, name: "Benedict", animal: "Tiger" },
    { id: 10, name: "Chadd", animal: "Lion" },
    { id: 11, name: "Delphine", animal: "Deer" },
    { id: 12, name: "Elinore", animal: "Bear" },
    { id: 13, name: "Stokes", animal: "Tiger" },
    { id: 14, name: "Tamara", animal: "Lion" },
    { id: 15, name: "Zackery", animal: "Bear" },
    { id: 16, name: "DM", animal: "Zackery" },
  ];

  const columns = [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "name", text: "Name", sort: true, filter: textFilter() },
    { dataField: "animal", text: "Animal", sort: true },
  ];
  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ];
  const selectRow = {
    mode: "checkbox",
    selected: [2],
    style: { background: "#ccc" },
  };

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });
  return (
    <div className="container">
      <h3>React Bootstrap</h3>
      <ToolkitProvider
        bootstrap4
        BootstrapTable
        keyField="id"
        data={products}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={pagination}
        search
        exportCSV
        cellEdit={cellEditFactory({ mode: "dbclick" })}
      >
        {(props) => (
          <div>
            <div className="row">
              <div className="col-4 d-flex align-items-center">
                <SearchBar className="m-0" {...props.searchProps} />
                <ClearSearchButton
                  {...props.searchProps}
                  className="btn btn-outline-danger"
                />
              </div>
              <div className="col-2"></div>
              <div className="col-2"></div>
              <div className="col-2"></div>
              <div className="col-2 text-right">
                <MyExportCSV {...props.csvProps} />
              </div>
            </div>
            <hr />
            <BootstrapTable
              cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
              filter={filterFactory()}
              selectRow={selectRow}
              defaultSorted={defaultSorted}
              pagination={pagination}
              {...props.baseProps}
            />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
};

export default BsTable;
