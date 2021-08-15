import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import TablePaginationCom from "./TablePagination";
import PostPagination from "./PostPagination";
import BsTable from "./BsTable";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className=" sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            React Pagination
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link to="bs-table" className="nav-link">
                  BS Table
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/" className="nav-link">
                  MUI Table Pagination
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/post-pagination" className="nav-link">
                  MUI Post Pagination
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={TablePaginationCom} />
          <Route exact path="/post-pagination" component={PostPagination} />
          <Route exact path="/bg-table" component={BsTable} />
          <Route component={BsTable} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
