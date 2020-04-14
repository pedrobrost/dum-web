import React from "react";
import Button from "@material-ui/core/Button";
import ReactToPrint from "react-to-print";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Typography } from "@material-ui/core";

class ComponentToPrint extends React.Component {
  render() {
    return (
      this.props.order.customer && (
        <div style={{ padding: 50 }}>
          <Typography variant="h5" style={{ marginBottom: 10 }}>
            DUM - Gastronomía
          </Typography>
          <Typography variant="subtitle1">
            Cliente: {this.props.order.customer.name}
          </Typography>
          <Typography variant="subtitle1">
            Dirección: {this.props.order.address}
          </Typography>
          <Typography variant="subtitle1" style={{ marginBottom: 10 }}>
            Teléfono: {this.props.order.customer.phone}
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Descripción</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">P. Unidad</TableCell>
                <TableCell align="right">Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.order.products.map((p) => (
                <TableRow key={`${p.product._id}-${p.amount}`}>
                  <TableCell>{p.product.name}</TableCell>
                  <TableCell align="right">{p.amount}</TableCell>
                  <TableCell align="right">{p.price}</TableCell>
                  <TableCell align="right">{p.price * p.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Typography variant="h6" style={{ marginTop: 30, fontWeight: 400 }}>
            Total: $
            {this.props.order.products.reduce(
              (ac, cv) => ac + cv.price * cv.amount,
              0
            )}
          </Typography>
        </div>
      )
    );
  }
}

class Print extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <Button color="primary">Imprimir</Button>}
          content={() => this.componentRef}
        />
        <div style={{ display: "none" }}>
          <ComponentToPrint
            order={this.props.order}
            ref={(el) => (this.componentRef = el)}
          />
        </div>
      </div>
    );
  }
}

export default Print;
