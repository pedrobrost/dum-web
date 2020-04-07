import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";

import Header from "./productTable/Header";
import Body from "./productTable/Body";
import Footer from "./productTable/Footer";

const styles = (theme) => ({
  rootTable: {
    width: "100%",
    marginTop: theme.spacing(),
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
});

class ProductTable extends Component {
  state = {
    page: 0,
    rowsPerPage: 10,
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };
  render() {
    const { classes, products, loading } = this.props;
    const { page, rowsPerPage } = this.state;
    return (
      <div className={classes.rootTable}>
        <Table className={classes.table}>
          <Header />
          <Body
            products={products}
            page={page}
            rowsPerPage={rowsPerPage}
            loading={loading}
            openEditModal={this.props.openEditModal}
          />
          <Footer
            count={products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={this.handleChangePage}
            handleChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Table>
      </div>
    );
  }
}

export default withStyles(styles)(ProductTable);
