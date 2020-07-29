import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

const footer = props => {
  const { count, page, rowsPerPage } = props;
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={props.handleChangePage}
          onChangeRowsPerPage={props.handleChangeRowsPerPage}
          labelRowsPerPage="Filas"
          labelDisplayedRows={label =>
            `${label.from}-${label.to} de ${label.count}`
          }
        />
      </TableRow>
    </TableFooter>
  );
};

export default footer;
