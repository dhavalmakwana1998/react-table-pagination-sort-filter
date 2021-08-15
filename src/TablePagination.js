import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TablePagination, Typography, Grid } from "@material-ui/core";
import { APIUSER } from "./user";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function TablePaginationCom() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const loadUser = async () => {
    const res = APIUSER;
    setUsers(res.reverse());
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const classes = useStyles();
  return (
    <>
      {users.length ? (
        <>
          <div className="container">
            <Grid container>
              <Grid container spacing={3} style={{ marginBottom: "6px" }}>
                <Grid item xs={12} sm={12}>
                  <Typography variant="h4" className="text-center">
                    Users
                  </Typography>
                </Grid>
              </Grid>

              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  stickyHeader
                  aria-label="sticky table"
                >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">#ID</StyledTableCell>
                      <StyledTableCell>Full Name</StyledTableCell>
                      <StyledTableCell>Userame</StyledTableCell>
                      <StyledTableCell>Email</StyledTableCell>
                      <StyledTableCell>City</StyledTableCell>
                      <StyledTableCell>Zipcode</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {!users.length ? (
                      <TableRow>
                        <TableCell rowSpan={7}>No records found</TableCell>
                      </TableRow>
                    ) : (
                      users
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row, ind) => (
                          <TableRow key={ind + 1}>
                            <TableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              {ind + 1}
                            </TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.username}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.city}</TableCell>
                            <TableCell>{row.phone}</TableCell>
                          </TableRow>
                        ))
                    )}
                    {!users.length ? (
                      <></>
                    ) : (
                      <TableRow>
                        <TablePagination
                          rowsPerPageOptions={[3, 5, 7, 10, 15, 20]}
                          count={users.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </div>
        </>
      ) : (
        <h1 className="text-center">Data not available</h1>
      )}
    </>
  );
}

export default TablePaginationCom;
